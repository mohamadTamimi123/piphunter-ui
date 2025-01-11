import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

import BasicNavbar from "./BasicNavbar";
import FadeInImage from "./FadeInImage";

import SplineComponents from "@/components/MainSlider/Spline";
import MouseScroll from "@/components/mouseScroll/MouseScroll";
import ParralaxLogo from "@/components/parralaxLogo/parralaxLogo";

export default function Component() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      <BasicNavbar />
      <main
        className="container mx-auto flex flex-1 flex-col

      items-center justify-start

       overflow-hidden px-8"
      >
        <SplineComponents />

        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px] ">
            <div className="bg-hero-section-title bg-clip-text  mt-32">
              با تولید سادگی
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
              radius="full"
            >
              شروع
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              پـلـن هـا
            </Button>
          </div>

          <ParralaxLogo />

          <MouseScroll />
        </section>

        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <FadeInImage
            fill
            priority
            alt="Gradient background"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
          />
        </div>
      </main>
    </div>
  );
}
