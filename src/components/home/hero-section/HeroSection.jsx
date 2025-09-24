import { heroData } from "../../../data/heroData";
import InfoCard from "../../cards/InfoCard";

const HeroSection = () => {
  return (
    <section
      className="pt-20 md:pt-28 lg:pt-52 xl:pt-40 grid grid-cols-2 md:grid-cols-3 
      xl:grid-cols-4 gap-5 lg:gap-10 container mx-auto "
    >
      {heroData.map(({ id, icon, title, desc }) => (
        <InfoCard key={id} icon={icon} title={title} desc={desc} />
      ))}
    </section>
  );
};

export default HeroSection;
