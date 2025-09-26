import { features } from "../../../data/featuresData";
import FeatureCard from "../../cards/FeatureCard";
import FeatureHeader from "./FeatureHeader";

const Feature = () => {
  return (
    <section className="pt-20 lg:pt-32 xl:pt-[170px] overflow-x-hidden">
      <FeatureHeader />
      <div className="container mx-auto grid gap-10 xl:gap-0">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
