"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { calculateAutomationSavings } from "@/lib/ai-savings.mjs";
const currency = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
export function AiCalculator() {
  const [people, setPeople] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(55);
  const savings = calculateAutomationSavings({ people, hoursPerWeek, hourlyRate });
  const fields = [
    { id: "people", label: "Mensen in je team", value: people, display: `${people} ${people === 1 ? "persoon" : "personen"}`, min: 1, max: 25, step: 1, set: setPeople },
    { id: "hours", label: "Uren handwerk per persoon / week", value: hoursPerWeek, display: `${hoursPerWeek} uur`, min: 0, max: 20, step: 1, set: setHoursPerWeek },
    { id: "rate", label: "Gemiddelde waarde van een uur", value: hourlyRate, display: currency.format(hourlyRate), min: 25, max: 150, step: 5, set: setHourlyRate }
  ];
  return <div className="v2-calculator"><div className="v2-calculator-inputs"><p className="v2-label">03 / Reken met je eigen situatie</p><h2>Terugkerend werk.<br /><span>Een flinke optelsom.</span></h2><p>Wat is de tijd waard die nu opgaat aan handwerk? Maak het concreet met je eigen cijfers.</p><div className="v2-ranges">{fields.map((field) => <label className="v2-range" htmlFor={`calculator-${field.id}`} key={field.id}><span><strong>{field.label}</strong><output htmlFor={`calculator-${field.id}`}>{field.display}</output></span><input id={`calculator-${field.id}`} type="range" min={field.min} max={field.max} step={field.step} value={field.value} aria-valuetext={field.display} style={{ "--range-progress": `${(field.value - field.min) / (field.max - field.min) * 100}%` } as CSSProperties} onChange={(event) => field.set(Number(event.target.value))} /></label>)}</div></div><div className="v2-calculator-result"><div className="v2-result-top"><span className="v2-label">De waarde van dit handwerk</span><ArrowUpRight aria-hidden="true" size={29} /></div><div aria-live="polite" aria-atomic="true"><p className="v2-calculator-total">{currency.format(savings.annualValue)}</p><span className="v2-result-unit">aan tijdwaarde per jaar</span><div className="v2-calculator-breakdown"><div><strong>{savings.weeklyHours}<span> uur</span></strong><p>per week</p></div><div><strong>{currency.format(savings.weeklyValue)}</strong><p>tijdwaarde per week</p></div></div></div><p className="v2-calculator-note">Berekend met 52 weken. Dit is de totale waarde van de ingevulde uren, geen beloofde besparing. Hoeveel je kunt automatiseren en wat het kost, onderzoeken we samen.</p><Link className="v2-link" href="/contact/">Wat is haalbaar voor jouw bedrijf? <ArrowUpRight aria-hidden="true" size={18} /></Link></div></div>;
}
