import Image from "next/image";

import PreloaderImage3 from "public/preloader3.jpg";

import AladesignPreloader from "@/kame.dev/components/preloader/aladesign-preloader";

export default function AladesignPreloaderDemo() {
  return (
    <>
      <AladesignPreloader />
      <div className="relative h-dvh flex items-end justify-center px-8">
        <div className="overflow-hidden">
          <Image
            src={PreloaderImage3}
            alt="hero"
            loading="lazy"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-[25.2vw] h-[34.375vw] max-[1025px]:w-[47.265vw] max-[1025px]:h-[64.45vw] max-[550px]:w-[88vw] max-[550px]:h-[120vw]"
            id="hero-img"
          />
        </div>
      </div>
    </>
  );
}
