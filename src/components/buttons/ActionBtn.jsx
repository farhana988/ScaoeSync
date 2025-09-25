import React from 'react';

const ActionBtn =  ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
    return (
        <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-[#49AE44] text-white py-[11px] rounded-md font-bold
        hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
    );
};

export default ActionBtn;