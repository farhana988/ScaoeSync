import NavbarLogo from "./NavbarLogo";
import NavbarCTAButton from "./NavbarCTAButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between py-5 px-5 xl:px-0">
        <NavbarLogo />
        <NavbarCTAButton />
      </div>
    </nav>
  );
};

export default Navbar;
