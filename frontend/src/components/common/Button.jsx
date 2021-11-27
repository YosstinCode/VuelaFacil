import React from "react";

const Button = ({ text, login = false }) => {
  let colorBtn = login ? "bg-purple-700 border-2" : "bg-purple-700";

  return (
    <button
      className={`${colorBtn} p-2 col-span-2 rounded-full w-1/2 m-auto text-white md:w-56 lg:col-span-1`}
    >
      {text}
    </button>
  );
};

export default Button;
