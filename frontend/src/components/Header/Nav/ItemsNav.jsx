import React from "react";
import { Link } from "wouter";
const ItemsNav = () => {
  return (
    <ul className="hidden lg:flex justify-center text-xl">
      <Link to="/" className="px-4">
        Home
      </Link>
      <Link to="/promociones" className="px-4">
        Promociones
      </Link>
      <li className="px-4">Contact</li>
    </ul>
  );
};

export default ItemsNav;
