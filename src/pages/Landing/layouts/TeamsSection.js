import React from "react";
import TeamData from "../components/TeamData";
const TeamsSection = () => {
  return (
    <div className="w-full py-8 px-16" id="teams">
      <div>
        <h2 className="text-primary text-5xl font-heading leading-none font-normal pt-8 mb-8">
          TEAMS
        </h2>
      </div>

      <TeamData />
    </div>
  );
};

export default TeamsSection;
