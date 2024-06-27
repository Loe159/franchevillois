import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopBox = (props: {
  image: string;
  link: string;
  name: string;
}) => {
  const { image, link, name } = props;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src={image} alt={name} width={500} height={500}></Image>
      <Link href={link}
            className="ease-in-up shadow-btn hover:shadow-btn-hover rounded-sm bg-white border-2 border-secondary text-black px-8 py-3 text-base font-medium transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 w-52 text-center">
        En savoir plus
      </Link>
    </div>
  );
};

export default ShopBox;
