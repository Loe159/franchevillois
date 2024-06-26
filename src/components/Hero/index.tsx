import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] bg-hero-pattern bg-cover bg-fixed min-h-[80vh]"
      >
        <div className="container">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto max-w-[800px] text-center">
                        <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                            FC FRANCHEVILLOIS
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
