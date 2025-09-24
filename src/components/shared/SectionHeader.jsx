import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-dGray">{title}</h2>
      <p className="text-lGray mt-[6px]">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
