import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../context";
import { END_POINT_HOME, END_POINT_MY_ACCOUNT } from "../routes/EndPoints";
import { getStatusSubscription } from "../services/subscriptionService";
import toast from "react-hot-toast";

const StripeSuccess = ({ history }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    getSubscriptionStatus();
  }, []);

  const getSubscriptionStatus = async () => {
    await getStatusSubscription()
    .then(data => {
      console.log("SUBSCRIPTION STATUS => ", data);
      if (data && data.data.length === 0) {
        history.push(END_POINT_HOME);
      } else {
        // update user in local storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data.data;
        localStorage.setItem("auth", JSON.stringify(auth));
        // update user in context
        setState(auth);
        setTimeout(() => {
          history.push(END_POINT_MY_ACCOUNT);
        }, 1000);
      }
    })
    .catch(error => {
      console.log("status sub error: ", error);
      toast.error("Something went wrong. Try again");
    })
  };

  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default StripeSuccess;
