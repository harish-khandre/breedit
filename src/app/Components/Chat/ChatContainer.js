"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import Navbar from "../Navbar"
import { Suspense } from "react";
import Loading from "@/app/loading";
import { LoadingOutlined } from "@ant-design/icons";
const ChatDisplay = dynamic(() => import("./ChatDisplay"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});
const ChatHeader = dynamic(() => import("./ChatHeader"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});
const MatchesDisplay = dynamic(() => import("./MatchesDisplay"), {
  loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
});

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <>
      <Navbar />
      <div className="chat-container mt-14">
        <ChatHeader user={user} />

        <div className="bg-[#f7ebdb]">
          <button className="option " onClick={() => setClickedUser(null)}>
            Matches
          </button>
          <button className="option" disabled={!clickedUser}>
            Chat
          </button>
        </div>

        {!clickedUser && (
          <Suspense fallback={<Loading />}>
            <MatchesDisplay
              matches={user.matches}
              setClickedUser={setClickedUser}
            />
          </Suspense>
        )}

        {clickedUser && (
          <Suspense fallback={<Loading />}>
            <ChatDisplay user={user} clickedUser={clickedUser} />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default ChatContainer;
