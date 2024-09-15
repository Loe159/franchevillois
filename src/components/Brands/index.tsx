"use client"

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "@/components/Common/SectionTitle";
import { useKeenSlider } from "keen-slider/react";

const Brands = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: "free-snap",
            slides: {
                perView: 1,
            },
            breakpoints: {
                '(min-width: 300px)': {
                    slides: {
                        perView: 3
                    },
                },
                '(min-width: 768px)': {
                    slides: {
                        perView: 5
                    },
                },
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

  return (
    <section className="py-16">
      <div className="container">
          <SectionTitle title={"Nos partenaires"} paragraph={""} mb={"16"} width={"full"}/>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
              <div ref={sliderRef}
                  className="keen-slider p-8">
                  {brandsData.map((brand) => (
                      <SingleBrand key={brand.id} brand={brand}/>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({brand}: { brand: Brand }) => {
    const {href, image, imageLight, name} = brand;

    return (
        <div
            className="keen-slider__slide flex flex-wrap items-center justify-center">
            <a
                href={href}
                target="_blank"
                rel="nofollow noreferrer"
                className="opacity-90 transition hover:opacity-100"
      >
        <Image src={image} alt={name} width={100} height={100} className={"mix-blend-multiply"}/>
      </a>
    </div>
  );
};
