"use client";
import { useState } from "react";
import { ArrowRight, Check, FileText, GitBranch, Mail, Users } from "lucide-react";
import { workflows } from "@/content/main-site";
const icons = [Mail, Users, FileText, GitBranch];

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const workflow = workflows[active];
  const Icon = icons[active];
  return <div className="v2-explorer">
    <div className="v2-workflow-tabs" role="tablist" aria-label="Verken een AI-workflow">{workflows.map((item, index) => <button key={item.id} id={`tab-${item.id}`} role="tab" aria-selected={index === active} aria-controls="workflow-panel" tabIndex={index === active ? 0 : -1} type="button" onClick={() => setActive(index)} onKeyDown={(event) => {
      const next = event.key === "ArrowRight" ? (index + 1) % workflows.length : event.key === "ArrowLeft" ? (index + workflows.length - 1) % workflows.length : event.key === "Home" ? 0 : event.key === "End" ? workflows.length - 1 : null;
      if (next !== null) { event.preventDefault(); setActive(next); document.getElementById(`tab-${workflows[next].id}`)?.focus(); }
    }}><span>0{index + 1}</span>{item.name}<ArrowRight aria-hidden="true" size={17} /></button>)}</div>
    <div className="v2-workflow-panel" id="workflow-panel" role="tabpanel" aria-labelledby={`tab-${workflow.id}`} tabIndex={0}>
      <div className="v2-workflow-intro"><div><h3>{workflow.title}</h3><p>{workflow.description}</p></div><span className="v2-example-label">Interactief voorbeeld <span aria-hidden="true">↗</span></span></div>
      <div className="v2-flow-stages" key={workflow.id}>
        <div className="v2-flow-input"><p className="v2-label">01 / Wat binnenkomt</p><div className="v2-input-source"><Icon aria-hidden="true" size={19} /><span>{workflow.source}</span></div><h4>{workflow.inputLabel}</h4><p className="v2-input-message">“{workflow.input}”</p></div>
        <div className="v2-flow-action"><p className="v2-label">02 / AI bereidt voor</p><div className="v2-routing-mark" aria-hidden="true"><i /><i /><i /><span>M</span><b /><b /><b /></div><h4>{workflow.action}</h4><p>{workflow.actionDetail}</p></div>
        <div className="v2-flow-output"><p className="v2-label">03 / Jij houdt de regie</p><span className="v2-output-stamp"><Check aria-hidden="true" size={14} /> Concept · ter controle</span><h4>{workflow.outputLabel}</h4><p>{workflow.output}</p><div className="v2-human-check"><Check aria-hidden="true" size={17} /><span>{workflow.control}</span></div></div>
      </div>
      <div className="v2-workflow-value"><span className="v2-square" /><p>{workflow.value}</p><span>AI bereidt voor. Jij beslist.</span></div>
    </div>
  </div>;
}
