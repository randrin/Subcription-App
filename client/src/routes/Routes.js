import { Route, Switch } from "react-router-dom";
import Home from "../composants/Home";
import Login from "../composants/auth/Login";
import Register from "../composants/auth/Register";
import {
  END_POINT_HOME,
  END_POINT_LOGIN,
  END_POINT_REGISTER,
  END_POINT_STRIPE_CANCEL,
  END_POINT_STRIPE_SUCCESS,
} from "./EndPoints";
import StripeSuccess from "../pages/stripe-success";
import StripeCancel from "../pages/stripe-cancel";
import AuthRoute from "./utils/AuthRoute";

const Routes = () => (
  <Switch>
    {/* Auth Routes */}
    <Route exact path={END_POINT_HOME} component={Home} />
    <Route exact path={END_POINT_LOGIN} component={Login} />
    <Route exact path={END_POINT_REGISTER} component={Register} />
    <AuthRoute
      exact
      path={END_POINT_STRIPE_SUCCESS}
      component={StripeSuccess}
    />
    <AuthRoute exact path={END_POINT_STRIPE_CANCEL} component={StripeCancel} />
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
