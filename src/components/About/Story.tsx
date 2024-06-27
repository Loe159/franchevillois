import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import Link from "next/link";

const Story = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
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
                src="/images/about/story.png"
                alt="story image"
                width={500}
                height={500}
                className="drop-shadow-three w-full"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex flex-col gap-10 items-center">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg text-justify whitespace-pre-wrap">
                  Le FCFL, Football Club du franc lyonnais est un club cinquantenaire, issu d’une fusion en 2004 entre FC Cailloux sur Fontaines et l’AS de Sathonay village.
                  <br/><br/>
                  Il est un club formateur labellisé depuis 2005 où de nombreux jeunes alimentent les équipes de la ligue Rhône Alpes.
                  <br/><br/>
                  Le Football Club Franc Lyonnais a été fondé par des passionnés de ce noble sport, qui partagent les mêmes idées; soucieux d’offrir un maximum d ‘exigence dans un club amateur, de faire partager cette passion au plus grand nombre tout en gardant l’esprit de compétition et ainsi de proposer à ces adhérents des produits digne d’un club de haut niveau .
                  <br/><br/>
                  Que vous soyez un sportif occasionnel ou un professionnel du milieu, notre club vous accueillera à bras ouverts.
                </p>
            <Link href={""}
                className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-white border-2 border-secondary text-black px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
