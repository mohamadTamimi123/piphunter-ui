import style from "@/styles/index_plans.module.scss";
import BonusCart from "@/components/Bonus/BonusCart";
import SectionTitle from "@/components/index/SectionTitle";

export default function BonusSection() {
  return (
    <section
      className={`container mx-auto max-w-7xl pt-16 px-6 flex-grow`}
    >
      <SectionTitle className={""} title={"بخش معرفی انواع بونوس"} />
      <div className={"flex flex-col gap-8 "}>
        <BonusCart />
        <BonusCart />

      </div>
    </section>
  );
}
