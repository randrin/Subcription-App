import { Route, Switch } from "react-router-dom";
import Home from "../composants/Home";
import { END_POINT_HOME, END_POINT_LOGIN } from "./EndPoints";

const Routes = () => (
  <Switch>
    {/* Auth Routes */}
    <Route exact path={END_POINT_HOME} component={Home} />
    {/* <Route exact path={END_POINT_LOGIN} component={LoginWithEmail} />
    <Route exact path={END_POINT_REGISTER} component={Register} />
    <Route
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
