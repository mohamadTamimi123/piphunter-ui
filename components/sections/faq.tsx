"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { faqGroups } from "@/config/faq";

export function Faq({
  limit,
  grouped = false,
}: {
  limit?: number;
  grouped?: boolean;
}) {
  if (grouped) {
    return (
      <div className="flex flex-col gap-10">
        {faqGroups.map((g) => (
          <div key={g.title}>
            <h3 className="text-xl font-bold mb-3 text-primary">{g.title}</h3>
            <Accordion selectionMode="multiple" variant="splitted">
              {g.items.map((item) => (
                <AccordionItem
                  key={item.q}
                  aria-label={item.q}
                  title={<span className="font-semibold">{item.q}</span>}
                >
                  <p className="text-default-500 leading-8 pb-2">{item.a}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    );
  }
  const items = faqGroups.flatMap((g) => g.items).slice(0, limit);

  return (
    <Accordion defaultExpandedKeys={[items[0]?.q]} variant="splitted">
      {items.map((item) => (
        <AccordionItem
          key={item.q}
          aria-label={item.q}
          title={<span className="font-semibold">{item.q}</span>}
        >
          <p className="text-default-500 leading-8 pb-2">{item.a}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
