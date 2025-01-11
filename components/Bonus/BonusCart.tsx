"use client";
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import React from "react";

import CountdownTimer from "@/components/CountDown/CountDown";
import style from "@/styles/index_bonus.module.scss";
import { Button } from '@nextui-org/button';

export default function BonusCart() {


  return (
    <Card className=" basis-1/3  grow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
      <CardBody className="px-3 py-0 text-small text-default-400">
        <div className={"flex gap-8"}>
          <CountdownTimer />

          <div className={"rtl text-right flex  flex-col justify-center"}>
            <h2
              className={`${style.bounce_cart_title} text-white mb-3`}
            >
              لورم ایپسوم
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و می تکنولوژیادی در شص
              افزارجفاده قرار گیرد.
            </p>

          </div>
        </div>
      </CardBody>
      <CardFooter className={"justify-end flex"}>
        <Button>
          شروع
        </Button>
      </CardFooter>
    </Card>
  );
}
