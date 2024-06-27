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
                perView: 5,
                spacing: 15,
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
          <SectionTitle title={"Nos partenaires"} paragraph={""}/>
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
            className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 keen-slider__slide">
            <a
                href={href}
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
