import React, { useState, useContext } from "react";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context";
import { registerSubscription } from "../../services/authService";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // context
  const [state, setState] = useContext(UserContext);

  const handleOnSubmit = async (e) => {
    // console.log(name, email, password);
    await registerSubscription({ name, email, password })
      .then((data) => {
        console.log("data: ", data);
        setName("");
        setEmail("");
        setPassword("");
        toast.success(
          `Hey ${data.data.user.name}. You are part of team now. Congrats!`
        );
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        history.push("/");
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
          <h1 className="pt-5 fw-bold">Let's Get Started</h1>
          <p className="lead pb-4">
            Sign up for free. No credit card required.
          </p>

          <div className="form-group">
            <Input label="Name" value={name} setValue={setName} />
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

export default Register;
