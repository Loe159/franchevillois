import { Actuality } from "@/types/actuality";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleActuality = ({ actuality }: { actuality: Actuality }) => {
  const { id, title, paragraph, image, link, publishDate}  = actuality;

  return (
    <div className="w-full flex">
      <Image src={image} alt={title} width={500} height={500}/>
        <div className="flex flex-col px-10 gap-1.5">
            <p className="text-sm text-body-color">{publishDate}</p>
            <h2 className="mb-1 text-2xl font-semibold text-dark dark:text-white">{title}</h2>
            <p className="mb-8 text-base leading-relaxed text-white">
                “{paragraph}
            </p>
        </div>
    </div>
  );
};

export default SingleActuality;
