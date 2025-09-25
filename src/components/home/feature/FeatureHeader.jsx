import vector from "../../../assets/images/features/f-v.png";

const FeatureHeader = () => {
  return (
    <section className="text-center mb-[60px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dGray">
        <span className="flex justify-center">
          Build for
          <span className="flex flex-col relative pr-6 pl-3">
            <span className="z-10"> Everyone</span>
            <img
              src={vector}
              className="absolute -bottom-1 left-0 w-full h-[11px] z-0 "
              alt="Underline"
            />
          </span>
        </span>
      </h2>
      <p
        className="text-lGray mt-[6px] text-xs lg:text-base  
      max-w-md lg:max-w-[562px] mx-auto"
      >
        Whether you're booking services, managing tasks, or running operations,
        we've designed the perfect experience for you.
      </p>
    </section>
  );
};

export default FeatureHeader;
