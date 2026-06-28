import os
import re

content_dir = r"E:\MData\Website\content"
seo_ts = r"E:\MData\Website\content\seo.ts"

# also include seo.ts just in case
for root, _, files in os.walk(content_dir):
    for file in files:
        if file.endswith(".ts"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = re.sub(r'\"2026-(05-26|06-13)\"', '\"2026-06-28\"', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
