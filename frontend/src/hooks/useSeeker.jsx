import React from "react";
import { useState } from "react";

export const useSeeker = () => {
  const [inputData, setInputData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target: { name, value } }) => {
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  return {
    handleSubmit,
    handleChange,
  };
};
