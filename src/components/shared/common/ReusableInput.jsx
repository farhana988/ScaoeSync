import { FaEyeSlash } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

const ReusableInput = ({
  label,
  type = "text",
  register,
  name,
  required,
  validate,
  error,
  showToggle,
  showValue,
  onToggle,
  watchValue,
}) => {
  const shouldFloat = Boolean(watchValue);
  return (
    <div className="relative w-full">
      <input
        type={showToggle ? (showValue ? "text" : "password") : type}
        {...register(name, { required, validate })}
        id={name}
        placeholder=" "
        className={`w-full px-4 py-3 border border-[#919EAB52]/30 rounded-lg
          focus:outline-none focus:ring focus:ring-[#919EAB52]/50 peer
        `}
      />
      <label
        htmlFor={name}
        className={`absolute left-3 text-[#919EAB] text-sm cursor-text transition-all
          bg-white px-1 ${shouldFloat ? "top-[-10px] text-xs" : "  text-base"}
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
          peer-placeholder-shown:text-[#919EAB] peer-focus:top-[-10px]
          peer-focus:text-[#919EAB] peer-focus:text-xs
          ${error ? "text-red-500 peer-focus:text-red-500" : ""}
        `}
      >
        {label}
      </label>

      {showToggle && (
        <span
          onClick={onToggle}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer
           text-lGray text-xl"
        >
          {showValue ? <FaEyeSlash /> : <HiEye />}
        </span>
      )}
      {error && (
        <span className="text-red-500 text-sm mt-1 block">
          {error.message || `${label} is required`}
        </span>
      )}
    </div>
  );
};

export default ReusableInput;
