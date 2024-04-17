"use client";
import { useEffect, useState } from "react";
import image from "@/../public/assets/img/Coffee.png";
import { Slider } from "../slider";

export function BannerImage() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
