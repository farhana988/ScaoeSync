import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar />

        <div className=" px-5 xl:px-0 min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
