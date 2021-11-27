import React from "react";
import Button from "../../common/Button";
import ciudad from "../../../assets/cartagena.png";
import DestinyAndDate from "./DestinyAndDate";

const Route = () => {
  return (
    <article className="relative w-72 h-96 rounded-3xl my-8 m-auto">
      <img src={ciudad} alt="" />
      <div className="container absolute -bottom-10 bg-purple-400 rounded-3xl">
        <div className="PrecioYCodigo flex justify-between py-2 px-4">
          <h3 className="text-purple-800 font-bold text-xl">B-16</h3>
          <h3 className="text-pink-600 font-bold text-xl">$1'900.000</h3>
        </div>
        <div className="Fechas flex flex-col px-16 py-4 gap-4">
          <DestinyAndDate going={true} city="Bogota" date="Dom. 20 Mar. 2022" />
          <DestinyAndDate city="Cartagena" date="Dom. 20 Mar. 2022" />
        </div>
        <div className="flex pb-4">
          <Button text="Selecction" />
        </div>
      </div>
    </article>
  );
};

export default Route;
