import NavbarLogo from "./NavbarLogo";
import NavbarCTAButton from "./NavbarCTAButton";
import useIsHomepage from "../../../hooks/useIsHomepage";

const Navbar = () => {
  const isHomepage = useIsHomepage();
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between py-5 px-5 xl:px-0">
        <NavbarLogo />
        {isHomepage && <NavbarCTAButton />}
      </div>
    </nav>
  );
};

export default Navbar;
