with open('content/internal-links.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re

block1 = """  {
    href: "/ai-automatisering",
    label: "AI en automatisering",
    description: "Verminder handwerk en verbeter leadopvolging."
  },
"""

block2 = """  "/ai-automatisering": [
    serviceLinks[5],
    serviceLinks[0],
    { href: "/contact", label: "Bespreek automatisering", description: "Bekijk welke workflow als eerste slim is." }
  ],
"""

text = text.replace(block1, '')
text = text.replace(block2, '')

# Shift all serviceLinks indices from 5 to 9 down by 1 (process in reverse to avoid double replacement)
for i in range(9, 4, -1):
    text = text.replace(f'serviceLinks[{i}]', f'serviceLinks[{i-1}]')

with open('content/internal-links.ts', 'w', encoding='utf-8') as f:
    f.write(text)
