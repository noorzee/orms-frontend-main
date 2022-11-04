import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

import { signin, authenticate, isAutheticated } from "../auth/helper/index";

const Login = () => {
  {Header()}
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    didRedirect: false,
  });

  const { username, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ username, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
          performRedirect();
        }
      })
      .catch(console.log("signin request failed", error, user));
  };
  const navigate = useNavigate();
  const performRedirect = () => {
    // // TODO: do a redirect here
    // if (didRedirect) {
    //   if (user && user.role === 1) {
    //     return <p>redirect to admin</p>;
    //   } else {
    //     return <p>redirect to user dashboard</p>;
    //   }
    // }
    if (isAutheticated() != null) {
      navigate("/Dashboard");
    } else {
      alert("Authentication failed");
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const loginForm = () => {
    return (
      <div className="bg-gray-200">
        <div className="flex items-center h-screen w-full">
          <div className="w-80 bg-white rounded-2xl p-6 m-0 md:max-w-sm md:mx-auto border border-slate-300 shadow-sm">
            <div
              align="center"
              className="mt-3 mb-3 items-center content-center"
            >
              {" "}
              <img src={require("./../data/logo.jpg")} width="120px" />
            </div>
            <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
              Sign in to EMS
            </span>
            <form className="mb-0">
              <div className="mb-4 md:w-full">
                <label
                  for="email"
                  className="block text-xs mb-1 text-left text-gray-500"
                >
                  Username
                </label>
                <input
                  onChange={handleChange("username")}
                  className="bg-gray-100 w-full border rounded-2xl px-4 py-2 outline-none focus:shadow-outline  text-left text-xs"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                />
              </div>
              <div className="mb-6 md:w-full relative">
                <div className="flex w-full">
                  <label
                    for="password"
                    className="block text-xs mb-1  text-center text-gray-500"
                  >
                    Password
                  </label>
                  <a
                    className="text-xs text-right  text-[#58a6ff] absolute right-0"
                    href="/login"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  onChange={handleChange("password")}
                  className="bg-gray-100 w-full border rounded-2xl px-4 py-2 outline-none focus:shadow-outline  text-left text-xs"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                />
              </div>
              <div className="mb-6 md:w-full relative">
                <div className="flex w-full">
                  <p className="block text-xs mb-1  text-center text-gray-500">
                    {JSON.stringify(values)}
                  </p>
                </div>
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 shadow-lg text-white uppercase text-sm font-semibold px-4 py-2 rounded-2xl text-center items-center w-full"
                onClick={onSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return [loadingMessage(), errorMessage(), loginForm()];
};

export default Login;
