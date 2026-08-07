"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { calculateAutomationSavings } from "@/lib/ai-savings.mjs";

const currency = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

export function AiCalculator() {
  const [people, setPeople] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(55);
  const savings = useMemo(
    () => calculateAutomationSavings({ people, hoursPerWeek, hourlyRate }),
    [people, hoursPerWeek, hourlyRate]
  );

  return (
    <div className="calculator-shell">
      <div className="calculator-inputs">
        <div className="calculator-intro">
          <p className="section-kicker">Jouw rekensom</p>
          <h2>Wat kost handwerk dat elke week terugkomt?</h2>
          <p>
            Schuif met je eigen situatie. Dit is geen belofte, maar een snelle
            indicatie van de waarde die vrijkomt als een systeem repetitief werk overneemt.
          </p>
        </div>

        <label className="range-field" htmlFor="calculator-people">
          <span>
            <strong>Hoeveel mensen?</strong>
            <output>{people}</output>
          </span>
          <input
            id="calculator-people"
            max="25"
            min="1"
            onChange={(event) => setPeople(Number(event.target.value))}
            type="range"
            value={people}
          />
        </label>

        <label className="range-field" htmlFor="calculator-hours">
          <span>
            <strong>Uren handwerk per persoon, per week</strong>
            <output>{hoursPerWeek}</output>
          </span>
          <input
            id="calculator-hours"
            max="20"
            min="0"
            onChange={(event) => setHoursPerWeek(Number(event.target.value))}
            type="range"
            value={hoursPerWeek}
          />
        </label>

        <label className="range-field" htmlFor="calculator-rate">
          <span>
            <strong>Gemiddelde uurwaarde</strong>
            <output>{currency.format(hourlyRate)}</output>
          </span>
          <input
            id="calculator-rate"
            max="150"
            min="25"
            onChange={(event) => setHourlyRate(Number(event.target.value))}
            step="5"
            type="range"
            value={hourlyRate}
          />
        </label>
      </div>

      <div aria-live="polite" className="calculator-result">
        <p className="result-label">Indicatieve jaarlijkse waarde</p>
        <p className="calculator-total">{currency.format(savings.annualValue)}</p>
        <div className="calculator-breakdown">
          <div>
            <span>Uren per week</span>
            <strong>{savings.weeklyHours}</strong>
          </div>
          <div>
            <span>Waarde per week</span>
            <strong>{currency.format(savings.weeklyValue)}</strong>
          </div>
        </div>
        <p className="calculator-note">
          Als je één werkdag per week terugwint, ontstaat er ruimte voor klanten,
          strategie en werk dat niet te automatiseren is.
        </p>
        <Link className="text-link" href="/contact">
          Laat je grootste tijdlek onderzoeken <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </div>
    </div>
  );
}
