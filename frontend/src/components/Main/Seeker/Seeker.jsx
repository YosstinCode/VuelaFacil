import React from "react";
import ListInputs from "./ListInputs";
import { useSeeker } from "../../../hooks/useSeeker";
import Button from "../../common/Button";

const Seeker = () => {
  const { handleSubmit, handleChange } = useSeeker();

  return (
    <form
      className="my-4 p-4 gap-4 bg-purple-400 mx-9 grid grid-cols-1 rounded-xl text-center md:gap-4  md:grid-cols-2 lg:gap-4 lg:w-2/3 lg:m-auto lg:my-4 lg:grid-cols-3"
      onSubmit={handleSubmit}
    >
      <h3 className="text-white col-span-2 lg:col-span-3 text-2xl">
        ¿A donde te gustaria viajar?
      </h3>
      <ListInputs handleChange={handleChange} />
      <Button text="Buscar" />
    </form>
  );
};

export default Seeker;
