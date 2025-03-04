import { Camera, SquarePen, SquarePlay } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const StartPostCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-2 py-3">
      <div className="bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center p-3 m-1 gap-2">
          {" "}
          {/* Added `flex` here */}
          <img
            className="size-12 cursor-pointer rounded-full"
            src="https://media.licdn.com/dms/image/v2/D5603AQHNrIPltDVRdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724494014825?e=1746662400&v=beta&t=hKI2wUtK9epfiq-T-yKtsUUCQP7hZOTVtbqZ0wBsaUU"
            alt=""
          />
          <span
            className="bg-gray-100 border border-slate-800 py-3 px-52 rounded-full cursor-pointer"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <p className="text-sm text-gray-600">Start Posting today</p>
          </span>
        </div>

        <div className="flex py-3 gap-24 px-5 m-1 justify-between">
          <div
            className="flex items-center cursor-pointer gap-1"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <SquarePlay className="text-green-600" />
            <p className="text-sm">Video</p>
          </div>

          <div
            className="flex items-center cursor-pointer gap-1"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <Camera className="text-blue-600" />
            <p className="text-sm">Photo</p>
          </div>

          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <SquarePen className="text-red-500" />
            <p className="text-sm">Write</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPostCard;
