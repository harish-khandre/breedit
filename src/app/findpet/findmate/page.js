"use client";

import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";
const ChatContainer = dynamic(
  () => import("../../Components/Chat/ChatContainer"),
  {
    loading: () => <LoadingOutlined className="animate-spin h-5 w-5" />,
  }
);

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user", {
        params: { userId },
        next: {
          revalidate: 10,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getGenderedUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/gendered-users",
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

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:3000/api/addmatch", {
        userId,
        matchedUserId,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const matchedUserIds = user?.matches
    .map(({ user_id }) => user_id)
    .concat(userId);

  const filteredGenderedUsers = genderedUsers?.filter((genderedUser) => {
    return (
      genderedUser &&
      genderedUser.user_id &&
      !matchedUserIds.includes(genderedUser.user_id)
    );
  });

  return (
    <>
      {user && (
        <div className="dashboard overflow-hidden ">
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {filteredGenderedUsers?.map(
                (genderedUser) =>
                  genderedUser && genderedUser.user_id ? ( // Check if genderedUser and user_id are present
                    <TinderCard
                      className="swipe"
                      key={genderedUser.user_id}
                      onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                      onCardLeftScreen={() =>
                        outOfFrame(genderedUser.first_name)
                      }
                    >
                      <div
                        style={{
                          backgroundImage: "url(" + genderedUser.url + ")",
                        }}
                        className="card"
                      >
                        <h3 className="text-end font-[Oswald] font-thin tracking-wide text-lg text-[#f7ebdb] p-4 drop-shadow-2xl antialiased ">
                          {genderedUser.first_name}
                        </h3>
                      </div>
                    </TinderCard>
                  ) : null // Return null if genderedUser or user_id is missing
              )}

              {}
              {/* <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
