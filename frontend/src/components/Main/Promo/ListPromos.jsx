import React from "react";
import Promo from "./Promo";

const ListPromos = () => {
  return (
    <section>
      {promotions.map(() => (
        <Promo
          textPromo="El mejor precio descuento del 15%"
          ciudadDestino="Cartagena"
          ciudadOrigen="Bogota"
        />
      ))}
    </section>
  );
};
export default ListPromos;
