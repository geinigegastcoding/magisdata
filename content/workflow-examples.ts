export const workflowExamples = [
  {
    id: "inbox", label: "01", title: "Een volle inbox", inputLabel: "Binnenkomende e-mail",
    subject: "Offerteaanvraag · kantooronderhoud",
    input: "Goedemiddag, we zoeken iemand voor het onderhoud van ons kantoor in Leiden. Het gaat om 240 m², twee keer per week. Kunnen jullie een voorstel sturen? We starten graag in oktober.",
    action: "AI haalt de aanvraag uit de e-mail en zet een concept klaar.",
    outputLabel: "Gestructureerde aanvraag",
    fields: [["Werk", "Kantooronderhoud"], ["Locatie", "Leiden"], ["Omvang", "240 m² · 2× per week"], ["Start", "Oktober"]],
    review: "Jij controleert de aanvraag, bepaalt de prijs en verstuurt het voorstel.",
    note: "Geen automatisch verstuurde offerte. De beslissing blijft bij jou."
  },
  {
    id: "documents", label: "02", title: "Losse documenten", inputLabel: "Notities van een overleg",
    subject: "Projectoverleg · nieuwe website",
    input: "We willen vrijdag de eerste teksten ontvangen. Noor verzamelt de foto's. De homepage moet duidelijker laten zien wat we doen. Daniel werkt dinsdag een voorstel voor de indeling uit.",
    action: "AI zet losse notities om in taken, eigenaren en afspraken.",
    outputLabel: "Taken voor je project",
    fields: [["Teksten", "Aanleveren · vrijdag"], ["Fotografie", "Noor · verzamelen"], ["Indeling", "Daniel · dinsdag"], ["Aandachtspunt", "Aanbod verduidelijken"]],
    review: "Jij controleert de afspraken en vult ontbrekende eigenaren en datums aan.",
    note: "Onduidelijke afspraken worden zichtbaar, in plaats van ingevuld door AI."
  },
  {
    id: "knowledge", label: "03", title: "Verspreide kennis", inputLabel: "Een vraag aan je kennisbank",
    subject: "Waar vind ik onze afspraken?",
    input: "Projectafspraken, §3: “Er is één gezamenlijke feedbackronde. De projectleider verzamelt alle opmerkingen en levert deze gebundeld aan.” Vraag: hoe leveren we feedback aan, en wanneer?",
    action: "AI zoekt in de bronnen die je zelf beschikbaar hebt gemaakt.",
    outputLabel: "Antwoord met bronverwijzing",
    fields: [["Afspraak", "Eén gezamenlijke feedbackronde"], ["Aanlevering", "Gebundeld via de projectleider"], ["Bron", "Projectafspraken · §3"], ["Nog onbekend", "De uiterste feedbackdatum"]],
    review: "Jij kunt de bron erbij pakken en ziet welke informatie nog ontbreekt.",
    note: "Een antwoord is pas bruikbaar als je kunt nagaan waar het vandaan komt."
  }
];