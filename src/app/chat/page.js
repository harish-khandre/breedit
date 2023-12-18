"use client"

import React, { Suspense } from "react";
import Navbar from "../Components/Navbar";
import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";
import Loading from "../loading";
import { useMediaQuery } from "react-responsive";
import MobileUsers from "../Components/MobileUsers";
const ChatComponent = dynamic(() => import("../Components/ChatComponent"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});
const Chat = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return isTabletOrMobile ? (
    <MobileUsers />
  ) : (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <ChatComponent />
      </Suspense>
    </>
  );
};

export default Chat;
