"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import clsx from "clsx";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";

import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";
import { Plan } from "@/lib/api";
import { num, pct, shortSize, toman, usd } from "@/lib/format";

function PlanCard({ plan }: { plan: Plan }) {
  const rows: [string, string][] = [
    [
      plan.phases === 1 ? "هدف سود" : "هدف سود مرحله ۱ / ۲",
      plan.phases === 1
        ? pct(plan.profitTargetPhase1)
        : `${pct(plan.profitTargetPhase1)} / ${pct(plan.profitTargetPhase2)}`,
    ],
    ["حد ضرر روزانه", pct(plan.dailyLossLimit)],
    ["حد ضرر کلی", pct(plan.maxLossLimit)],
    ["حداقل روز معاملاتی", `${num(plan.minTradingDays)} روز`],
    [
      "محدودیت زمانی",
      plan.maxDurationDays ? `${num(plan.maxDurationDays)} روز` : "ندارد",
    ],
    ["سهم سود معامله‌گر", pct(plan.profitSplit)],
    ["اهرم", `1:${plan.leverage}`],
  ];

  return (
    <div
      className={clsx(
        "relative rounded-3xl border p-6 flex flex-col gap-5 transition-all hover:-translate-y-1",
        plan.isPopular
          ? "border-primary bg-gradient-to-b from-primary/15 to-content1/40 shadow-[0_0_40px_-12px_rgba(253,114,69,0.6)]"
          : "border-divider bg-content1/50",
      )}
    >
      {plan.isPopular && (
        <span className="absolute -top-3 right-6 text-xs font-bold bg-primary text-white px-3 py-1 rounded-full">
          محبوب‌ترین
        </span>
      )}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-default-500 text-sm">{plan.name}</span>
          <span className="text-4xl font-black ltr text-right">
            {shortSize(plan.accountSize)}
          </span>
          <span className="text-xs text-default-400 ltr text-right">
            {usd(plan.accountSize)} account
          </span>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-content2 text-default-600">
          {plan.phases === 1 ? "تک مرحله‌ای" : "دو مرحله‌ای"}
        </span>
      </div>
      <div className="flex flex-col divide-y divide-divider text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between py-2">
            <span className="text-default-500">{k}</span>
            <span className="font-medium">{v}</span>
          </div>
        ))}
      </div>
      {plan.features?.length > 0 && (
        <ul className="flex flex-col gap-2 text-sm">
          {plan.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2 text-default-600">
              <Check className="text-success mt-1 shrink-0" size={16} />
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <span className="text-default-500 text-sm">هزینه شرکت</span>
          <div className="flex flex-col items-end">
            <span className="text-3xl font-black text-primary ltr">
              {usd(plan.price)}
            </span>
            <span className="text-xs text-default-400">
              ≈ {toman(plan.priceIrr)}
            </span>
          </div>
        </div>
        <LinkButton
          className="font-bold"
          color="primary"
          href={siteConfig.links.buy(plan.id)}
          size="lg"
          variant={plan.isPopular ? "solid" : "flat"}
        >
          خرید چالش {shortSize(plan.accountSize)}
        </LinkButton>
      </div>
    </div>
  );
}

export function PlansGrid({ plans }: { plans: Plan[] | null }) {
  const phases = useMemo(
    () =>
      Array.from(new Set((plans || []).map((p) => p.phases)))
        .sort()
        .reverse(),
    [plans],
  );
  const [phase, setPhase] = useState(String(phases[0] ?? 2));

  if (!plans?.length) {
    return (
      <p className="text-center text-default-500 py-10">
        در حال حاضر امکان نمایش پلن‌ها وجود ندارد. لطفا چند دقیقه دیگر دوباره
        تلاش کنید.
      </p>
    );
  }
  const visible = plans.filter((p) => String(p.phases) === phase);

  return (
    <div className="flex flex-col items-center gap-10">
      {phases.length > 1 && (
        <Tabs
          aria-label="نوع چالش"
          color="primary"
          radius="full"
          selectedKey={phase}
          size="lg"
          onSelectionChange={(k) => setPhase(String(k))}
        >
          {phases.map((p) => (
            <Tab
              key={String(p)}
              title={
                p === 1
                  ? "چالش تک مرحله‌ای (اکسپرس)"
                  : "چالش دو مرحله‌ای (استاندارد)"
              }
            />
          ))}
        </Tabs>
      )}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {visible.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>
    </div>
  );
}
