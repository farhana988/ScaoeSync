import AppStoreButtons from "../../buttons/AppStoreButtons";
import bannerV1 from "../../../assets/images/banner-v-1.png";
import BannerUnderline from "./BannerUnderline";

const BannerLeft = () => {
  return (
    <div>
      <div className="mb-10 xl:mb-16 relative">
        <img
          src={bannerV1}
          alt=""
          className="absolute left-1/2 transform 
          w-[120px] xl:w-[140px] h-[135px] object-contain
          -top-[69px]  xl:-top-[59px] 
          -translate-x-[59%] xl:-translate-x-[38%]"
        />
        <h1 className="text-4xl lg:text-6xl xl:text-[84px] font-bold text-gray-800">
          All Your Jobs <br />
          <span className="flex">
            One
            <BannerUnderline />
          </span>
        </h1>
        <p className="mt-4 text-[#637381] max-w-sm lg:max-w-lg text-xs lg:text-base">
          Built for business owners, employees, and clients streamline job
          scheduling, service tracking, and team management in one powerful app.
        </p>
      </div>
      <AppStoreButtons isFooter={false} />
    </div>
  );
};

export default BannerLeft;
