"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import "./style.css";
export default function GsapCompo() {
  const container = useRef();
  const circle = useRef();

  // new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/"});
  useGSAP(
    () => {
      gsap.to("[data-speed]", {
        y: (i, el) =>
          (1 - parseFloat(el.getAttribute("data-speed"))) *
          ScrollTrigger.maxScroll(window),
        ease: "none",
        trigger: '.box-container',
        scrollTrigger: {
          start: 0,
          end: "max",
          invalidateOnRefresh: true,
          scrub: 0,
        },
      });
    },
    // use selectors...
  ); // <-- scope for selector text (optional)

  return (
    <>
      <div id="wrapper">
        <section id="content">
          <div aria-hidden="true" className="heading">
            <p>smooooth</p>
            <div className="text-container">
              <p>scrolling</p>
              <div className="box-container">
                <div className="box green" data-speed="0.25">
                  0.25
                </div>
                <div className="box purple" data-speed="0.4">
                  0.4
                </div>
                <div className="box orange" data-speed="0">
                  0
                </div>
                <div className="box red" data-speed="1">
                  1
                </div>
                <div className="box blue" data-speed="0.75">
                  0.75
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
      <br />;
    </>
  );
}
