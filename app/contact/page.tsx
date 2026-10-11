import { Headset, Instagram, Mail, Phone, Send } from "lucide-react";
import { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/sections/section-title";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";
import { getSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "راه‌های ارتباط با پشتیبانی پیپ‌هانتر: تیکت، ایمیل، تلگرام و تلفن.",
};

export default async function ContactPage() {
  const s = await getSettings();
  const channels = [
    s?.supportEmail && {
      icon: Mail,
      title: "ایمیل",
      value: s.supportEmail,
      href: `mailto:${s.supportEmail}`,
    },
    s?.telegram && {
      icon: Send,
      title: "تلگرام",
      value: s.telegram,
      href: `https://t.me/${s.telegram.replace("@", "")}`,
    },
    s?.instagram && {
      icon: Instagram,
      title: "اینستاگرام",
      value: s.instagram,
      href: `https://instagram.com/${s.instagram.replace("@", "")}`,
    },
    s?.supportPhone && {
      icon: Phone,
      title: "تلفن",
      value: s.supportPhone,
      href: `tel:${s.supportPhone}`,
    },
  ].filter(Boolean) as {
    icon: typeof Mail;
    title: string;
    value: string;
    href: string;
  }[];

  return (
    <>
      <PageHero
        description="سریع‌ترین راه دریافت پاسخ، ثبت تیکت از داخل پنل کاربری است."
        eyebrow="تماس با ما"
        title="در کنار شما هستیم"
      />
      <Container className="max-w-5xl">
        <div className="rounded-3xl border border-primary/40 bg-gradient-to-l from-primary/15 to-transparent p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
              <Headset size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold">پشتیبانی از طریق تیکت</h2>
              <p className="text-default-500 text-sm mt-1">
                سوالات مالی، فنی و مربوط به چالش را از طریق تیکت پیگیری کنید.
              </p>
            </div>
          </div>
          <LinkButton color="primary" href={siteConfig.links.tickets} size="lg">
            ثبت تیکت
          </LinkButton>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {channels.map((c) => (
            <a
              key={c.title}
              className="rounded-3xl border border-divider bg-content1/40 p-6 flex items-center gap-4 hover:border-primary/50 transition-colors"
              href={c.href}
              rel="noreferrer"
              target="_blank"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                <c.icon size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-default-500">{c.title}</span>
                <span className="font-semibold ltr text-right">{c.value}</span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-default-500 mt-10">
          ساعات پاسخگویی: شنبه تا پنج‌شنبه، ۹ صبح تا ۹ شب
        </p>
      </Container>
    </>
  );
}
