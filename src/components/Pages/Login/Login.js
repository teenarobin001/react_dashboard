import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loadingAction, loginAction } from "../../../store/actions/AuthActions";
import Loader from "../../Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const errorMessage = useSelector((state) => state.errorMessage);
  const successMessage = useSelector((state) => state.successMessage);
  const showLoading = useSelector((state) => state.showLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errorObj = { ...errorsObj };

    let error = false;

    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }

    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }

    setErrors(errorObj);
    if (error) return;

    if (!error) {
      dispatch(loadingAction(true));
      dispatch(loginAction(email, password,navigate));
    }
    console.log(errorMessage);
  };

  return (
    <div className="container">
      <div className="form-holder">
        <div className="row mb-3">
          <h1 className="">Login</h1>
        </div>
        <form onSubmit={submitHandler}>
          {showLoading && <Loader />}
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
          {successMessage && (
            <div className="text-success">{successMessage}</div>
          )}
          <div className="row">
            <div className="col-4 center-div ta-left">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                onChange={emailChangeHandler}
              />
              {errors.email && (
                <div className="text-danger text-left">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4 center-div ta-left">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="******"
                onChange={passwordChangeHandler}
              />
              {errors.password && (
                <div className="text-danger text-left">{errors.password}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="div-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
        <div  className="div-center">
          <p>New to App Please  &nbsp;

            <Link to="/signup" className="mt-2">
                 SignUp
              </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
