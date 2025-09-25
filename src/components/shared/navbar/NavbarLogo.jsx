import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";

const NavbarLogo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="ScapeSync Logo"
        className="h-10 lg:h-[60px] lg:w-[147px] object-cover"
      />
    </Link>
  );
};

export default NavbarLogo;
