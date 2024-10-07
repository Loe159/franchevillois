import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopBox = (props: {
  image: string;
  link: string;
  name: string;
  size: number
}) => {
  const { image, link, name , size} = props;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src={image} alt={name} width={size} height={size} className={"h-[368px]"}></Image>
        <Link href={link}
              className="text-black hover:before:bg-secondaryborder-secondary relative h-[50px] overflow-hidden border-2 border-secondary bg-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center">
        <span className="relative z-10">En savoir plus</span>
        </Link>
    </div>
  );
};

export default ShopBox;
