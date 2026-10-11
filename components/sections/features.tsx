import {
  Activity,
  Banknote,
  CreditCard,
  Headset,
  LineChart,
  Server,
} from "lucide-react";

import { Container, SectionTitle } from "./section-title";

import { siteConfig } from "@/config/site";

const features = [
  {
    icon: Server,
    title: `بروکر معتبر ${siteConfig.broker}`,
    text: "حساب‌ها روی سرورهای متاتریدر ۵ بروکر Pivot Market با اسپرد رقابتی و اجرای سریع ساخته می‌شوند.",
  },
  {
    icon: Activity,
    title: "داشبورد لحظه‌ای",
    text: "بالانس، اکوئیتی، حد ضرر روزانه و پیشرفت هدف سود را لحظه‌به‌لحظه در پنل کاربری ببینید.",
  },
  {
    icon: CreditCard,
    title: "پرداخت ریالی و کریپتو",
    text: "خرید چالش با درگاه بانکی شتاب، تتر (USDT) یا کارت به کارت؛ بدون نیاز به ویزا کارت.",
  },
  {
    icon: Banknote,
    title: "تا ۸۰٪ سهم سود",
    text: "در حساب فاند تا ۸۰٪ سود متعلق به شماست و با اولین برداشت، هزینه چالش هم بازگردانده می‌شود.",
  },
  {
    icon: LineChart,
    title: "قوانین ساده و شفاف",
    text: "بدون قوانین پنهان؛ معاملات خبری و نگهداری معامله در آخر هفته در پلن‌های استاندارد مجاز است.",
  },
  {
    icon: Headset,
    title: "پشتیبانی فارسی",
    text: "تیم پشتیبانی فارسی‌زبان از طریق تیکت، تلگرام و ایمیل در کنار شماست.",
  },
];

export function Features() {
  return (
    <Container>
      <SectionTitle
        description="هر آنچه برای تبدیل مهارت معاملاتی به درآمد نیاز دارید، در یک پلتفرم."
        eyebrow="چرا پیپ‌هانتر؟"
        title="ساخته شده برای معامله‌گران ایرانی"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl border border-divider bg-content1/40 p-6 flex gap-4 hover:bg-content1/70 transition-colors"
          >
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#FF9A4D] to-[#F2416B] text-white flex items-center justify-center">
              <f.icon size={22} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm text-default-500 leading-7">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
