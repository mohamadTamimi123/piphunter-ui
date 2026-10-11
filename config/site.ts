export const PANEL_URL = process.env.PANEL_URL || "http://127.0.0.1:3002";

export const siteConfig = {
  name: "پیپ‌هانتر",
  nameEn: "PipHunter",
  title: "پیپ‌هانتر | تامین سرمایه معامله‌گران فارکس",
  description:
    "پیپ‌هانتر (PipHunter) شرکت تامین سرمایه (پراپ ترید) برای معامله‌گران ایرانی است. با شرکت در چالش، مهارت خود را ثابت کنید و با سرمایه تا ۱۰۰ هزار دلار روی بروکر Pivot Market معامله کنید و تا ۸۰٪ سود را برداشت کنید.",
  navItems: [
    { label: "خانه", href: "/" },
    { label: "پلن‌ها و قیمت", href: "/pricing" },
    { label: "صندوق‌های سرمایه‌گذاری", href: "/funds" },
    { label: "بلاگ", href: "/blog" },
    { label: "سوالات متداول", href: "/faq" },
    { label: "درباره ما", href: "/about" },
    { label: "تماس با ما", href: "/contact" },
  ],
  links: {
    login: `${PANEL_URL}/login`,
    register: `${PANEL_URL}/register`,
    buy: (planId?: number) =>
      `${PANEL_URL}/buy${planId ? `?plan=${planId}` : ""}`,
    panel: PANEL_URL,
    tickets: `${PANEL_URL}/tickets`,
  },
  broker: "Pivot Market",
};
