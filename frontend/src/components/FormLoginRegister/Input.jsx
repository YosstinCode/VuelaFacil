import React from "react";

const Input = ({ text, img, handleChange, placeholder, name, type }) => {
  return (
    <div className="flex flex-col gap-1 px-6 py-2 lg:gap-2">
      <label className="flex gap-2 items-center" htmlFor="">
        <img className="w-5 md:w-7" src={img} alt="" />
        <h4 className="text-xl md:text-2xl font-medium">{text}</h4>
      </label>
      <input
        className="text-white bg-transparent border-b-2"
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
