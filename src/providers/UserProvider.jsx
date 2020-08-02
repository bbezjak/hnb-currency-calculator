import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const initialUser = { user: null };

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userData) => {
        debugger;
        setUser(userData)
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
