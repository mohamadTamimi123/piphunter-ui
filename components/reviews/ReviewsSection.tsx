import React from "react";

import CardReview from "@/components/reviews/CartReview";
import style from '@/styles/index_plans.module.scss';
import { Tab, Tabs } from '@nextui-org/tabs';
import { Card, CardBody } from '@nextui-org/card';
import SectionTitle from '@/components/index/SectionTitle';

export default function ReviewsSection() {
  return (
    <section
      className={` ${style.main_plan_section} container mx-auto max-w-7xl pt-16 px-6 flex-grow`}
    >
      <SectionTitle title={"بخش معرفی انواع نظرات مشتزیان"} />


      <div className="flex flex-col gap-4">
        <CardReview
          content="Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium. "
          createdAt="2021-08-01T12:00:00.000Z"
          rating={5}
          title="Great product"
          user={{
            name: "John Doe",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
          }}
        />
        <CardReview
          content="Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium. "
          createdAt="2021-08-01T12:00:00.000Z"
          rating={5}
          title="Great product"
          user={{
            name: "John Doe",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
          }}
        />
        <CardReview
          content="Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium. "
          createdAt="2021-08-01T12:00:00.000Z"
          rating={5}
          title="Great product"
          user={{
            name: "John Doe",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
          }}
        />
      </div>
    </section>


  )
    ;
}
