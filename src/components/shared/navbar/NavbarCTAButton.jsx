import { Link, useNavigate } from "react-router";
import useRegistrationContext from "../../../hooks/useRegistrationContext";
import useLogout from "../../../hooks/useLogout";

const NavbarCTAButton = () => {
  const { setRegistrationEmail } = useRegistrationContext();

  const navigate = useNavigate();

  const isLoggedIn = useLogout(setRegistrationEmail);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("registration_email");

    setRegistrationEmail(null);

    navigate("/login");
  };

  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="border-2 border-red-500 hover:bg-red-700 px-5 py-2 rounded-[8px] 
          font-bold text-sm lg:text-base"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/register"
          className="bg-green hover:bg-green-700 text-white px-5 py-2
      rounded-[8px] font-bold text-sm lg:text-base"
        >
          Get Started
        </Link>
      )}
    </>
  );
};

export default NavbarCTAButton;
