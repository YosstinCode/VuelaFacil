import React from "react";
import { Link } from "wouter";
import BuguerMenu from "./BuguerMenu";
const IsUserLogin = ({ email = false }) => {
  let style = "md:flex lg:flex items-center pr-4 text-xl";
  return (
    <>
      <div className={email ? "hidden " + style : style}>
        {email ? (
          <h3 className="pr-4">{email.replace("@gmail.com", "")}</h3>
        ) : (
          <Link to="/login">Iniciar Sesion</Link>
        )}
      </div>
    </>
  );
};

export default IsUserLogin;
