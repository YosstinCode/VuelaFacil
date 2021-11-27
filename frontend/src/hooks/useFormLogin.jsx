import React from "react";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../components/auth/firebase";
import { useLocation } from "wouter";
import Context from "../context/userContext";

export const useFormLogin = () => {
  const [inputData, setInputData] = useState({});
  const [location, setLocation] = useLocation();
  const userContext = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = inputData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user, setUser } = userContext;
        const { email } = userCredential.user;
        setUser({ ...user, email });
        setLocation("/");
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
