import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Actus from "@/components/Actus";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-secondary px-16 max-h-[500px] mb-36">
        <div className="container">
          <SectionTitle
            title="Actus"
            paragraph=""
            right
            width="100%"
          />

        <Actus/>
        </div>
      </section>
    </>
  );
};

export default Features;
