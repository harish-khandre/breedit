"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { LoadingOutlined } from "@ant-design/icons";
const ChatInput = dynamic(() => import("./ChatInput"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});
const Chat = dynamic(() => import("./Chat"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});

const ChatDisplay = ({ user, clickedUser }) => {
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const [usersMessages, setUsersMessages] = useState(null);
  const [clickedUsersMessages, setClickedUsersMessages] = useState(null);

  const getUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/messages", {
        params: { userId: userId, correspondingUserId: clickedUserId },
        next: {
          revalidate: 0,
        },
      });
      setUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getClickedUsersMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/messages", {
        params: { userId: clickedUserId, correspondingUserId: userId },
        next: {
          revalidate: 0,
        },
      });
      setClickedUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersMessages();
    getClickedUsersMessages();
  });

  const messages = [];

  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.pet_name;
    formattedMessage["img"] = user?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    messages.push(formattedMessage);
  });

  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.pet_name;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    messages.push(formattedMessage);
  });

  const desecendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  return (
    <>
      <div>
        <Suspense fallback={<Loading />}>
          <Chat desecendingOrderMessages={desecendingOrderMessages} />
        </Suspense>
        <ChatInput
          user={user}
          clickedUser={clickedUser}
          getUsersMessages={getUsersMessages}
          getClickedUsersMessages={getClickedUsersMessages}
        />
      </div>
    </>
  );
};

export default ChatDisplay;
