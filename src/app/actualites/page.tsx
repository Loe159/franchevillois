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
            title: "Une histoire de passion depuis 1940",
            paragraph: "Le Football Club Franchevillois (FCF) a vu le jour en janvier 1940, mais son histoire débute en septembre 1939...",
            image: "/images/news/histoire.jpg",
            publishDate: "07 Oct 2024",
        }
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
