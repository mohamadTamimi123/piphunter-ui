import { Eye, HeartHandshake, Scale, Target } from "lucide-react";
import { Metadata } from "next";

import { Cta } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Container, SectionTitle } from "@/components/sections/section-title";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "پیپ‌هانتر؛ پلتفرم تامین سرمایه معامله‌گران فارسی‌زبان با اتصال به بروکر Pivot Market.",
};

const values = [
  {
    icon: Scale,
    title: "شفافیت",
    text: "قوانین چالش ساده و مکتوب است و همه محاسبات حساب شما به‌صورت لحظه‌ای در پنل قابل مشاهده است.",
  },
  {
    icon: HeartHandshake,
    title: "تعهد به پرداخت",
    text: "برداشت سود معامله‌گران، اولویت اول ماست. درخواست‌ها در سریع‌ترین زمان بررسی و پرداخت می‌شوند.",
  },
  {
    icon: Target,
    title: "تمرکز بر مهارت",
    text: "ما به دنبال معامله‌گرانی هستیم که مدیریت ریسک را جدی می‌گیرند، نه قمار با سرمایه.",
  },
  {
    icon: Eye,
    title: "نگاه بلندمدت",
    text: "رشد ما در گرو رشد معامله‌گران ماست؛ برای همین آموزش و پشتیبانی بخش جدایی‌ناپذیر پیپ‌هانتر است.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="پیپ‌هانتر با هدف از بین بردن بزرگ‌ترین مانع معامله‌گران مستعد، یعنی کمبود سرمایه، شکل گرفت."
        eyebrow="درباره پیپ‌هانتر"
        title="ما به مهارت شما سرمایه می‌دهیم"
      />
      <Container className="max-w-4xl">
        <div className="flex flex-col gap-6 text-default-600 leading-9 text-lg">
          <p>
            بسیاری از معامله‌گران ایرانی مهارت و دانش کافی برای کسب سود پایدار
            از بازارهای مالی دارند، اما سرمایه محدود، دسترسی سخت به بروکرهای
            معتبر و مشکلات پرداخت بین‌المللی مانع رشد آن‌ها می‌شود. پیپ‌هانتر
            برای حل همین مشکل ساخته شده است.
          </p>
          <p>
            در پیپ‌هانتر شما با پرداخت هزینه‌ای اندک در یک چالش ارزیابی شرکت
            می‌کنید. اگر بتوانید با رعایت اصول مدیریت ریسک به هدف سود برسید،
            حساب معاملاتی با سرمایه پیپ‌هانتر روی بروکر {siteConfig.broker} در
            اختیارتان قرار می‌گیرد و بخش عمده سود متعلق به خود شماست.
          </p>
          <p>
            علاوه بر چالش‌های تامین سرمایه، پیپ‌هانتر با راه‌اندازی صندوق‌های
            سرمایه‌گذاری، به افرادی که فرصت یا تخصص معامله ندارند امکان می‌دهد
            سرمایه خود را به تیم معامله‌گران حرفه‌ای بسپارند.
          </p>
        </div>
      </Container>
      <Container className="pt-0">
        <SectionTitle title="ارزش‌های ما" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-divider bg-content1/40 p-6 flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                <v.icon size={24} />
              </div>
              <h3 className="font-bold">{v.title}</h3>
              <p className="text-sm text-default-500 leading-7">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <Cta />
    </>
  );
}
