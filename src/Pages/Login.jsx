import React, { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const notify = () => toast.success("You have been logged in successfully");
  const auth = getAuth();
  const user = useContext(AuthContext);
  const [isExistingUser, setIsExistingUser] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailWrong, setEmailWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user.setAsUser(userCredential.displayName);
        notify();
        navigate("/");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        if (errorCode === "auth/invalid-login-credentials") {
          setIsExistingUser(false);
          setTimeout(() => {
            setIsUserNotExisting(true);
          }, 3000);
        } else if (errorCode === "auth/invalid-email") {
          setEmailWrong(true);
          setTimeout(() => {
            setEmailWrong(false);
          }, 3000);
        } else if (errorCode === "auth/missing-password") {
          setPasswordWrong(true);
          setTimeout(() => {
            setPasswordWrong(false);
          }, 3000);
        } else if (errorCode === "auth/invalid-credential") {
          setPasswordWrong(true);
          setTimeout(() => {
            setPasswordWrong(false);
          }, 3000);
        }
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex p-5 rounded-t">
              {/* here starts */}

              <button
                className=" ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => navigate("/")}
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <div className="flex justify-center"></div>
            {/* body */}
            <div className="relative px-12 flex-auto">
              {!isExistingUser && (
                <div>
                  <p className="text-red-600 p-3 font-semibold">
                    Invalid username or password
                  </p>
                </div>
              )}
              <form className="p-3">
                <p className="p-3">
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    ref={emailRef}
                    className=" rounded block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
                    type="email"
                    placeholder="Enter your email"
                  />
                </p>
                {emailWrong && (
                  <p className="text-red-600 p-3 font-bold">
                    Please enter a valid email address
                  </p>
                )}
                <p className="p-3">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    ref={passwordRef}
                    className="rounded block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
                    type="password"
                    placeholder="Type your password"
                  />
                </p>
                {passwordWrong && (
                  <p className="text-red-600 p-3 font-bold">
                    Password should contain atleast 6 charactes
                  </p>
                )}
              </form>
            </div>
            {/*footer*/}
            <div>
              <p className="text-center font-serif p-3">
                Don't have an account?
                <a
                  className=" ms-2 text-blue-900 underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signup");
                  }}
                >
                  Signup
                </a>
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate("/")}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleLogin()}
              >
                Login
              </button>
              {/* here ends */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <Toaster />
    </>
  );
};

export default Login;
