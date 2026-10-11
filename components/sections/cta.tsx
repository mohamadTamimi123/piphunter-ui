import { ArrowLeft } from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";

export function Cta() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-[#FF9A4D] to-[#F2416B] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <LogoMark
          className="absolute -left-16 -bottom-20 opacity-15 rotate-12"
          size={260}
        />
        <div className="relative flex flex-col gap-3 text-white max-w-xl">
          <h2 className="text-3xl md:text-4xl font-black leading-snug">
            آماده‌ای شکار پیپ‌ها رو شروع کنی؟
          </h2>
          <p className="text-white/85 leading-8">
            همین امروز ثبت‌نام کن، چالش مناسب خودت رو انتخاب کن و در کمتر از ۵
            دقیقه اولین معامله‌ات رو روی حساب پیپ‌هانتر باز کن.
          </p>
        </div>
        <div className="relative flex gap-3">
          <LinkButton
            className="bg-white text-[#F2416B] font-bold"
            endContent={<ArrowLeft size={18} />}
            href={siteConfig.links.register}
            size="lg"
          >
            ثبت‌نام رایگان
          </LinkButton>
          <LinkButton
            className="border-white text-white"
            href="/pricing"
            size="lg"
            variant="bordered"
          >
            مشاهده پلن‌ها
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
