'use client'


import React, {useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import 'keen-slider/keen-slider.min.css'
import SectionTitle from "@/components/Common/SectionTitle";
import SingleActuality from "@/components/Actus/SingleActuality";
import Link from "next/link";
import Image from "next/image";
import ScorencoWidget from "@/components/Team/ScorencoWidget";

const Team = ({ rankingWidgetId, resultWidgetId, image}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });
  return (
      <>
        <section id="features" className="pb-16 md:pb-20 lg:pb-28">
          <div className="container">
            {loaded && instanceRef.current && (
                <div className="dots">
                    <button
                        onClick={() => {
                            instanceRef.current?.moveToIdx(0)
                        }}
                        className={(currentSlide === 0 ? "active bg-white " : "bg-gray-100 ") +
                            "ease-in-up rounded-sm text-black px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center hover:text-primary"}>
                        Notre équipe
                    </button>
                    <button
                        onClick={() => {
                            instanceRef.current?.moveToIdx(1)
                        }}
                        className={(currentSlide === 1 ? "active bg-white " : "bg-gray-100 ") +
                            "ease-in-up rounded-sm text-black px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center hover:text-primary"}>
                        Résultats
                    </button>
                    <button
                        onClick={() => {
                            instanceRef.current?.moveToIdx(2)
                        }}
                        className={(currentSlide === 2 ? "active bg-white " : "bg-gray-100 ") +
                            "ease-in-up rounded-sm text-black px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center hover:text-primary"}>
                        Classement
                    </button>
                </div>
            )}
              <div className="navigation-wrapper">
                  <div ref={sliderRef} className="keen-slider text-black">
                      <div className={"keen-slider__slide"}>
                          <Image src={image} alt={"Équipe"} fill className="w-full h-auto !relative"/>
                      </div>
                      <div className={"keen-slider__slide"}>
                          <ScorencoWidget id={resultWidgetId} />
                      </div>
                      <div className={"keen-slider__slide"}>
                          <ScorencoWidget id={rankingWidgetId} />
                      </div>
                  </div>
              </div>

          </div>
        </section>
      </>
  )
};

export default Team;
