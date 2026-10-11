import { AlertTriangle, ShieldCheck, UserCheck, Wallet } from "lucide-react";
import { Metadata } from "next";

import { FundCard } from "@/components/sections/cards";
import { PageHero } from "@/components/sections/page-hero";
import { Container, SectionTitle } from "@/components/sections/section-title";
import { getFunds } from "@/lib/api";

export const metadata: Metadata = {
  title: "صندوق‌های سرمایه‌گذاری",
  description:
    "سرمایه‌گذاری در صندوق‌های معاملاتی پیپ‌هانتر با سطوح ریسک مختلف؛ مدیریت شده توسط معامله‌گران حرفه‌ای.",
};

const steps = [
  {
    icon: UserCheck,
    title: "ثبت‌نام در پنل",
    text: "حساب کاربری بسازید و ایمیل خود را تایید کنید.",
  },
  {
    icon: Wallet,
    title: "انتخاب صندوق و پرداخت",
    text: "صندوق مناسب را انتخاب و مبلغ را به‌صورت ریالی یا تتر پرداخت کنید.",
  },
  {
    icon: ShieldCheck,
    title: "پیگیری و برداشت",
    text: "ارزش سرمایه خود را در پنل ببینید و پس از پایان دوره قفل، درخواست برداشت دهید.",
  },
];

export default async function FundsPage() {
  const funds = await getFunds();

  return (
    <>
      <PageHero
        description="صندوق‌های پیپ‌هانتر توسط تیمی از معامله‌گران فاند شده و با مدیریت ریسک سخت‌گیرانه اداره می‌شوند."
        eyebrow="صندوق‌های سرمایه‌گذاری"
        title="سرمایه‌ات را به حرفه‌ای‌ها بسپار"
      />
      <Container>
        {funds?.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funds.map((f) => (
              <FundCard key={f.id} fund={f} />
            ))}
          </div>
        ) : (
          <p className="text-center text-default-500">
            در حال حاضر صندوق فعالی وجود ندارد.
          </p>
        )}
        <div className="mt-10 flex gap-3 rounded-2xl border border-warning/40 bg-warning/5 p-5 text-sm text-default-600 leading-7">
          <AlertTriangle className="text-warning shrink-0 mt-1" size={20} />
          <p>
            بازده‌های ذکر شده پیش‌بینی بر اساس عملکرد گذشته استراتژی‌ها هستند و
            هیچ‌گونه تضمینی برای سود آینده وجود ندارد. سرمایه‌گذاری در بازارهای
            مالی همراه با ریسک از دست رفتن بخشی یا تمام سرمایه است؛ تنها با
            سرمایه‌ای وارد شوید که توان از دست دادن آن را دارید.
          </p>
        </div>
      </Container>
      <Container className="pt-0">
        <SectionTitle title="چطور سرمایه‌گذاری کنم؟" />
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-divider bg-content1/40 p-6 flex flex-col gap-3 items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                <s.icon size={24} />
              </div>
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm text-default-500 leading-7">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
