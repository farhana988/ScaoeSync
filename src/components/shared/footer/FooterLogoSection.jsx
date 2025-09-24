import footerLogo from "../../../assets/images/footer-logo.png";

const FooterLogoSection = () => (
  <div className="flex flex-col xl:flex-row justify-between gap-6 xl:gap-20">
    <img
      src={footerLogo}
      alt="ScapeSync Logo"
      className="h-14 lg:h-[76px] w-[157px] lg:w-[207px] object-cover"
    />
    <p className="text-[#CFD8D6] max-w-sm lg:max-w-lg xl:max-w-[404px] text-xs lg:text-base">
      Your all-in-one platform for job scheduling, employee management, and
      client service built to keep your business running smoothly from anywhere.
    </p>
  </div>
);

export default FooterLogoSection;
