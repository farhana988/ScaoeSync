import { storeButtons } from "../../data/storeButtonsData";

const AppStoreButtons = () => (
  <div className="flex items-center gap-5 mt-6 md:mt-0">
    {storeButtons.map(({ href, imgSrc, alt, line1, line2 }, index) => (
      <a
        href={href}
        key={index}
        className="flex items-center gap-[14px] border border-[#347C30] rounded-[7.28px] px-2 lg:px-4 py-1.5 lg:py-[12px] hover:bg-green-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imgSrc}
          alt={alt}
          className="w-5 lg:w-[26.69px] h-[26px] lg:h-[32.67px] object-contain"
        />
        <div className="text-left">
          <p className="text-[8px] lg:text-[10.92px] text-white">{line1}</p>
          <p className="text-base lg:text-[21.84px] font-semibold md:text-base">
            {line2}
          </p>
        </div>
      </a>
    ))}
  </div>
);

export default AppStoreButtons;
