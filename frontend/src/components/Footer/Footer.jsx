import React from "react";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import ItemSocial from "./itemSocial";
import Politics from "./politics";

const Footer = () => {
  return (
    <footer className="absolute w-screen bottom-0 flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <section className="flex justify-center my-4">
        <ItemSocial text="Instagram" image={instagram} />
        <ItemSocial text="Twitter" image={twitter} />
        <ItemSocial text="Facebook" image={facebook} />
      </section>
      <section className="md:flex mb-2">
        <Politics text="Terminos y condiciones" />
        <Politics text="Politica de cookies" />
        <Politics text="Politica de privacidad" />
      </section>
    </footer>
  );
};

export default Footer;
