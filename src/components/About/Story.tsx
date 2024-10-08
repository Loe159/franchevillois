'use client'
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Story = () => {
  const usePathName = usePathname();
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white-secondary">
      <div className="container">
        <SectionTitle
            title="Notre histoire"
            paragraph=""
            right
            width="100%"
            mb={"0"}
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
            >
              <Image
                src="/images/about/story.jpeg"
                alt="story image"
                width={500}
                height={500}
                className="drop-shadow-three w-full"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex flex-col gap-10 items-center">
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg text-justify whitespace-pre-wrap">
              Le FC Franchevillois a été créé en janvier 1940, mais ses débuts remontent à septembre 1939, lorsque quatre jeunes passionnés de football, Henri Pegand, René Cormet, Julien Gailleton et Robert Blanc, décident de former un club. Ils choisissent les couleurs bleu et blanc et organisent rapidement leurs premiers matchs. Les membres, déterminés et motivés, construisent eux-mêmes les infrastructures nécessaires, établissant un fort esprit communautaire dès le départ.
              <br/><br/>
              Aujourd'hui, le FC Franchevillois compte environ 300 licenciés et continue de promouvoir le football à tous les niveaux, des jeunes aux seniors. Le club s'engage activement dans la formation des jeunes joueurs, cherchant à développer leurs compétences tout en leur inculquant des valeurs de respect et de solidarité. Bien que les dynamiques aient évolué, le club reste un pilier de la vie locale, porté par une nouvelle génération de bénévoles et de joueurs déterminés à perpétuer l’esprit qui a animé ses fondateurs.
            </p>
            {usePathName !== '/le-club' ?
                <Link href={"le-club"}
                      className="text-black hover:before:bg-secondaryborder-secondary relative h-[50px] overflow-hidden border-2 border-secondary bg-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center">
                  <span className="relative z-10">En savoir plus</span></Link>
                : ""}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
