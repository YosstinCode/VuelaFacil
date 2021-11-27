import React from "react";
import IsUserLogin from "./IsUserLogin";
import BuguerMenu from "./BuguerMenu";

const LoginNav = ({ email }) => {
  return (
    <div className="flex items-center">
      {email ? (
        <>
          <IsUserLogin email={email} />
          <BuguerMenu />
        </>
      ) : (
        <IsUserLogin email={email} />
      )}
    </div>
  );
};

export default LoginNav;
