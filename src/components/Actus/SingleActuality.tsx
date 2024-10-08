import { Actuality } from "@/types/actuality";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleActuality = ({ actuality }: { actuality: Actuality }) => {
  const { id, title, paragraph, image, publishDate}  = actuality;
  const link = "actualite/" + id + "-" + title.toLowerCase().replaceAll(" ", "-");


    return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <Image src={image} alt={title} width={500} height={500} className={"w-auto max-h-[300px]"} />
        <div className="p-10 md:py-0 flex flex-col justify-around w-full md:w-3/4 h-full">
            <div className="flex flex-col gap-1.5">
                <p className="text-sm text-body-color">{publishDate}</p>
                <h2 className="mb-1 text-2xl font-semibold text-dark dark:text-white">{title}</h2>
                <p className="mb-8 text-base leading-relaxed text-white overflow-hidden overflow-ellipsis line-clamp-3">
                    {paragraph}
                </p>
            </div>
            <Link href={link}
                  className="text-white hover:before:bg-secondaryborder-secondary relative h-[50px] overflow-hidden border-2 border-secondary bg-secondary before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center">
                <span className="relative z-10">Lire la suite</span></Link>
        </div>
    </div>
  );
};

export default SingleActuality;
