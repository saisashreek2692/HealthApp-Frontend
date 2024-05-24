import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginPageHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard/patient");
  };

  return (
    <>
      <form onSubmit={loginPageHandler} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            {" "}
            Password{" "}
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By loging to an account, you agree to our &nbsp;
            <Link to={`/`} className="text-gray-700 underline">
              terms and conditions
            </Link>
            &nbsp; and &nbsp;
            <Link to={`/`} className="text-gray-700 underline">
              privacy policy
            </Link>
            .
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            type="submit"
            // onClick={loginPageHandler}
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Sign In
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Need an account? &nbsp;
            <Link to={`/register`} className="text-gray-700 underline">
              Sign Up
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
