"use client";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import "./styles.css";
import Image from "next/image";

import image from "@/public/vercel.svg";

export default function ParralaxLogo() {
  return (
    <>
      <div className={"main_parralax_sec container max-w-7xl m-auto h-56"}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <MouseParallaxContainer
            resetOnLeave
            className="parallax"
            containerStyle={{
              width: "100%",
              height : "100%" ,
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1611502867268-9193c5c45f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
                backgroundPositionY: "50%",
                transform: "scale(1.2)",
                position: "absolute",
                filter: "blur(4px) brightness(50%)",
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
              }}
            />
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Image alt={""} height={100} src={image} width={100} />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Image alt={""} height={100} src={image} width={100} />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Image alt={""} height={100} src={image} width={100} />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Image alt={""} height={100} src={image} width={100} />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Image alt={""} height={100} src={image} width={100} />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </>
  );
}
