import { SquareMenu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./cards/ProfileCard";

const RightSidebar = () => {
  return (
    <div className={`relative w-96 z-10 h-screen flex-shrink-0 shadow-md`}>
      {/* for toggle and name */}

      <div className="flex justify-between gap-1.5 p-5">
        <p className="font-semibold md:text-lg lg:text-lg text-sm">
          What's <span className="text-red-400">Happening ?</span>
        </p>
        <div className="flex flex-row gap-2 cursor-pointer px-1">
          <img
            className="size-6 cursor-pointer rounded-full"
            src="https://media.licdn.com/dms/image/v2/D5603AQHNrIPltDVRdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724494014825?e=1746662400&v=beta&t=hKI2wUtK9epfiq-T-yKtsUUCQP7hZOTVtbqZ0wBsaUU"
            alt=""
          />
          <p className="text-sm text-slate-700 font-medium">Debarup</p>
        </div>
      </div>

      <div className="px-6 py-2 m-1">
        <ProfileCard />
      </div>
    </div>
  );
};

export default RightSidebar;
