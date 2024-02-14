"use client";

import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";

const AuthModal = dynamic(() => import("./AuthModal"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});

const Nav = ({ minimal }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  const handleLoginClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const handleAccountClick = () => {
    if (authToken) {
      removeCookie("UserId");
      removeCookie("AuthToken");
      window.location.href = "/";
    } else {
      setShowModal(true);
      setIsSignUp(true);
    }
  };

  const Links = [
    { key: "1", name: "HOME", link: "/" },
    { key: "2", name: "FIND PET", link: "/findpet" },
    { key: "3", name: "CHAT", link: "/chat" },
    { key: "4", name: "PROFILE", link: "/profile" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-[#f7ebdb] py-2 md:px-10 px-7">
        <div className="cursor-pointer flex items-center font-[Oswald] text-[#c88572] text-3xl tracking-wider">
          <span className="text-3xl text-[#c88572] mr-3 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
<<<<<<< HEAD
          <Link href="/">
=======
           <Link href="/">
>>>>>>> 6f9fbd75e8cfa78107d7c5b7387740c36b51fd34
            <Image
              src="https://imgur.com/hgn8JNF.png"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
<<<<<<< HEAD
=======

>>>>>>> 6f9fbd75e8cfa78107d7c5b7387740c36b51fd34
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f7ebdb] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in nav ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {authToken &&
            Links.map((link) => (
              <li key={link.key} className="md:ml-8 text-xl md:my-0 my-7">
                <Link href={link.link}>
                  <p className="hover:text-[#505f2f] tracking-wide text-[#c88572] text-2xl font-[Oswald] hover:underline underline-offset-8 decoration-1 duration-500">
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          {!authToken && !minimal && (
            <button
              className="button ml-10 font-semibold"
              onClick={handleLoginClick}
            >
              Log in
            </button>
          )}
          <button
            onClick={handleAccountClick}
            className="button lg:ml-10 font-semibold"
          >
            {authToken ? <Link href="/"> Sign out </Link> : "Create Account"}
          </button>
          {showModal && (
            <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
