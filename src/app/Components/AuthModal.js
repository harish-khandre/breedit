"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

import { CloseCircleOutlined, LoadingOutlined } from "@ant-design/icons";

import { toast } from "react-hot-toast";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isSignUp && password !== confirmPassword) {
      setError("Password does not match");
      return;
    }

    try {
      const data = {
        email,
        password,
      };

      const response = await fetch(`/api/${isSignUp ? "register" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const statusCode = response.status;
      if (statusCode === 201) {
        const responseData = await response.json();
        setCookie("UserId", responseData.userId); 
        setCookie("AuthToken", responseData.token);

        router.push(isSignUp ? "/onboard" : "/findpet");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
      toast.error(error);
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="auth-modal authBlogCard lg:mt-1 md:top-16 bg-[#c88572]  ">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className="close-icon cursor-pointer" onClick={handleClick}>
          <CloseCircleOutlined
            style={{ fontSize: "125%" }}
            className="text-[#505f2f] hover:text-[#f7ebdb] "
          />
        </div>
        <h2 className="text-2xl font-bold text-[#f7ebdb] text-center mb-5">
          {isSignUp ? "Create Account" : "Login"}
        </h2>
        <p className="text-sm mb-6 text-[#505f2f] font-medium">
          By clicking Log In, you agree to our terms. Learn how we process your
          data in our Privacy Policy and Cookie Policy.
        </p>
        <form onSubmit={handleSubmit}>
          <label className=" text-left pl-3 text-[#f7ebdb]  font-bold  ">
            Email
          </label>
          <input
            type="email"
            className="border-b-2 text-[#505f2f] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
            id="email"
            name="email"
            value={email}
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-left pl-3 text-[#f7ebdb] mt-3  font-bold">
            Password
          </label>
          <input
            className=" border-b-2 text-[#505f2f] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-r-4 border-[#505f2f]"
            name="password"
            id="password"
            type="password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp && (
            <>
              {" "}
              <label className="text-left pl-3 text-[#f7ebdb]  mt-3 font-bold">
                Confirm Password
              </label>
              <input
                className="border-b-2 text-[#505f2f] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
                name="password-check"
                id="password-check"
                type="password"
                required={true}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </>
          )}

          <button
            className="button mt-6 py-6 cursor-pointer "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoadingOutlined className="animate-spin  h-5 w-5" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthModal;
