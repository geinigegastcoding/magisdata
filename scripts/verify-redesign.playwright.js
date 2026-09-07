async (page) => {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const base = await page.evaluate(() => location.origin);
  assert(await page.evaluate(() => ['127.0.0.1','localhost'].includes(location.hostname)), 'Use a local preview, never production');
  const report = { viewports: [], interactions: [], links: [] };
  const errors = [];
  const failedRequests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.url().startsWith(base + '/') && response.status() >= 400) failedRequests.push({url:response.url(),status:response.status()}); });
  await page.goto(base);
  const savedConsent=await page.evaluate(()=>localStorage.getItem('magisdata-consent'));
  if (!savedConsent) await page.getByRole('button', {name:'Weigeren',exact:true}).click();
  else await page.getByRole('region',{name:'Cookievoorkeuren'}).waitFor({state:'hidden'});
  for (const [name, width, height] of [['desktop',1440,1000],['laptop',1280,800],['tablet',768,1024],['mobile',390,844],['small-mobile',360,800]]) {
    await page.setViewportSize({width, height});
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < fullHeight; y += 750) await page.evaluate(y => window.scrollTo({top:y,behavior:'instant'}),y);
    await page.evaluate(async () => { await Promise.all(Array.from(document.images).map(i => i.decode().catch(() => {}))); window.scrollTo({top:0,behavior:'instant'}); });
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      overflow: Array.from(document.querySelectorAll('main *, header *, footer *')).filter(e => { const r=e.getBoundingClientRect(); return r.width && r.right > innerWidth+2; }).slice(0,10).map(e=>({tag:e.tagName,cls:e.className})),
      missingImages: Array.from(document.images).filter(i=>!i.complete || i.naturalWidth===0).map(i=>i.src),
      h1: document.querySelectorAll('h1').length,
      heroCTA: document.querySelector('[data-track-cta="redesign-hero"]').getBoundingClientRect().bottom,
      title: document.title
    }));
    assert(layout.h1===1, name+': expected one H1');
    assert(layout.missingImages.length===0,name+': missing images '+JSON.stringify(layout.missingImages));
    assert(layout.scrollWidth<=width,name+': horizontal document overflow');
    report.viewports.push({name,...layout});
    await page.screenshot({path:`output/playwright/${name}-hero.png`,animations:'disabled'});
    if (name==='desktop' || name==='mobile') await page.screenshot({path:`output/playwright/${name}-full.png`,fullPage:true,animations:'disabled'});
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.getByRole('tab',{name:'Leads & opvolging'}).click();
  assert((await page.getByRole('tabpanel').innerText()).includes('Een nieuwe aanvraag'),'Lead example did not update');
  await page.getByRole('tab',{name:'Leads & opvolging'}).press('ArrowRight');
  assert(await page.getByRole('tab',{name:'Kennis & rapportages'}).getAttribute('aria-selected')==='true','Keyboard tab selection failed');
  await page.getByRole('tab',{name:'Kennis & rapportages'}).press('Home');
  report.interactions.push('Workflow examples switch by click and keyboard');
  const faq=page.locator('.md-faq-list details').first();
  await faq.locator('summary').click();
  assert(await faq.getAttribute('open')!==null,'FAQ did not expand');
  await faq.locator('summary').click();
  report.interactions.push('FAQ opens and closes');
  const people=page.locator('#calculator-people'), hours=page.locator('#calculator-hours'), rate=page.locator('#calculator-rate');
  await people.focus(); await people.press('Home'); for(let n=0;n<4;n++) await people.press('ArrowRight');
  await hours.focus(); await hours.press('Home'); for(let n=0;n<8;n++) await hours.press('ArrowRight');
  await rate.focus(); await rate.press('Home'); for(let n=0;n<5;n++) await rate.press('ArrowRight');
  assert((await page.locator('.calculator-total').innerText()).includes('104.000'),'Calculator business example is incorrect');
  await hours.press('Home');
  assert((await page.locator('.calculator-total').innerText()).replace(/\s/g,'')==='€0','Zero hours must produce zero value');
  await people.press('End');await hours.press('End');await rate.press('End');
  await page.setViewportSize({width:360,height:800});
  const maxResult=await page.locator('.calculator-total').evaluate(e=>({text:e.textContent,client:e.clientWidth,scroll:e.scrollWidth}));
  report.maxCalculator=maxResult;
  assert(maxResult.scroll<=maxResult.client,'Maximum calculator value must fit on mobile');
  report.interactions.push('Calculator returns €104,000 for 5 people × 8 hours × €50 × 52 weeks, and €0 at zero hours');
  await page.locator('#md-menu-toggle').click();
  assert(await page.getByRole('navigation',{name:'Mobiele navigatie'}).isVisible(),'Mobile menu missing');
  await page.locator('#md-menu-toggle').press('Escape');
  assert(await page.locator('#md-menu-toggle').getAttribute('aria-expanded')==='false','Escape did not close mobile menu');
  await page.locator('#md-menu-toggle').click();
  await page.getByRole('navigation',{name:'Mobiele navigatie'}).getByRole('link',{name:'Onze aanpak'}).click();
  assert(await page.locator('#md-menu-toggle').getAttribute('aria-expanded')==='false','Anchor navigation did not close mobile menu');
  report.interactions.push('Mobile navigation, anchor links, and Escape work');
  await page.getByRole('button',{name:'Cookie-instellingen'}).click();
  assert(await page.getByRole('region',{name:'Cookievoorkeuren'}).isVisible(),'Cookie settings failed to reopen');
  await page.getByRole('button',{name:'Accepteren',exact:true}).click();
  assert(await page.evaluate(()=>localStorage.getItem('magisdata-consent'))==='analytics_granted','Consent was not saved');
  assert(await page.locator('script[src*="googletagmanager.com"]').count()===0,'Local preview must not load production analytics');
  await page.getByRole('button',{name:'Cookie-instellingen'}).click();
  await page.getByRole('button',{name:'Weigeren',exact:true}).click();
  report.interactions.push('Consent persists and settings reopen; local preview never loads production analytics');
  await page.goto(base);
  const links=await page.locator('a[href^="/"]').evaluateAll(items=>Array.from(new Set(items.map(a=>new URL(a.href).pathname))));
  for (const path of links) { const r=await page.request.get(base+path); report.links.push({path,status:r.status()});assert(r.ok(),'Broken homepage link: '+path); }
  await page.goto(base+'/contact/');
  await page.setViewportSize({width:1440,height:1000});
  let attempts=0;
  await page.route('https://formspree.io/f/mgolbyvp',async route=>{attempts++; await route.fulfill({status:attempts===1?503:200,contentType:'application/json',body:attempts===1?'{}':'{"ok":true}'});});
  await page.getByRole('button',{name:'Vraag een AI-gesprek aan'}).click();
  assert(attempts===0,'Empty form reached backend');
  await page.getByLabel('Naam',{exact:true}).fill('Lokale verificatie');
  await page.getByLabel('E-mail',{exact:true}).fill('preview@example.com');
  await page.getByLabel('Website of bedrijfsnaam').fill('Test, geen echte aanvraag');
  await page.getByLabel('Korte vraag').fill('Controle van formulierstatussen in de lokale testbranch.');
  assert(await page.locator('#contact-subject').inputValue()==='AI en automatisering','Wrong default inquiry topic');
  await page.screenshot({path:'output/playwright/contact-desktop.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:'Vraag een AI-gesprek aan'}).click();
  await page.locator('form').getByRole('alert').waitFor();
  assert(await page.getByLabel('Naam',{exact:true}).inputValue()==='Lokale verificatie','Error lost form data');
  await page.getByRole('button',{name:'Vraag een AI-gesprek aan'}).click();
  await page.getByRole('heading',{name:'Bedankt voor je aanvraag'}).waitFor();
  assert(attempts===2,'Unexpected submission count');
  await page.unroute('https://formspree.io/f/mgolbyvp');
  report.interactions.push('Contact required fields, AI default, error recovery, and success verified using intercepted responses; no real submissions');
  await page.goto(base+'/contact/');
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'output/playwright/contact-mobile.png',fullPage:true,animations:'disabled'});
  report.runtimeErrors=errors;
  report.failedLocalRequests=failedRequests;
  assert(errors.length===0,'Browser runtime errors: '+errors.join('; '));
  assert(failedRequests.length===0,'Failed local requests: '+JSON.stringify(failedRequests));

  await page.goto(base);
  await page.setViewportSize({width:1440,height:1000});
  return report;
}
