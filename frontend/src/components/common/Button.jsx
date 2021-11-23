import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-purple-700 p-2 col-span-2 rounded-full w-1/2 m-auto text-white md:w-56 lg:col-span-1">
      {text}
    </button>
  );
};

export default Button;
