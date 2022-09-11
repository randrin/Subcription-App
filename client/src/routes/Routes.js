import { Route, Switch } from "react-router-dom";
import Home from "../composants/Home";
import Login from "../composants/auth/Login";
import Register from "../composants/auth/Register";
import { END_POINT_HOME, END_POINT_LOGIN, END_POINT_REGISTER } from "./EndPoints";

const Routes = () => (
  <Switch>
    {/* Auth Routes */}
    <Route exact path={END_POINT_HOME} component={Home} />
    <Route exact path={END_POINT_LOGIN} component={Login} />
    <Route exact path={END_POINT_REGISTER} component={Register} />
    {/* <Route
      exact
      path={`${END_POINT_REGISTER_ACTIVATION}/${":token"}`}
      component={AccountActivation}
    />
    <Route
      exact
      path={END_POINT_FORGOT_PASSWORD_WEB}
      component={ForgotPassword}
    />
    <Route
      exact
      path={`${END_POINT_RESET_PASSWORD_WEB}/${":token"}`}
      component={ResetPassword}
    /> */}
  </Switch>
);

export default Routes;
