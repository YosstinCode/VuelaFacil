import React from "react";
import Button from "../common/Button";
import { Link } from "wouter";
import ListInput from "./ListInput";
import { useFormRegister } from "../../hooks/useFormRegister";
import { useFormLogin } from "../../hooks/useFormLogin";

const Form = ({ islogin = false }) => {
  const { handleChange, handleSubmit } = islogin
    ? useFormLogin()
    : useFormRegister();

  return (
    <form
      onSubmit={handleSubmit}
      class=" bg-black bg-opacity-50 w-10/12 md:w-8/12 md:h-2/5 flex flex-col justify-center md:text-lg lg:text-2xl lg:w-5/12 lg:h-3/4"
    >
      <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center py-6">
        {islogin ? "Iniciar sesión" : "Registrarse"}
      </h3>
      <ListInput handleChange={handleChange} />
      <div className="flex flex-col items-center p-4 md:py-12">
        <Button text="Entrar" />
        <Link
          to={islogin ? "/register" : "/login"}
          className="underline text-purple-400 pt-2"
        >
          {islogin ? "Crear una cuenta nueva." : "Ya tengo una cuenta."}
        </Link>
      </div>
    </form>
  );
};

export default Form;
