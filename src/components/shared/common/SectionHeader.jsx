const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-[60px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dGray">
        {title}
      </h2>
      <p
        className="text-lGray mt-[6px] text-xs lg:text-base  
      max-w-xs lg:max-w-sm xl:max-w-[500px] mx-auto"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
