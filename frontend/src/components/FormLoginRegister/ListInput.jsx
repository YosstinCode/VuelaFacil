import React from "react";
import Input from "./Input";
import email from "../../assets/labelEmail.png";
import password from "../../assets/labelPassword.png";

const inputs = [
  {
    text: "Correo",
    placeholder: "Ingresar Correo...",
    name: "email",
    type: "text",
    img: email,
  },
  {
    text: "Contraseña",
    placeholder: "Ingresar contraseña...",
    name: "password",
    type: "password",
    img: password,
  },
];

const ListInput = ({ handleChange }) => {
  return inputs.map((input, index) => (
    <Input key={index} {...input} handleChange={handleChange} />
  ));
};

export default ListInput;
