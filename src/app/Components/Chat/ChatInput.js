"use client";

import { useState } from "react";
import axios from "axios";

const ChatInput = ({
  user,
  clickedUser,
  getUsersMessages,
  getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState("");
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;

  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      from_userId: userId,
      to_userId: clickedUserId,
      message: textArea,
    };

    try {
      await axios.post("/api/messages", {
        message,
      });
      getUsersMessages();
      getClickedUsersMessages();
      setTextArea("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-input flex justify-evenly items-center border-[#505f2f] border-t-2  bg-[#f7ebdb]">
      <textarea
        value={textArea}
        className="border-[#505f2f] mt-3 border-2 rounded-3xl w-60 m-2 pt-2 pl-4 flex-grow items-center"
        onChange={(e) => setTextArea(e.target.value)}
      />
      <div className="flex justify-end items-center bg-[#f7ebdb]">
        <button
          className="button tracking-wide text-center mt-3 m-2 justify-self-center"
          onClick={addMessage}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
