import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";
import useIsHomepage from "../hooks/useIsHomepage";

const MainLayout = () => {
  const isHomepage = useIsHomepage();
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar />

        <div className=" px-5 xl:px-0 min-h-screen">
          <Outlet />
        </div>
      </div>
      {isHomepage && <Footer />}
    </>
  );
};

export default MainLayout;
