import { Link, useNavigate } from "react-router";
import useRegistrationContext from "../../../hooks/useRegistrationContext";
import useLogout from "../../../hooks/useLogout";
import ProfileDropdown from "./ProfileDropdown";

const NavbarCTAButton = () => {
  const { setRegistrationEmail, registrationEmail } = useRegistrationContext();

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
        <ProfileDropdown
          registrationEmail={registrationEmail}
          onLogout={handleLogout}
        />
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
