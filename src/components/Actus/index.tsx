'use client'

import { Actuality } from "@/types/actuality";
import SectionTitle from "../Common/SectionTitle";
import SingleActuality from "./SingleActuality";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import {useKeenSlider} from "keen-slider/react";
import React, {useState} from "react";

const actualityData: Actuality[] = [
  {
    id: 1,
    title: "HOMMAGE A DIDIER ROBERT",
    paragraph:
      "Ce dimanche 04 juillet 2021, à l’occasion du tournoi vétéran, CHALLENGE DIDIER ROBERT, fut l’occasion pour le FC FRANCHEVILLOIS de rendre...",
    image: "/images/news/didier-robert.png",
    publishDate: "16 Juil 2021",
    link: "",
  },
  {
    id: 2,
    title: "ENTRAINEMENTS AU SEIN DU FC-FRANCHEVILLOIS",
    paragraph:
      "Belle journée ensoleillée qui à permis à nos jeunes adhérents de pouvoir profiter de nos magnifiques infrastructures. Encadrés par nos éducateurs que nous saluons...",
    image: "/images/news/entrainement.png",
    publishDate: "03 Avr 2021",
    link: "",
  },
  {
    id: 3,
    title: "MERCI POUR VOTRE SOUTIEN !",
    paragraph:
      "Un grand merci à votre partenaire pour l’aide apportée au cours de cette « drôle » de saison du fait de la crise sanitaire traversée.",
    image: "/images/news/soutien.png",
    publishDate: "20 Mar 2021",
    link: "",
  },
];

const Actualities = () => {
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
        <section id="features" className="py-16 md:py-20 lg:py-28 bg-secondary px-16 md:max-h-[400px] mb-48">
          <div className="container">
            <SectionTitle
                title="Actus"
                paragraph=""
                right
                width="100%"
                mb={"0"}
                color="white"
            />

            <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {actualityData.map((actuality) => (
                <>
                  <div className={"keen-slider__slide"}>
                    <SingleActuality key={actuality.id} actuality={actuality}/>
                  </div>
                </>
            ))}
          </div>
          {loaded && instanceRef.current && (
              <>
                <Arrow
                    left
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                />

                <Arrow
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                />
              </>
          )}
        </div>
        {loaded && instanceRef.current && (
            <div className="dots">
              {Array.from({ length: instanceRef.current.track.details.slides.length }, (_, idx) => idx).map((idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                )
              })}
            </div>
        )}
          </div>
        </section>
      </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
      <svg
          onClick={props.onClick}
          className={`arrow ${
              props.left ? "arrow--left" : "arrow--right"
          } ${disabled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
      >
        {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
  )
}

export default Actualities;