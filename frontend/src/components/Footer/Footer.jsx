import React from "react";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <section className="flex justify-center my-8">
        <article className="mx-4 md:flex md:mx-8">
          <img src={instagram} alt="" />
          <h4 className="hidden md:inline md:mx-4  lg:text-lg">Instagram</h4>
        </article>
        <article className="mx-4  md:flex md:mx-8">
          <img src={twitter} alt="" />
          <h4 className="hidden  md:inline md:mx-4  lg:text-lg">Twitter</h4>
        </article>
        <article className="mx-4 md:flex md:mx-8">
          <img src={facebook} alt="" />
          <h4 className="hidden md:inline md:mx-4  lg:text-lg">Facebook</h4>
        </article>
      </section>
      <section className="md:flex mb-8">
        <article className="mb-4 md:mx-10">
          <h4 className="lg:text-lg">Terminos y condiciones</h4>
        </article>
        <article className="mb-4 md:mx-10">
          <h4 className="lg:text-lg">Politica de cookies</h4>
        </article>
        <article className="mb-4 md:mx-10">
          <h4 className="lg:text-lg">Politica de privacidad</h4>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
