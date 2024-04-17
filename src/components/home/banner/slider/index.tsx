"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { ArrowButton } from "./arrowButton";

export function Slider({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [created, setCreated] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setCreated(true);
      },
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });

          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("slideChanged", clearNextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className={`${className} relative mb-8`}>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, index) => (
            <div className="items-center keen-slider__slide" key={index}>
              <img src={image} className="mx-auto" alt="Coffee cup image" />
            </div>
          ))}
        </div>
        {created && instanceRef.current && (
          <>
            <ArrowButton
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            <ArrowButton
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>
      {created && instanceRef.current && (
        <div className="flex justify-center gap-2">
          {instanceRef.current.track.details.slides.map((slide, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index);
                }}
                className={`w-4 h-4  rounded-full ${
                  currentSlide === index ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
