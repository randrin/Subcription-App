import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context";
import { END_POINT_LOGIN } from "../EndPoints";

const AuthRoute = ({ ...rest }) => {
  const [state, setState] = useContext(UserContext);

  if (!state) {
    return <Redirect to={END_POINT_LOGIN} />;
  }

  return state && state.token ? <Route {...rest} /> : "";
};

export default AuthRoute;
