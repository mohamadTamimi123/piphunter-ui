'use client'
import style from '@/styles/index_plans.module.scss';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import SectionTitle from '@/components/index/SectionTitle';

export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (


    <section
      className={` ${style.main_plan_section} container mx-auto max-w-7xl pt-16 px-6 flex-grow`}
    >
      <SectionTitle title={"بخش معرفی انواع سوالات متداول"} />
      <div className="flex w-full flex-col">
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>

  );
}