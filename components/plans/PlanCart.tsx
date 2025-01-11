"use client";

import React from "react";
import { Avatar } from "@nextui-org/avatar";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { AcmeIcon } from "@/components/plans/acme";

export default function PlanCart(props: CardProps) {
  return (
    <Card
      className="overflow-none relative w-[420px] border-small border-foreground/10 bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-right-bottom"
      {...props}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar
            className="border-small border-white/20 bg-transparent"
            icon={<AcmeIcon className="text-white" />}
          />
          <p className="text-large font-medium text-white">Acme Event</p>
        </div>
      </CardHeader>
      <CardBody className="px-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium text-white/80">
            Learn from the best
          </p>
          <p className="text-small text-white/60">
            Unlock the full power of Acme! Gain expertise and insights from top
            organizations through guided tutorials, boosting productivity,
            enhancing security, and enabling seamless collaboration.
          </p>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button
          fullWidth
          className="border-small border-white/20 bg-white/10 text-white"
        >
          Get tickets now
        </Button>
      </CardFooter>
    </Card>
  );
}
