"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileText } from "lucide-react";
import { workflowExamples } from "@/content/workflow-examples";

export function WorkflowExample() {
  const [selected, setSelected] = useState(0);
  const example = workflowExamples[selected];
  return <section className="workflow-example" id="voorbeeld" aria-labelledby="workflow-title">
    <div className="container">
      <div className="workflow-heading"><h2 id="workflow-title">Zo wordt werk een workflow.</h2><span>Interactief voorbeeld · fictieve gegevens</span></div>
      <div className="workflow-options" role="group" aria-label="Kies een praktijkvoorbeeld">
        {workflowExamples.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls="workflow-content" onClick={() => setSelected(index)}><span>{item.label}</span>{item.title}<ArrowUpRight size={17} aria-hidden="true" /></button>)}
      </div>
      <div id="workflow-content" className="workflow-content" aria-live="polite" aria-atomic="true">
        <div className="workflow-input"><div className="document-label"><FileText size={15} aria-hidden="true" />{example.inputLabel}</div><h3>{example.subject}</h3><p>{example.input}</p><div className="document-foot">Input uit je dagelijkse werk</div></div>
        <div className="workflow-connector"><ArrowRight aria-hidden="true" size={26} /><ArrowDown aria-hidden="true" size={26} /><p>{example.action}</p></div>
        <div className="workflow-output"><div className="document-label"><span className="square-mark" aria-hidden="true" />{example.outputLabel}</div><dl>{example.fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
        <div className="workflow-review"><div><Check size={20} aria-hidden="true" /><strong>Jouw controle</strong></div><p>{example.review}</p><span>{example.note}</span></div>
      </div>
    </div>
  </section>;
}
