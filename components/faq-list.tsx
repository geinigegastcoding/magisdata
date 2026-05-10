export function FaqList({
  items
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          className="group rounded-md border border-bone/10 bg-bone/[0.035] p-6 shadow-line"
          key={item.question}
        >
          <summary className="cursor-pointer list-none font-satoshi text-lg font-semibold text-bone marker:hidden">
            <span className="flex items-start justify-between gap-6">
              {item.question}
              <span className="mt-1 text-amber transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-bone/62">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
