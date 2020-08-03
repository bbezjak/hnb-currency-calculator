import React, { createContext, useState, useEffect } from "react";
import { auth, getUserData } from "../firebase";

const initialUser = { user: null };

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    auth.onAuthStateChanged(async (userData) => {
      debugger;
      if (userData) {
        const { email } = userData;
        await getUserData(email).then((data) => {
          debugger;
          const name = data.data();
          setUser({email, "firstName" : name.firstName, "lastName" : name.lastName });
        });
      } else {
        setUser(userData);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
