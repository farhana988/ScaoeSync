import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqAccordion = ({ faq, isOpen, onClick }) => {
  const { q, a } = faq;
  return (
    <div className="border border-[#C7E6C5] rounded-[16px] p-[24px]">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold text-dGray">{q}</span>
        {isOpen ? (
          <AiOutlineMinus className="opacity-80 text-xs" />
        ) : (
          <AiOutlinePlus className="opacity-80 text-xs" />
        )}
      </button>
      {isOpen && <p className="pb-5 text-lGray text-sm pl-10 mt-[24px]">{a}</p>}
    </div>
  );
};

export default FaqAccordion;
