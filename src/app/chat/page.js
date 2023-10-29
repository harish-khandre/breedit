import React, { Suspense } from "react";
import Navbar from "../Components/Navbar";
import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";
import Loading from "../loading";
const ChatComponent = dynamic(() => import("../Components/ChatComponent"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});
const Chat = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading/>} >
      <ChatComponent />
      </Suspense>
    </>
  );
};

export default Chat;
