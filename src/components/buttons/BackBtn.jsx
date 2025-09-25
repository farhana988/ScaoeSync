import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#49AE44] text-sm font-medium mb-6 gap-2
          text-[13px]"
      >
        <FaChevronLeft />
        Back
      </button>
    </>
  );
};

export default BackBtn;