import React, { useState, useContext } from "react";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context";
import { loginSubscription } from "../../services/authService";
import { END_POINT_MY_ACCOUNT } from "../../routes/EndPoints";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // context
  const [state, setState] = useContext(UserContext);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log("email and password", email, password);
    await loginSubscription({ email, password })
      .then((data) => {
        console.log("data: ", data);
        setEmail("");
        setPassword("");
        setState(data.data);
        toast.success(`Welcome ${data.data.user.email}`);
        localStorage.setItem("auth", JSON.stringify(data));
        history.push(END_POINT_MY_ACCOUNT);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong. Try again");
      });
  };

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Login</h1>
          <p className="lead pb-4">
            Access your subscriptions. Anytime. Anywhere.
          </p>

          <div className="form-group">
            <Input
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />

            <div className="d-grid">
              <Button
                handleClick={handleOnSubmit}
                type="danger"
                text="Register"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
