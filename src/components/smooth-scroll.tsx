"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    gsap.config({
      nullTargetWarn: false
    });
  });

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
        touchMultiplier: 2,
        infinite: false
      }}
    >
      {children}
    </ReactLenis>
  );
}
