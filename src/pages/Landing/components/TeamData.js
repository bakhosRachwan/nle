import React, { useState, useEffect } from "react";
import { config } from "../../../config";

const TeamData = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/teams`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTeamList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="inline-flex flex-wrap gap-x-32 gap-y-16 w-full">
        {teamList.map((team) => (
          <div
            className="h-48 w-5/12 flex-grow bg-cover bg-center"
            key={team.id}
            style={{
              backgroundImage: `url(${config.apiBaseUrl}/${team.bgPic})`,
            }}
          ></div>
        ))}
      </div>
    );
  }
};

export default TeamData;
