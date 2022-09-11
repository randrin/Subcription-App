import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context";
import "./index.scss";
import SubscriptionPlan from "./SubscriptionPlan";

const root = ReactDOM.createRoot(
  document.getElementById("app-subscription-plan")
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <SubscriptionPlan />
    </UserProvider>
  </React.StrictMode>
);
