import React from "react";
import { useState } from "react";
import { auth } from "../components/auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useLocation } from "wouter";

export const useFormRegister = () => {
  const [inputData, setInputData] = useState({});
  const [location, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputData;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLocation("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  const handleChange = ({ target: { name, value } }) => {
    setInputData({ ...inputData, [name]: value });
  };
  console.log(inputData);

  return {
    handleSubmit,
    handleChange,
  };
};
