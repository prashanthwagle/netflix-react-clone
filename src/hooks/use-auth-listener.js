import { auth } from "firebase";
import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

function useAuthListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(function (authUser) {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
      }
    });

    return () => {
      listener();
    };
  }, []);

  return { user };
}

export default useAuthListener;
