import re

with open('app/llms.txt/route.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('/prijzen', '/diensten').replace('/ai-infrastructuur', '/ai-automatisering')
text = text.replace('- Prijzen en pakketten:', '- Diensten en pakketten:')
with open('app/llms.txt/route.ts', 'w', encoding='utf-8') as f:
    f.write(text)

with open('content/homepage.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = re.sub(r'\{\s*title:[^\}]+href:\s*\"/inzichten[^\}]+\},?', '', text)
with open('content/homepage.ts', 'w', encoding='utf-8') as f:
    f.write(text)

with open('app/over-ons/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()
text = re.sub(r'<Link[^>]*href=\"/inzichten\"[^>]*>[\s\S]*?</Link>', '', text)
with open('app/over-ons/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

with open('schemas/seo.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = re.sub(r'export function articleSchema[\s\S]*?\}\n', '', text)
with open('schemas/seo.ts', 'w', encoding='utf-8') as f:
    f.write(text)
