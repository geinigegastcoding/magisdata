import { exec } from 'child_process';
import { chromium } from 'playwright';

async function verify() {
  console.log('Starting Next.js server on port 3001...');
  const server = exec('npx next start -p 3001');
  
  // Wait a bit for the server to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log('Taking screenshot...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3001');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await browser.close();
  
  console.log('Screenshot saved to screenshot.png');
  server.kill();
  process.exit(0);
}

verify().catch(err => {
  console.error(err);
  process.exit(1);
});
