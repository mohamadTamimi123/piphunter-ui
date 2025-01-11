"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";

import style from "@/styles/index_plans.module.scss";
import SectionTitle from '@/components/index/SectionTitle';

export default function TermsAndConditionMainSection() {
  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section
      className={` ${style.main_plan_section} container mx-auto max-w-7xl pt-16 px-6 flex-grow`}
    >
      <SectionTitle title={"بخش معرفی انواع شرایط و ضوابط"} />
      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs} placement={"start"}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card>
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </section>
  );
}
