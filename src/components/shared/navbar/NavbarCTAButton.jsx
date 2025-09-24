import { Link } from "react-router";

const NavbarCTAButton = () => {
  return (
    <Link
      to="/register"
      className="bg-[#3BA334] hover:bg-green-700 text-white px-5 py-2
         rounded-[8px] font-bold text-sm lg:text-base"
    >
      Get Started
    </Link>
  );
};

export default NavbarCTAButton;
