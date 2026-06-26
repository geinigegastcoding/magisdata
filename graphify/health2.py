import json
from pathlib import Path
from graphify.diagnostics import diagnose_extraction, format_diagnostic_report

detect = json.loads(Path('graphify-out/.graphify_detect.json').read_text(encoding='utf-8'))
extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text(encoding='utf-8'))
summary = diagnose_extraction(extraction, directed=False, root=detect['scan_root'])
print(format_diagnostic_report(summary))
