import { useState, useRef, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileDropdown = ({ registrationEmail, onLogout }) => {
  const [showEmail, setShowEmail] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const handleProfileClick = () => {
    setShowEmail(!showEmail);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowEmail(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex items-center justify-center gap-3 lg:gap-5">
      {/* Profile Icon */}
      <button
        ref={profileRef}
        onClick={handleProfileClick}
        className="text-2xl lg:text-4xl"
      >
        <FaRegUserCircle />
      </button>

      {/* Dropdown  */}
      {showEmail && (
        <div
          ref={dropdownRef}
          className="absolute top-20 right-0 bg-white shadow-lg rounded-lg p-3
           w-48"
        >
          <p className="text-sm text-dGray">Email: {registrationEmail}</p>
        </div>
      )}

      {/* Logout  */}
      <button
        onClick={onLogout}
        className="border-2 hover:border-red-700 px-5 py-1 lg:py-2 
        rounded-[8px] font-bold text-sm lg:text-base"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
