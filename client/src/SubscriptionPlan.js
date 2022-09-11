import { BackTop } from "antd";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from './routes/Routes';

const SubscriptionPlan = () => {
  return (
    <BrowserRouter>
      {/* <NavTop /> */}
      <Route component={Routes} />
      <BackTop />
    </BrowserRouter>
  );
}

export default SubscriptionPlan;
