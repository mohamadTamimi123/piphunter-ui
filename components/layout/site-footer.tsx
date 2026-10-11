import { Instagram, Mail, Phone, Send } from "lucide-react";
import NextLink from "next/link";

import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";
import { getSettings } from "@/lib/api";

const columns = [
  {
    title: "پیپ‌هانتر",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
      { label: "بلاگ و آموزش", href: "/blog" },
      { label: "سوالات متداول", href: "/faq" },
    ],
  },
  {
    title: "خدمات",
    links: [
      { label: "چالش‌های تامین سرمایه", href: "/pricing" },
      { label: "صندوق‌های سرمایه‌گذاری", href: "/funds" },
      { label: "قوانین معامله", href: "/pricing#rules" },
      { label: "قوانین و مقررات", href: "/terms" },
    ],
  },
];

export async function SiteFooter() {
  const settings = await getSettings();

  return (
    <footer className="border-t border-divider mt-24 bg-content1/30">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 flex flex-col gap-4">
          <Logo size={40} subtitle="تامین سرمایه معامله‌گران" />
          <p className="text-sm text-default-500 leading-7 max-w-md">
            پیپ‌هانتر به معامله‌گران مستعد کمک می‌کند بدون ریسک سرمایه شخصی، با
            حساب‌های تا ۱۰۰ هزار دلاری روی بروکر {siteConfig.broker} معامله کنند
            و تا ۸۰٪ از سود را دریافت کنند.
          </p>
          <div className="flex gap-3 text-default-500">
            {settings?.telegram && (
              <a
                aria-label="تلگرام"
                className="hover:text-primary"
                href={`https://t.me/${settings.telegram.replace("@", "")}`}
                rel="noreferrer"
                target="_blank"
              >
                <Send size={20} />
              </a>
            )}
            {settings?.instagram && (
              <a
                aria-label="اینستاگرام"
                className="hover:text-primary"
                href={`https://instagram.com/${settings.instagram.replace("@", "")}`}
                rel="noreferrer"
                target="_blank"
              >
                <Instagram size={20} />
              </a>
            )}
            {settings?.supportEmail && (
              <a
                aria-label="ایمیل"
                className="hover:text-primary"
                href={`mailto:${settings.supportEmail}`}
              >
                <Mail size={20} />
              </a>
            )}
            {settings?.supportPhone && (
              <a
                aria-label="تلفن"
                className="hover:text-primary"
                href={`tel:${settings.supportPhone}`}
              >
                <Phone size={20} />
              </a>
            )}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <span className="font-semibold">{col.title}</span>
            {col.links.map((l) => (
              <NextLink
                key={l.href}
                className="text-sm text-default-500 hover:text-primary"
                href={l.href}
              >
                {l.label}
              </NextLink>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-divider">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
          <p className="text-xs text-default-400 leading-6">
            <b>هشدار ریسک:</b> معامله در بازارهای مالی از جمله فارکس، طلا و
            ارزهای دیجیتال با اهرم همراه با ریسک بالاست و ممکن است برای همه
            افراد مناسب نباشد. حساب‌های چالش پیپ‌هانتر حساب‌های ارزیابی هستند و
            هزینه چالش، بابت خدمات ارزیابی دریافت می‌شود. عملکرد گذشته تضمینی
            برای نتایج آینده نیست.
          </p>
          <p className="text-xs text-default-400">
            © {new Date().getFullYear()} PipHunter — تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
