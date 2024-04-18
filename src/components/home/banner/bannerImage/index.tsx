"use client";
import image from "@/../public/assets/img/Coffee.png";
import { Slider } from "../slider";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export function BannerImage() {
  const { width } = useWindowDimensions();
  return (
    <>
      {width >= 1024 && (
        <img
          src={image.src}
          alt="A cooffee cup"
          className="hidden w-full mx-auto mb-4 lg:block lg:order-1 lg:w-2/5"
        />
      )}
      {width < 1024 && <Slider images={[image.src, image.src, image.src]} />}
    </>
  );
}
