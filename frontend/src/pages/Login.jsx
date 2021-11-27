import React from "react";
import Form from "../components/FormLoginRegister/Form";

const Login = () => {
  return (
    <div className="w-screen h-screen text-white bg-login bg-cover bg-no-repeat bg-loginX flex justify-center items-center md:bg-center lg:bg-center">
      <Form islogin={true} />
    </div>
  );
};

export default Login;
