import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loggedInUserId, setloggedInUserId] = useState(0);

  return (
    <LoginContext.Provider
      value={[
        [isLoggedIn, setisLoggedIn],
        [loggedInUserId, setloggedInUserId],
      ]}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
