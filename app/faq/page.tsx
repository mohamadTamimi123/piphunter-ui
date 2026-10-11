import { Metadata } from "next";

import { Faq } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/sections/section-title";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "سوالات متداول",
  description:
    "پاسخ سوالات رایج درباره چالش‌ها، قوانین، پرداخت، برداشت سود و صندوق‌های سرمایه‌گذاری پیپ‌هانتر.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        description="اگر پاسخ سوال خود را پیدا نکردید، از طریق تیکت با پشتیبانی در تماس باشید."
        eyebrow="سوالات متداول"
        title="پاسخ سوالات شما"
      />
      <Container className="max-w-4xl">
        <Faq grouped />
        <div className="mt-14 rounded-3xl border border-divider bg-content1/40 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">هنوز سوال دارید؟</h3>
            <p className="text-default-500 text-sm mt-1">
              تیم پشتیبانی پیپ‌هانتر معمولا در کمتر از چند ساعت پاسخ می‌دهد.
            </p>
          </div>
          <LinkButton color="primary" href={siteConfig.links.tickets}>
            ارسال تیکت پشتیبانی
          </LinkButton>
        </div>
      </Container>
    </>
  );
}
