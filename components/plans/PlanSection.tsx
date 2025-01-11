import PlanCart from "@/components/plans/PlanCart";
import style from "@/styles/index_plans.module.scss";
import SectionTitle from "@/components/index/SectionTitle";
export default function PlanSection() {
  return (
    <section
      className={` ${style.main_plan_section}   mx-28  pt-20 px-6 flex-grow  pb-40 rounded-lg`}
    >


      <SectionTitle className={"mt-0"} title={"بخش معرفی انواع وام"} />

      <div className={"flex gap-3 max-w-7xl m-auto"}>
        <PlanCart />
        <PlanCart />
        <PlanCart />
        <PlanCart />
      </div>
    </section>
  );
}
