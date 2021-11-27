import React from "react";
import "./styles.css";

const Promo = ({ ciudadOrigen, ciudadDestino, textPromo }) => {
  return (
    <article class="background  ">
      <div class="ciudad">{ciudadOrigen}</div>
      <h3 class="center">{textPromo}</h3>
      <div class="ciudad bottom ciudadTwo">{ciudadDestino}</div>
    </article>
  );
};

export default Promo;
