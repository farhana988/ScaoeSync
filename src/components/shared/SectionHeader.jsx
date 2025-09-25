const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dGray">
        {title}
      </h2>
      <p className="text-lGray mt-[6px] text-xs lg:text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
