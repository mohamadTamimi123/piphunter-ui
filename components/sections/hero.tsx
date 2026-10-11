import { ArrowLeft, BadgeCheck, ShieldCheck, Wallet, Zap } from "lucide-react";

import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";
import { Plan } from "@/lib/api";
import { num, pct } from "@/lib/format";

function DashboardMock() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-10 glow" />
      <div className="relative rounded-3xl border border-white/10 bg-content1/80 backdrop-blur-xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col">
            <span className="text-xs text-default-500">حساب فاند · MT5</span>
            <span className="text-2xl font-bold ltr">$100,000</span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-success/15 text-success">
            فاند شده
          </span>
        </div>
        <svg aria-hidden="true" className="w-full h-32" viewBox="0 0 320 120">
          <defs>
            <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#FD7245" stopOpacity="0.45" />
              <stop offset="1" stopColor="#FD7245" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 95 L25 88 L50 92 L75 76 L100 80 L125 64 L150 70 L175 52 L200 58 L225 40 L250 44 L275 26 L300 30 L320 14 L320 120 L0 120 Z"
            fill="url(#hero-area)"
          />
          <path
            d="M0 95 L25 88 L50 92 L75 76 L100 80 L125 64 L150 70 L175 52 L200 58 L225 40 L250 44 L275 26 L300 30 L320 14"
            fill="none"
            stroke="#FD7245"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            stroke="#f31260"
            strokeDasharray="5 5"
            strokeOpacity="0.6"
            x1="0"
            x2="320"
            y1="105"
            y2="105"
          />
        </svg>
        <div className="grid grid-cols-3 gap-3 mt-4 text-center">
          <div className="rounded-xl bg-content2/70 p-3">
            <div className="text-[11px] text-default-500">سود ماه</div>
            <div className="font-bold text-success ltr">+$8,420</div>
          </div>
          <div className="rounded-xl bg-content2/70 p-3">
            <div className="text-[11px] text-default-500">سهم شما</div>
            <div className="font-bold ltr">$6,736</div>
          </div>
          <div className="rounded-xl bg-content2/70 p-3">
            <div className="text-[11px] text-default-500">افت سرمایه</div>
            <div className="font-bold text-warning">۲.۱٪</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-4 md:-right-10 rounded-2xl border border-white/10 bg-content1/90 backdrop-blur px-4 py-3 flex items-center gap-3 shadow-xl">
        <Wallet className="text-primary" size={22} />
        <div className="flex flex-col">
          <span className="text-xs text-default-500">درخواست برداشت</span>
          <span className="text-sm font-semibold">تایید و واریز شد ✓</span>
        </div>
      </div>
      <p className="text-[10px] text-default-400 text-center mt-10">
        * تصویر نمایشی است
      </p>
    </div>
  );
}

export function Hero({ plans }: { plans: Plan[] | null }) {
  const minPrice = plans?.length
    ? Math.min(...plans.map((p) => Number(p.price)))
    : 10;
  const maxSize = plans?.length
    ? Math.max(...plans.map((p) => Number(p.accountSize)))
    : 100000;
  const maxSplit = plans?.length
    ? Math.max(...plans.map((p) => Number(p.profitSplit)))
    : 80;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <Zap size={14} /> اتصال مستقیم به بروکر {siteConfig.broker} روی
            متاتریدر ۵
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.35]">
            مهارتت رو ثابت کن،
            <br />
            با <span className="text-gradient">سرمایه ما</span> معامله کن
          </h1>
          <p className="text-default-500 text-lg leading-9 max-w-xl">
            با پرداخت هزینه‌ای از {num(minPrice)} دلار در چالش پیپ‌هانتر شرکت
            کنید، دو مرحله ارزیابی را با رعایت مدیریت ریسک پشت سر بگذارید و حساب
            واقعی تا {num(maxSize / 1000)} هزار دلار تحویل بگیرید. تا{" "}
            {pct(maxSplit)} سود متعلق به شماست.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton
              className="font-bold"
              color="primary"
              endContent={<ArrowLeft size={18} />}
              href="/pricing"
              size="lg"
            >
              انتخاب چالش
            </LinkButton>
            <LinkButton href="/#how" size="lg" variant="bordered">
              چطور کار می‌کند؟
            </LinkButton>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-default-500">
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="text-success" size={18} /> شروع از{" "}
              {num(minPrice)} دلار
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="text-success" size={18} /> پرداخت ریالی و
              تتر
            </span>
            <span className="flex items-center gap-1.5">
              <Wallet className="text-success" size={18} /> برداشت سود سریع
            </span>
          </div>
        </div>
        <DashboardMock />
      </div>
    </section>
  );
}
