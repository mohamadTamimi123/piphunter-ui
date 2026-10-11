import { Metadata } from "next";

import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { PlansGrid } from "@/components/sections/plans";
import { Rules } from "@/components/sections/rules";
import { Container, SectionTitle } from "@/components/sections/section-title";
import { getPlans } from "@/lib/api";
import { num, pct, shortSize, usd } from "@/lib/format";

export const metadata: Metadata = {
  title: "پلن‌ها و قیمت چالش‌ها",
  description:
    "مقایسه پلن‌های چالش تامین سرمایه پیپ‌هانتر؛ از حساب ۱ هزار دلاری تا ۱۰۰ هزار دلاری با سهم سود تا ۸۰٪.",
};

export default async function PricingPage() {
  const plans = await getPlans();
  const twoPhase = plans?.filter((p) => p.phases === 2) || [];

  return (
    <>
      <PageHero
        description="هزینه چالش فقط یک بار پرداخت می‌شود. بدون هزینه ماهانه، بدون هزینه پنهان."
        eyebrow="پلن‌ها و قیمت"
        title="چالش مناسب خودت را انتخاب کن"
      />
      <Container>
        <PlansGrid plans={plans} />
      </Container>

      {twoPhase.length > 0 && (
        <Container className="pt-0">
          <SectionTitle title="مقایسه پلن‌های دو مرحله‌ای" />
          <div className="overflow-x-auto rounded-3xl border border-divider">
            <table className="w-full text-sm min-w-[720px]">
              <thead className="bg-content1">
                <tr>
                  <th className="p-4 text-right font-semibold">ویژگی</th>
                  {twoPhase.map((p) => (
                    <th
                      key={p.id}
                      className={`p-4 text-center font-bold ltr ${p.isPopular ? "text-primary" : ""}`}
                    >
                      {shortSize(p.accountSize)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                {(
                  [
                    ["هزینه چالش", (p) => usd(p.price)],
                    ["هدف سود مرحله ۱", (p) => pct(p.profitTargetPhase1)],
                    ["هدف سود مرحله ۲", (p) => pct(p.profitTargetPhase2)],
                    ["حد ضرر روزانه", (p) => pct(p.dailyLossLimit)],
                    ["حد ضرر کلی", (p) => pct(p.maxLossLimit)],
                    ["حداقل روز معاملاتی", (p) => num(p.minTradingDays)],
                    ["سهم سود", (p) => pct(p.profitSplit)],
                    ["اهرم", (p) => `1:${p.leverage}`],
                  ] as [string, (p: (typeof twoPhase)[number]) => string][]
                ).map(([label, fn]) => (
                  <tr key={label} className="hover:bg-content1/40">
                    <td className="p-4 text-default-500">{label}</td>
                    {twoPhase.map((p) => (
                      <td key={p.id} className="p-4 text-center">
                        {fn(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      )}

      <Container id="rules">
        <SectionTitle
          eyebrow="قوانین"
          title="قوانین معامله در چالش و حساب فاند"
        />
        <Rules />
      </Container>

      <Container className="max-w-4xl">
        <SectionTitle title="سوالات متداول" />
        <Faq limit={8} />
      </Container>
      <Cta />
    </>
  );
}
