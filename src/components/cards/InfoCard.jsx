const InfoCard = ({ icon, title, desc }) => {
  return (
    <div
      className="flex flex-col items-start text-start md:pr-5 lg:pr-10 
      border-r last:border-r-0 border-[#F4F6F8]"
    >
      <div
        className="bg-[#ECFCEB] w-[43px] h-[43px] rounded-[8px] flex items-center 
      justify-center text-lg lg:text-2xl text-[#3BA334]"
      >
        {icon}
      </div>
      <h3 className="mt-5 font-bold lg:text-lg text-dGray">{title}</h3>
      <p className="text-lGray mt-1 text-xs lg:text-sm">{desc}</p>
    </div>
  );
};

export default InfoCard;
