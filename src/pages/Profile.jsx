import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

function Profile() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("threads");

  return (
    <div className="bg-myblack flex justify-center min-h-screen text-white  pt-5">
      <h5 className="text-white z-10 font-bold">Profile</h5>
      <div className="flex justify-center pt-11">
        <div className="w-[620px] border-[0.5px] rounded-3xl border-[#2D2D2D] h-screen flex flex-col bg-mygray fixed z-0 p-5">
          {/* Profile Section */}
          <div className="flex items-center justify-between flex-row-reverse gap-4 mb-4">
            <div className="flex-shrink-0">
              <img
                src="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"
                alt="Profile"
                className="w-[80px] h-[80px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold">John Doe</h1> {/* Name */}
              <p className="text-sm text-gray-400">@johndoe</p> {/* Username */}
            </div>
          </div>

          {/* Followers Section */}
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-semibold">11</span> Followers
            </p>
          </div>

          {/* Edit Profile Button */}
          <button className="bg-[#181818] border-[0.5px] border-[#2D2D2D] text-white px-4 py-1 rounded-2xl hover:bg-blue-600 transition mb-6">
            Edit Profile
          </button>

          {/* Tabs for Threads, Replies, Reposts */}
          <div className="flex flex-col mb-4">
            <div className="flex justify-around mb-2">
              <div
                className={`cursor-pointer text-center ${
                  activeTab === "threads" ? "font-semibold" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("threads")}
              >
                <p>Threads</p>
                {activeTab === "threads" && (
                  <div className=" bg-white  " />
                )}{" "}
                {/* Increased height */}
              </div>
              <div
                className={`cursor-pointer text-center ${
                  activeTab === "replies" ? "font-semibold" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("replies")}
              >
                <p>Replies</p>
                {activeTab === "replies" && <div className=" bg-white " />}{" "}
                {/* Increased height */}
              </div>
              <div
                className={`cursor-pointer text-center ${
                  activeTab === "reposts" ? "font-semibold" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("reposts")}
              >
                <p>Reposts</p>
                {activeTab === "reposts" && <div className=" bg-white " />}{" "}
                {/* Increased height */}
              </div>
            </div>

            {/* Underline Line */}
            <div className="h-[1px] bg-white opacity-20" />
          </div>

          {/* Content based on active tab */}
          <div className="mt-4">
            {activeTab === "threads" && <p>No threads to display.</p>}
            {activeTab === "replies" && <p>No replies to display.</p>}
            {activeTab === "reposts" && <p>No reposts to display.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
