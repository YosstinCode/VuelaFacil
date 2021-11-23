import React, { useState } from "react";

const inputs = [
  {
    placeholder: "Ciudad de origen",
    name: "ciudadOrigen",
    type: "text",
  },
  {
    placeholder: "Ciudad de destino",
    name: "ciudadDestino",
    type: "text",
  },
  {
    placeholder: "Fecha de ida",
    name: "fechaIda",
    type: "date",
  },
  {
    placeholder: "Fecha de vuelta",
    name: "fechaVuelta",
    type: "date",
  },
  {
    placeholder: "Pasajeros",
    name: "pasajeros",
    type: "number",
  },
];

const ListInputs = ({ handleChange }) => {
  return (
    <>
      {inputs.map((input) => (
        <input
          className="col-span-2 m-auto md:col-span-1 w-64 h-9 rounded-t-lg border-b-4 

          border-purple-700
          focus:outline-none 
          focus:ring-2
          focus:ring-purple-700 
          focus:border-transparent
          "
          {...input}
          onChange={handleChange}
          min="0"
        />
      ))}
    </>
  );
};

export default ListInputs;
