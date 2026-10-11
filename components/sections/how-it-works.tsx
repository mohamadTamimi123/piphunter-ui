import {
  BadgeDollarSign,
  ClipboardCheck,
  ShoppingCart,
  Trophy,
} from "lucide-react";

import { Container, SectionTitle } from "./section-title";

const steps = [
  {
    icon: ShoppingCart,
    title: "خرید چالش",
    text: "سایز حساب دلخواه را انتخاب و با درگاه ریالی یا تتر پرداخت کنید. حساب متاتریدر ۵ در چند دقیقه برایتان ساخته و ایمیل می‌شود.",
  },
  {
    icon: ClipboardCheck,
    title: "مرحله اول ارزیابی",
    text: "به ۸٪ سود برسید، بدون اینکه ضرر روزانه از ۵٪ و ضرر کلی از ۱۰٪ عبور کند. حداقل ۳ روز معاملاتی؛ بدون محدودیت زمانی.",
  },
  {
    icon: Trophy,
    title: "مرحله دوم ارزیابی",
    text: "با همان قوانین، این بار به ۵٪ سود برسید تا ثبات معاملاتی شما تایید شود. حساب جدید به‌صورت خودکار صادر می‌شود.",
  },
  {
    icon: BadgeDollarSign,
    title: "حساب فاند و برداشت سود",
    text: "حساب واقعی تحویل بگیرید و تا ۸۰٪ سود را برداشت کنید. درخواست برداشت از داخل پنل ثبت و به تتر یا کارت بانکی واریز می‌شود.",
  },
];

export function HowItWorks() {
  return (
    <Container id="how">
      <SectionTitle
        description="فرآیند ارزیابی پیپ‌هانتر شفاف، خودکار و قابل پیگیری لحظه‌ای از داخل پنل کاربری است."
        eyebrow="مسیر تامین سرمایه"
        title="از چالش تا حساب فاند در ۴ قدم"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-3xl border border-divider bg-content1/50 p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors"
          >
            <span className="absolute top-5 left-6 text-5xl font-black text-white/5">
              {(i + 1).toLocaleString("fa-IR")}
            </span>
            <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
              <s.icon size={24} />
            </div>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="text-sm text-default-500 leading-7">{s.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
