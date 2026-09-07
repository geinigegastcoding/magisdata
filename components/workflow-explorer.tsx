"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, FileInput, Workflow } from "lucide-react";
import Link from "next/link";
import { workflowExamples } from "@/content/main-site";

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const example = workflowExamples[active];

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % workflowExamples.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + workflowExamples.length - 1) % workflowExamples.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = workflowExamples.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`workflow-tab-${workflowExamples[next].id}`)?.focus();
  }

  return (
    <div className="md-workflows">
      <div className="md-workflow-tabs" role="tablist" aria-label="Voorbeelden van AI in je werk">{workflowExamples.map((item, index) => <button key={item.id} id={`workflow-tab-${item.id}`} type="button" role="tab" aria-selected={active === index} aria-controls="workflow-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => navigateTabs(event, index)}>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></button>)}</div>
      <div className="md-workflow-panel" id="workflow-panel" role="tabpanel" aria-labelledby={`workflow-tab-${example.id}`} tabIndex={0}>
        <div className="md-workflow-heading"><h3>{example.title}</h3><p>{example.description}</p></div>
        <div className="md-flow" key={example.id}>
          <div className="md-flow-step"><span className="md-flow-icon"><FileInput size={24} strokeWidth={1.5} aria-hidden="true" /></span><span className="md-flow-label">Dit komt binnen</span><strong>{example.input}</strong><span>{example.inputDetail}</span></div>
          <ArrowRight className="md-flow-arrow" size={26} strokeWidth={1.4} aria-hidden="true" />
          <div className="md-flow-step md-flow-ai"><span className="md-flow-icon"><Workflow size={24} strokeWidth={1.5} aria-hidden="true" /></span><span className="md-flow-label">AI bereidt voor</span><strong>{example.action}</strong><span>{example.actionDetail}</span></div>
          <ArrowRight className="md-flow-arrow" size={26} strokeWidth={1.4} aria-hidden="true" />
          <div className="md-flow-step"><span className="md-flow-icon"><Check size={26} strokeWidth={1.5} aria-hidden="true" /></span><span className="md-flow-label">Jij houdt de regie</span><strong>{example.output}</strong><span>{example.outputDetail}</span></div>
        </div>
        <div className="md-workflow-footer"><span>{example.benefit}</span><Link href="/contact">Kan dit ook bij ons? <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
      <p className="md-example-note">Zo kan een workflow eruitzien. We bepalen samen wat past bij jouw gegevens, tools en risico’s.</p>
    </div>
  );
}
