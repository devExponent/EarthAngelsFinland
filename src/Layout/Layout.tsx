import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinMission from "../pages/HomeSections/JoinMission";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <JoinMission />
      <Footer />
    </>
  );
};

export default Layout;
