import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import localFont from "next/font/local";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "پراپ ترید",
    "تامین سرمایه",
    "چالش فارکس",
    "prop trading",
    "PipHunter",
    "پیپ هانتر",
    "Pivot Market",
    "حساب فاند",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "fa_IR",
    type: "website",
    siteName: siteConfig.nameEn,
  },
};

export const viewport: Viewport = {
  themeColor: "#080D17",
};

const kalame = localFont({
  src: [
    { path: "../config/kalame/KalamehWeb-Light.woff2", weight: "300" },
    { path: "../config/kalame/KalamehWeb-Regular.woff2", weight: "400" },
    { path: "../config/kalame/KalamehWeb-Medium.woff2", weight: "500" },
    { path: "../config/kalame/KalamehWeb-SemiBold.woff2", weight: "600" },
    { path: "../config/kalame/KalamehWeb-Bold.woff2", weight: "700" },
    { path: "../config/kalame/KalamehWeb-Black.woff2", weight: "900" },
  ],
  variable: "--font-kalame",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="fa">
      <body
        className={clsx(
          "min-h-screen bg-background text-foreground antialiased",
          kalame.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            forcedTheme: "dark",
          }}
        >
          <SiteNavbar />
          <main className="relative">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
