import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import {Actuality} from "@/types/actuality";
import React from "react";
import SearchNews from "@/components/News/SearchNews";

export const metadata: Metadata = {
  title: "Actualité",
  description: "",
  // other metadata
};


const AboutPage = () => {
    const actualityData: Actuality[] = [
        {
            id: 1,
            title: "1er article",
            paragraph:
                "Le Football Club Franchevillois (FCF) a vu le jour en janvier 1940, mais son histoire débute en septembre 1939...",
            image: "/images/news/didier-robert.png",
            publishDate: "16 Juil 2021",
        },
        {
            id: 2,
            title: "ENTRAINEMENTS AU SEIN DU FC-FRANCHEVILLOIS",
            paragraph:
                "Belle journée ensoleillée qui à permis à nos jeunes adhérents de pouvoir profiter de nos magnifiques infrastructures. Encadrés par nos éducateurs que nous saluons...",
            image: "/images/news/entrainement.png",
            publishDate: "03 Avr 2021",
        },
        {
            id: 3,
            title: "MERCI POUR VOTRE SOUTIEN !",
            paragraph:
                "Un grand merci à votre partenaire pour l’aide apportée au cours de cette « drôle » de saison du fait de la crise sanitaire traversée.",
            image: "/images/news/soutien.png",
            publishDate: "20 Mar 2021",
        },
    ];



    return (
        <>
            <Breadcrumb
                pageName="Actualite"
            />
            <section id="news" className="overflow-hidden pt-5">
                <div className="container">
                    <SearchNews actuality={actualityData}/>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
