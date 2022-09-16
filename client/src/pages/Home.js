import React, { useEffect, useState, useContext } from "react";
import PriceCard from "../composants/cards/PriceCard";
import { UserContext } from "../context";
import {
  createSubscription,
  getListPricesSubscription,
} from "../services/subscriptionService";
import { END_POINT_MY_ACCOUNT, END_POINT_REGISTER } from "../routes/EndPoints";
import toast from "react-hot-toast";

const Home = ({ history }) => {
  const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.id);
      });
    check();
    setUserSubscriptions(result);
  }, [state && state.user]);

  useEffect(() => {
    const isPaused = () => {
      state &&
        state.user &&
        state.user.subscriptions &&
        state.user.subscriptions.resumes_at &&
        history.push(END_POINT_MY_ACCOUNT);
    };

    state && state.user && isPaused();
  }, [state && state.user]);

  const fetchPrices = async () => {
    await getListPricesSubscription()
      .then((data) => {
        console.log("prices get request", data);
        setPrices(data?.data);
      })
      .catch((error) => {
        console.log("prices get error: ", error);
      });
  };

  const handleClick = async (e, price) => {
    console.log("price: ", price);
    e.preventDefault();
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      history.push(`/${price.nickname.toLowerCase()}`);
      return;
    }
    // console.log("plan clicked", price.id);
    if (state && state.token) {
      await createSubscription({
        priceId: price.id,
      })
        .then((data) => {
          window.open(data.data);
        })
        .catch((error) => {
          console.log("prices get error: ", error);
          toast.error("Something went wrong. Try again");
        });
    } else {
      history.push(END_POINT_REGISTER);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">
          Explore the right plan for your business
        </h1>
        <p className="lead pb-4">Choose a plan that suites you best!</p>
      </div>

      <div className="row pt-5 mb-3 text-center">
        {prices &&
          prices?.map((price) => (
            <PriceCard
              key={price.id}
              price={price}
              handleSubscription={handleClick}
              userSubscriptions={userSubscriptions}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
