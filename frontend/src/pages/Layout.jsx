import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Header/Nav";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen pb-64 md:pb-40 overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
