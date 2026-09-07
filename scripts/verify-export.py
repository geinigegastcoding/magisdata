from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json

class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.title=""; self.in_title=False; self.h1=0; self.links=[]; self.meta={}; self.canonical=None; self.assets=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=="title": self.in_title=True
  if tag=="h1": self.h1+=1
  if tag=="a" and a.get("href"): self.links.append(a["href"])
  if tag=="meta": self.meta[a.get("name",a.get("property",""))]=a.get("content","")
  if tag=="link" and a.get("rel")=="canonical": self.canonical=a.get("href")
  if tag=="img": self.assets.append(a.get("src",""))
 def handle_endtag(self,tag):
  if tag=="title": self.in_title=False
 def handle_data(self,data):
  if self.in_title:self.title+=data

root=Path("out"); issues=[]; count=0
for f in root.rglob("*.html"):
 p=Page();p.feed(f.read_text(encoding="utf8"));count+=1
 path="/"+str(f.relative_to(root)).replace("\\","/").removesuffix("index.html")
 if len(p.title)>70:issues.append([path,"long title",len(p.title),p.title])
 if p.h1!=1:issues.append([path,"h1 count",p.h1])
 if "noindex" not in p.meta.get("robots",""):
  for field in ["description","og:title","og:description","og:image"]:
   if not p.meta.get(field):issues.append([path,"missing",field])
  if not p.canonical:issues.append([path,"no canonical"])
 internal=set()
 for href in p.links+p.assets:
  u=urlsplit(href)
  if u.netloc and u.netloc!="magisdata.nl":continue
  if u.scheme in ["mailto","tel"]:continue
  if not u.path.startswith("/"):continue
  target=root/unquote(u.path.lstrip("/"))
  if not target.is_file() and not (target/"index.html").is_file():issues.append([path,"broken",href])
  if href in p.links:internal.add(u.path)
 if len(internal)<3:issues.append([path,"few internal links",len(internal)])
print(json.dumps({"pages":count,"issues":issues},ensure_ascii=False,indent=2))

if issues: raise SystemExit(1)
