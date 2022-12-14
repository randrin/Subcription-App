import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import config from "../config";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("auth"))?.data);
  }, []);

  // axios config
  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = config.API_URL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
