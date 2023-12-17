"use client";

import React, { cache } from "react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Link from "next/link";
import { RightCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import MobileUsers from "../Components/MobileUsers";
import { useMediaQuery } from "react-responsive";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = cache(async () => {
    try {
      const response = await axios.get("https://breedit.vercel.app/api/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getUser();
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return isTabletOrMobile ? (
    <MobileUsers />
  ) : (
    <>
      <Navbar />
      {user && (
        <>
          <section className=" bg-center bg-[#c88572] text-gray-900 leading-normal max-w-full">
            <div className="max-w-4xl flex items-center h-screen lg:min-h-screen flex-wrap mx-auto">
              <div
                id="profile"
                className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0  "
              >
                <div className="p-4 md:p-12 text-center lg:text-left ">
                  <div
                    className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center "
                    style={{
                      backgroundImage: `url(${user.url})`,
                    }}
                  ></div>

                  <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                    {user.pet_name}
                  </h1>
                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                  <p className="pt-4 text-xl font-bold flex items-center justify-center lg:justify-start">
                    <RightCircleOutlined style={{ color: "green" }} /> &emsp;
                    <span className="text-lg font-medium ">
                      Breed :&emsp;
                    </span>{" "}
                    {user.breed}
                  </p>
                  <p className="pt-2 text-xl font-bold ">
                    <RightCircleOutlined style={{ color: "green" }} /> &emsp;
                    <span className="text-lg font-medium ">Age :&emsp;</span>
                    {user.age}
                  </p>
                  <p className="pt-2 text-xl font-bold flex items-center justify-center lg:justify-start">
                    <RightCircleOutlined style={{ color: "green" }} /> &emsp;
                    <span className="text-lg font-medium ">
                      Gender :&emsp;
                    </span>{" "}
                    {user.gender_identity}
                  </p>

                  <p className="pt-2 text-xl font-bold ">
                    <RightCircleOutlined style={{ color: "green" }} /> &emsp;
                    <span className="text-lg font-medium ">About :&emsp;</span>
                    {user.about}
                  </p>
                  <p className="pt-2 text-xl font-bold ">
                    <RightCircleOutlined style={{ color: "green" }} /> &emsp;
                    <span className="text-lg font-medium ">email :&emsp;</span>
                    {user.email}
                  </p>
                  <div className="pt-8 pb-8">
                    <Link href="/onboarding">
                      <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full  lg:w-2/5">
                <Image
                  src={user.url}
                  alt="pfp"
                  width={1000}
                  height={500}
                  quality={100}
                  className="rounded-none lg:rounded-r-lg shadow-2xl hidden lg:block"
                />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Profile;
