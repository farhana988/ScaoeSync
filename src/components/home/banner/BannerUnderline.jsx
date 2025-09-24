import bannerV2 from "../../../assets/images/banner-v-2.png";

const BannerUnderline = () => {
  return (
    <span className="flex flex-col ml-3 relative">
      <span className="z-10">Smart App</span>
      <img
        src={bannerV2}
        className="absolute -bottom-1 left-0 w-full h-[14px] z-0"
        alt="Underline"
      />
    </span>
  );
};

export default BannerUnderline;
