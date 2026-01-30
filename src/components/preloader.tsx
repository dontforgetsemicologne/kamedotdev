"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import Image from "next/image";

import PreloaderImage1 from "public/preloader1.jpg";
import PreloaderImage2 from "public/preloader2.jpg";
import PreloaderImage3 from "public/preloader3.jpg";
import PreloaderImage4 from "public/preloader4.jpg";
import PreloaderImage5 from "public/preloader5.jpg";

import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const preloaderImageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const setPreloaderImageRefs =
    (index: number) => (ref: HTMLImageElement | null) => {
      preloaderImageRefs.current[index] = ref;
    };
  const counterRef = useRef<HTMLDivElement>(null);

  const counterValue = {
    value: 0
  };

  useGSAP(
    () => {
      const counterTimeline = gsap.timeline();
      counterTimeline.to(
        counterValue,
        {
          value: 50,
          duration: 3,
          ease: "power2.out",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = `${Math.round(counterValue.value)}%`;
            }
          },
          onComplete: () => {
            gsap.to(counterValue, {
              value: 100,
              duration: 3,
              ease: "power1.out",
              onUpdate: () => {
                if (counterRef.current) {
                  counterRef.current.textContent = `${Math.min(100, Math.round(counterValue.value))}%`;
                }
              }
            });
          }
        },
        "st"
      );
      const holderYOffset1 =
        window.innerWidth < 551
          ? "-13px"
          : window.innerWidth < 1025
            ? "-2.34vw"
            : "-1.25vw";
      const holderYOffset2 =
        window.innerWidth < 551
          ? "-26px"
          : window.innerWidth < 1025
            ? "-4.49vw"
            : "-2.4vw";
      const holderYOffset3 =
        window.innerWidth < 551
          ? "-52px"
          : window.innerWidth < 1025
            ? "-8.59vw"
            : "-4.58vw";
      counterTimeline.to(
        holderRef.current,
        {
          duration: 6,
          delay: 1,
          keyframes: [
            {
              y: holderYOffset1,
              ease: "power2.inOut",
              delay: 0.3,
              duration: 0.5
            },
            {
              y: holderYOffset1,
              ease: "power2.inOut",
              duration: 0.5
            },
            {
              y: holderYOffset2,
              ease: "power2.inOut",
              duration: 0.5
            },
            {
              y: holderYOffset2,
              ease: "power2.inOut",
              duration: 0.5
            },
            {
              y: holderYOffset3,
              ease: "power2.inOut",
              duration: 0.5
            }
          ]
        },
        "st"
      );

      const imageTimeline = gsap.timeline();
      const imageContainerWidth = window.innerWidth < 1025 ? "100%" : "43%";
      const preloaderImageWidth =
        window.innerWidth < 551
          ? "25.45vw"
          : window.innerWidth < 1025
            ? "17.577vw"
            : "7.187vw";
      const preloaderImageHeight =
        window.innerWidth < 551
          ? "36.36vw"
          : window.innerWidth < 1025
            ? "24.412vw"
            : "9.79vw";
      const centerImageYOffset = window.innerWidth < 551 ? "2.5%" : "4%";

      const heroImgWidth =
        window.innerWidth < 551
          ? "88vw"
          : window.innerWidth < 1025
            ? "47.265vw"
            : "25.2vw";
      const heroImgHeight =
        window.innerWidth < 551
          ? "120vw"
          : window.innerWidth < 1025
            ? "64.45vw"
            : "34.375vw";

      imageTimeline
        .to(
          [
            preloaderImageRefs.current[0],
            preloaderImageRefs.current[1],
            preloaderImageRefs.current[2],
            preloaderImageRefs.current[3],
            preloaderImageRefs.current[4]
          ],
          {
            duration: 2,
            stagger: 0.1,
            opacity: 1,
            y: 0,
            ease: "elastic.out(1, 0.5)"
          }
        )
        .to(
          imageContainerRef.current,
          {
            width: imageContainerWidth,
            duration: 1,
            ease: "power4.inOut"
          },
          "st"
        )
        .to(
          [
            preloaderImageRefs.current[0],
            preloaderImageRefs.current[1],
            preloaderImageRefs.current[2],
            preloaderImageRefs.current[3],
            preloaderImageRefs.current[4]
          ],
          {
            width: preloaderImageWidth,
            height: preloaderImageHeight,
            duration: 1,
            ease: "power4.inOut"
          },
          "st"
        );

      [0, 1, 3, 4].forEach((index) => {
        imageTimeline.to(
          preloaderImageRefs.current[index],
          {
            delay: 0.4,
            duration: index % 2 === 0 ? 0.6 : 0.9,
            clipPath: "inset(0 0 100% 0)",
            ease: "power4.inOut",
            onComplete: () => {
              gsap.set(preloaderImageRefs.current[index], {
                delay: 0.3,
                position: "absolute"
              });
            }
          },
          "t"
        );
      });

      imageTimeline
        .to(preloaderImageRefs.current[2], {
          width: heroImgWidth,
          height: heroImgHeight,
          duration: 1,
          y: centerImageYOffset,
          ease: "power4.inOut"
        })
        .to(preloaderRef.current, {
          duration: 1,
          ease: "power4.inOut",
          clipPath: "inset(0 0 100% 0)"
        });
    },
    { scope: preloaderRef }
  );

  return (
    <div
      className="p-8 fixed z-99999 w-full h-dvh bg-black flex flex-col justify-between"
      ref={preloaderRef}
    >
      <div className="overflow-hidden h-[1.25vw] max-[1024px]:h-[2.34vw] max-[550px]:h-[13px]">
        <div ref={holderRef}>
          <span className="text-[1.04vw] max-[1024px]:text-[1.95vw] max-[550px]:text-[13px] leading-[1.2] font-normal text-white block uppercase">
            カメ / kame
          </span>
          <span className="text-[1.04vw] max-[1024px]:text-[1.95vw] max-[550px]:text-[13px] leading-[1.2] font-normal text-white block uppercase">
            steady & robust
          </span>
          <span className="text-[1.04vw] max-[1024px]:text-[1.95vw] max-[550px]:text-[13px] leading-[1.2] font-normal text-white block uppercase">
            timeless motion
          </span>
        </div>
      </div>
      <div
        className="flex justify-around w-full gap-[1vw] mx-auto max-[1024px]:gap-[2vw] max-[550px]:gap-[15px]"
        ref={imageContainerRef}
      >
        <Image
          src={PreloaderImage1}
          alt="preloader-1"
          className="max-[550px]:hidden will-change-transform object-cover translate-y-10 max-[550px]:w-[17.45vw] max-[550px]:h-[23.81vw] max-[1024px]:w-[9.374vw] max-[1024px]:h-[12.8vw] w-[5vw] h-[6.82vw]"
          ref={setPreloaderImageRefs(0)}
        />
        <Image
          src={PreloaderImage2}
          alt="preloader-2"
          className="will-change-transform object-cover translate-y-10  max-[550px]:w-[17.45vw] max-[550px]:h-[23.81vw] max-[1024px]:w-[9.374vw] max-[1024px]:h-[12.8vw] w-[5vw] h-[6.82vw]"
          ref={setPreloaderImageRefs(1)}
        />
        <Image
          src={PreloaderImage3}
          alt="preloader-3"
          className="will-change-transform z-10 object-cover translate-y-10 max-[550px]:w-[17.45vw] max-[550px]:h-[23.81vw] max-[1024px]:w-[9.374vw] max-[1024px]:h-[12.8vw] w-[5vw] h-[6.82vw]"
          ref={setPreloaderImageRefs(2)}
        />
        <Image
          src={PreloaderImage4}
          alt="preloader-4"
          className="will-change-transform object-cover translate-y-10 max-[550px]:w-[17.45vw] max-[550px]:h-[23.81vw] max-[1024px]:w-[9.374vw] max-[1024px]:h-[12.8vw] w-[5vw] h-[6.82vw]"
          ref={setPreloaderImageRefs(3)}
        />
        <Image
          src={PreloaderImage5}
          alt="preloader-5"
          className="max-[550px]:hidden will-change-transform object-cover translate-y-10 max-[550px]:w-[17.45vw] max-[550px]:h-[23.81vw] max-[1024px]:w-[9.374vw] max-[1024px]:h-[12.8vw] w-[5vw] h-[6.82vw]"
          ref={setPreloaderImageRefs(4)}
        />
      </div>
      <div
        className="text-white text-right font-manrope text-[4.17vw] max-[1024px]:text-[7.81vw] max-[550px]:text-[9.82vw] leading-[0.95] font-normal"
        ref={counterRef}
      >
        {counterValue.value}
      </div>
    </div>
  );
}
