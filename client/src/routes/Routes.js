import { Route, Switch } from "react-router-dom";
import Login from "../composants/auth/Login";
import Register from "../composants/auth/Register";
import {
  END_POINT_BASIC_PLAN,
  END_POINT_HOME,
  END_POINT_LOGIN,
  END_POINT_MY_ACCOUNT,
  END_POINT_PREMIUM_PLAN,
  END_POINT_REGISTER,
  END_POINT_STANDARD_PLAN,
  END_POINT_STRIPE_CANCEL,
  END_POINT_STRIPE_SUCCESS,
} from "./EndPoints";
import StripeSuccess from "../pages/stripe-success";
import StripeCancel from "../pages/stripe-cancel";
import AuthRoute from "./utils/AuthRoute";
import Account from "../pages/Account";
import BasicPlan from "../composants/plans/BasicPlan";
import StandardPlan from "../composants/plans/StandardPlan";
import PremiumPlan from "../composants/plans/PremiumPlan";
import Home from "../pages/Home";

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
    <AuthRoute exact path={END_POINT_MY_ACCOUNT} component={Account} />
    <AuthRoute exact path={END_POINT_BASIC_PLAN} component={BasicPlan} />
    <AuthRoute exact path={END_POINT_STANDARD_PLAN} component={StandardPlan} />
    <AuthRoute exact path={END_POINT_PREMIUM_PLAN} component={PremiumPlan} />
  </Switch>
);

export default Routes;
