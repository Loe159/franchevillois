import { Actuality } from "@/types/actuality";
import Image from "next/image";
import Link from "next/link";

const SingleActuality = ({ actuality }: { actuality: Actuality }) => {
  const { id, title, paragraph, image, publishDate}  = actuality;
  const link = "actualite/" + id + "-" + title.toLowerCase().replaceAll(" ", "-");
  return (
      <article className="border-b transition group">
          <Link href={link} className="block mb-2 overflow-hidden">
              <Image src={image} width={200} height={200} alt={title}
                     className="w-full h-40 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"/>
          </Link>
          <h2 className="text-lg font-bold text-dark mb-2 font-akira">
              <Link href={link}>
                  {title}
              </Link>
          </h2>
          <p className="text-sm text-gray-500 mb-4">{publishDate}</p>
          <Link href={link} className="text-secondary font-akira">
              LIRE PLUS
          </Link>
      </article>

  );
};

export default SingleActuality;
