"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUserIds = matches?.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

  const getMatches = async () => {
    try {
      const response = await axios.get("https://www.breedit.co.in/api/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
        next: {
          revalidate: 10,
        },
        // original one = params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  });

  if (matchedProfiles && matchedProfiles.length > 0) {
    const filteredMatchedProfiles = matchedProfiles.filter((matchedProfile) => {
      return matchedProfile.matches.some(
        (profile) => profile.user_id === userId
      );
    });

    return (
      <div className="matches-display">
        {filteredMatchedProfiles?.map((match, _index) => (
          <div
            key={_index}
            className="match-card"
            onClick={() => setClickedUser(match)}
          >
            <div className="img-container">
              <Image
                height={100}
                width={100}
                src={match?.url}
                alt={match?.pet_name + " profile"}
              />
            </div>
            <h3>{match?.pet_name}</h3>
          </div>
        ))}
      </div>
    );
  } else {
    // Return an empty array if matchedProfiles is undefined or empty
    return;
  }
};

export default MatchesDisplay;
