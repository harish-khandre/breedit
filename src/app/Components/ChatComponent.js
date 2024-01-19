"use client";

import { cache, useEffect, useState } from "react";
import ChatContainer from "./Chat/ChatContainer";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from "./Navbar";

const ChatComponent = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = cache(async () => {
    try {
      const response = await axios.get(process.env.API_URL + "/api/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  });
  const getGenderedUsers = async () => {
    try {
      const response = await axios.get(
        process.env.API_URL + "/api/gendered-users",
        {
          params: { gender: user?.gender_interest },
          next: {
            revalidate: 10,
          },
        }
      );
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  });

  return (
    <>
      <Navbar />
      {user && (
        <div className="Chatcomponent  ">
          <ChatContainer user={user} className="w-full" />
        </div>
      )}
    </>
  );
};
export default ChatComponent;
