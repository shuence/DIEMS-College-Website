import React from "react";
import skills from "../../assests/images/skillAcademy.png";

const SkillPartnership = () => {
  return (
    <div className="relative py-4 m-6 bg-gray-300 rounded overflow-hidden shadow-md">
      <div className="flex flex-col gap-8 py-0 px-8">
        <h1 className="text-3xl font-bold text-center text-black">
          Skill Development Partnerships
        </h1>
        <div className="flex gap-8">
          <div className="flex p-4 gap-4 flex-1 justify-space-between rounded overflow-hidden shadow-md">
            <img src={skills} alt="Images" className="mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPartnership;
