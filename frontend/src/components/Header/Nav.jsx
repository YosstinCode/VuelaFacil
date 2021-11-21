import React from "react";
import profile from "../../assets/profile.png";
import menu from "../../assets/menu.png";

const Nav = () => {
  return (
    <nav className="bg-purple-700 text-white flex justify-between items-center p-4 min-w-screen h-16">
      <h1 className="text-2xl font-semibold h-auto md:text-3xl lg:text-4xl">
        VuelaFacil
      </h1>
      <ul className="hidden lg:flex justify-center text-xl">
        <li className="px-4">Home</li>
        <li className="px-4">Promociones</li>
        <li className="px-4">Contact</li>
      </ul>
      <div className="flex items-center">
        <div className="hidden md:flex items-center pr-4 text-xl">
          <h3 className="pr-4">YosstinCode</h3>
          <img className="rounded-full" src={profile} alt="photo-profile" />
        </div>
        <div className="lg:hidden ">
          <img src={menu} alt="menu burger-menu" className="w-7 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
