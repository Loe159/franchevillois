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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur culpa dolorum ea enim
              eos, facere fugit ipsa iure laborum modi, sed sit suscipit veritatis, voluptate. Explicabo illo iusto
              quod.
              <br/><br/>
              Il est un club formateur labellisé depuis 2005 où de nombreux jeunes alimentent les équipes de la ligue
              Rhône Alpes.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dolor dolorem hic libero
              maxime optio temporibus voluptates. Animi aut autem doloremque ex, expedita iste reiciendis rerum sequi
              sint voluptate?
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
