import footer from "../../../assets/images/footer.png";
import FooterLogoSection from "./FooterLogoSection";
import AppStoreButtons from "../../buttons/AppStoreButtons";
import SocialIcons from "./SocialIcons";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="relative text-white  bg-[#0F3B34] max-w-[1440px] mx-auto">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
        <img
          src={footer}
          alt=""
          className="absolute bottom-0 right-0 object-cover h-full"
        />

        <div
          className="relative z-10 flex flex-col md:flex-row justify-between lg:items-center
       py-8 lg:py-16 xl:py-[100px]"
        >
          <FooterLogoSection />
          <AppStoreButtons isFooter={true} />
        </div>

        <SocialIcons />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
