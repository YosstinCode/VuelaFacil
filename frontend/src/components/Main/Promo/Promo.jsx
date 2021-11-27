import React from "react";
import "./styles.css";

const Promo = ({ ciudadOrigen, ciudadDestino, textPromo, image }) => {
  return (
    <>
      <article className="background">
        <img
          className="image absolute top-0 w-full h-full rounded-3xl"
          src={image}
          alt=""
        />
        <div className="ciudad z-10">{ciudadOrigen}</div>
        <h3 className="center text-purple-400 bg-black bg-opacity-30 px-8">
          {textPromo}
        </h3>
        <div className="ciudad bottom ciudadTwo">{ciudadDestino}</div>
      </article>
    </>
  );
};

export default Promo;
