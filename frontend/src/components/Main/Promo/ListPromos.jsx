import React from "react";
import Promo from "./Promo";
import List from "../../common/List";
import { getPromos } from "../../../services/getPromos";
import usePromos from "../../../hooks/usePromos";

const ListPromos = () => {
  const { promos } = usePromos();
  console.log(promos);
  return (
    <List>
      {promos.map((promo, index) => (
        <Promo
          key={index}
          textPromo={`El mejor precio descuento del ${promo.discount * 100}%`}
          ciudadDestino={promo.destination_city}
          ciudadOrigen={promo.origin_city}
          image={promo.image}
        />
      ))}
    </List>
  );
};
export default ListPromos;
