import  { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
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
