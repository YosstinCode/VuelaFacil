import React from "react";
import ItemsNav from "./Nav/ItemsNav";
import LoginNav from "./Nav/LoginNav";

const Nav = ({ user }) => {
  return (
    <nav className="mb-12 bg-purple-700 text-white flex justify-between items-center p-4 min-w-screen h-16">
      <h1 className="text-2xl font-semibold h-auto md:text-3xl lg:text-4xl">
        VuelaFacil
      </h1>
      <ItemsNav />
      <LoginNav email={user.email} />
    </nav>
  );
};

export default Nav;
