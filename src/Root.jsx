import  { useState, useEffect  } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet , useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContextModal from "./components/ContextModal";

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu
    setModalOpen(true); // Open your modal
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div onContextMenu={handleContextMenu}>
      <Helmet>
        <title>Home - IELTS LS</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
      {isModalOpen && <ContextModal onClose={closeModal} />}
    </div>
  );
};

export default Root;
