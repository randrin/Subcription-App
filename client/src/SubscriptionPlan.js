import { BackTop } from "antd";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route } from "react-router-dom";
import NavTop from "./composants/NavTop";

import Routes from "./routes/Routes";

const SubscriptionPlan = () => {
  return (
    <BrowserRouter>
      <NavTop />
      <Toaster
        position="buttom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Route component={Routes} />
      <BackTop />
    </BrowserRouter>
  );
};

export default SubscriptionPlan;
