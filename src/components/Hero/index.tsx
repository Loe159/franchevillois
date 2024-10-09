import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white bg-hero-pattern bg-cover bg-fixed min-h-[100vh] flex items-center"
      >
        <div className="container">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto max-w-[800px] text-center">
                        <h1 className="mb-5 font-bold leading-tight text-white sm:text-5xl md:text-7xl font-akira">
                            FC <span className={"text-primary"}>FRANCHEVILLOIS</span>
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
