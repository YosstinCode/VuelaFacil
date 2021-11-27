import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Header/Nav";
import { useContext } from "react";
import context from "../context/userContext";

const Layout = ({ children }) => {
  const { user } = useContext(context);
  console.log("context", user);
  return (
    <div className="relative min-h-screen pb-64 md:pb-40 overflow-hidden">
      <Nav user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
