import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utilis/validate";

const Login = () => {
  const [isSignInPage, setSiginPage] = useState(true);
  const [errroMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const clickHandler = () => {
    setErrorMessage(validateData(email.current.value, password.current.value));
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="block  py-28">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative m-auto w-3/12 bg-black bg-opacity-80 justify-center min-h-44 flex-col p-10 rounded font-semibold "
        >
          <p className=" w-full  text-3xl  my-2.5 text-white size-8">
            {isSignInPage ? "Sign in" : "Sign Up"}
          </p>
          {!isSignInPage && (
            <input
              type="text"
              placeholder="Name"
              className="p-2 m-2 rounded w-full bg-black bg-opacity-80 text-white "
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-2 m-2 rounded w-full bg-black bg-opacity-80 text-white "
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 rounded bg-sl w-full bg-black bg-opacity-80   text-white "
          ></input>
          <p className=" text-red-600">{errroMessage}</p>
          <button
            className="p-2 m-2 bg-red-500 text-white w-full rounded"
            onClick={clickHandler}
          >
            {isSignInPage ? "   Sign In " : "Sign Up"}
          </button>
          <p className=" w-full    my-2.5 text-white size-8">
            <span className="text-gray-500 ">
              {isSignInPage ? "New to Netflix? " : "Already a user "}
            </span>
            <span
              className=" cursor-pointer"
              onClick={() => setSiginPage(!isSignInPage)}
            >
              {isSignInPage ? "Sign up now." : "Sign In now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
