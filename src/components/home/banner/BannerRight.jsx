import banner from "../../../assets/images/banner.png";

const BannerRight = () => {
  return (
    <div className="md:absolute -right-8 lg:-right-16 xl:-right-[120px] mb-10 md:mb-0">
      <img
        src={banner}
        alt="App Preview"
        className="w-[420px] lg:w-[620px] xl:w-[720px] 
        h-[356px] lg:h-[556px] x:h-[656px] object-contain "
      />
    </div>
  );
};

export default BannerRight;
