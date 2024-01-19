"use client";

import Loading from "@/app/loading";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import dynamic from "next/dynamic";
import React from "react";
import { useEffect, useState } from "react";
import { Suspense } from "react";
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
      const response = await axios.get(process.env.API_URL + "/api/messages", {
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
      const response = await axios.get(process.env.API_URL + "/api/messages", {
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
    // Bind to the 'new-message' event on component mount
    channel.bind("new-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    getUsersMessages();
    getClickedUsersMessages();
    // Cleanup function to unbind on unmount
    return () => {
      channel.unbind("new-message");
    };
  });

  const messages = [];

  // biome-ignore lint/complexity/noForEach: <explanation>
  usersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = user?.pet_name;
    formattedMessage["img"] = user?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    messages.push(formattedMessage);
  });

  // biome-ignore lint/complexity/noForEach: <explanation>
  clickedUsersMessages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["name"] = clickedUser?.pet_name;
    formattedMessage["img"] = clickedUser?.url;
    formattedMessage["message"] = message.message;
    formattedMessage["timestamp"] = message.timestamp;
    messages.push(formattedMessage);
  });

  const desecendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp),
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
