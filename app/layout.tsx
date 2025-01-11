import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import GapifyWidget from "@/components/gapify/GapifyWidget";
import Banner from "@/components/banner/banner";
import ScrollBar from "@/components/scrollBar/ScrollBar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const kalame = localFont({
  src: "../config/kalame/KalamehWeb-Regular.woff2",
  variable: "--font-kalame",
});

const kalameBold = localFont({
  src: "../config/kalame/KalamehWeb-Bold.woff2",
  variable: "--font-kalame-bold",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      {/*<body*/}
      {/*  className={clsx(`*/}
      {/*  min-h-screen bg-background font-sans antialiased  */}
      {/*  */}
      {/*  ${myFont.variable}`)}*/}
      {/*>*/}

      <body
        className={clsx(`
       
        min-h-screen bg-background font-sans antialiased 
        ${kalame.variable} ${kalameBold.variable}`)}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <AnimatedCursor
              // innerSize={8}
              // outerSize={35}
              // innerScale={1}
              // outerScale={2}
              // outerAlpha={0}
              // hasBlendMode={true}
              innerStyle={{
                backgroundColor: '#ffffff'
              }}
              outerStyle={{
                border: '1px solid #ffffff'
              }}
            />
            <ScrollBar />
            <Banner />
            {/*<Navbar />*/}
            {/*<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">    */}
            <main className=" ">
              <ToastContainer />
              <GapifyWidget />
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
