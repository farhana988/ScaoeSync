import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
  return (
    <div className="md:pt-4 xl:pt-8 md:max-w-[728px] lg:max-w-[985px] xl:max-w-[1200px] mx-auto">
      <section
        className="relative flex flex-col-reverse md:flex-row items-center 
      md:mt-10 lg:mt-20 xl:mt-10 justify-between overflow-x-clip"
      >
        <BannerLeft />
        <BannerRight />
      </section>
    </div>
  );
};

export default Banner;
