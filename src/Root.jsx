import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Home - IELTS LS</title>
      </Helmet>
      <Navbar />
      <Outlet />
    <Footer/>
    </div>
  );
};

export default Root;
