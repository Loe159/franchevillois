import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import Link from "next/link";

const Story = () => {
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur culpa dolorum ea enim eos, facere fugit ipsa iure laborum modi, sed sit suscipit veritatis, voluptate. Explicabo illo iusto quod.
                  <br/><br/>
                  Il est un club formateur labellisé depuis 2005 où de nombreux jeunes alimentent les équipes de la ligue Rhône Alpes.
                  <br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dolor dolorem hic libero maxime optio temporibus voluptates. Animi aut autem doloremque ex, expedita iste reiciendis rerum sequi sint voluptate?
                  <br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
