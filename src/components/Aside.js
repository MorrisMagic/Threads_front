import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsThreads } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoIosImage, IoIosSearch } from "react-icons/io";
import { FaGithub, FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { PiPushPinSimple } from "react-icons/pi";
import { FaGripLines } from "react-icons/fa";
import { Colors } from "../Colors";
import { HiOutlineGif } from "react-icons/hi2";

function Aside() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const toggleCreatePost = () => {
    setIsCreatePostOpen((prev) => !prev);
  };

  // Close the widget if clicking outside the post creation box
  const handleClosePost = (e) => {
    if (e.target.id === "createPostOverlay") {
      setIsCreatePostOpen(false);
    }
  };

  // Function to handle post submission
  const handlePostSubmit = () => {
    // Here, you can add any logic for submitting the post, if needed
    // For now, just close the widget
    setIsCreatePostOpen(false);
  };

  return (
    <div className="relative">
      <div className="bg-myblack h-screen flex flex-col justify-between items-center w-[80px] py-4 fixed">
        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <BsThreads color="#FFFFFF" size={35} />
          </NavLink>
        </div>

        <div className="flex flex-col gap-6">
          <NavLink
            to="/"
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
          >
            {({ isActive }) => (
              <GoHome color={isActive ? "#FFFFFF" : Colors.myGray} size={27} />
            )}
          </NavLink>
          <NavLink
            to="/search"
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
          >
            {({ isActive }) => (
              <IoIosSearch
                color={isActive ? "#FFFFFF" : Colors.myGray}
                size={32}
              />
            )}
          </NavLink>

          {/* Create Post Button */}
          <button
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
            onClick={toggleCreatePost}
          >
            <FaPlus
              color={isCreatePostOpen ? "#FFFFFF" : Colors.myGray}
              size={28}
            />
          </button>

          <NavLink
            to="/activity"
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
          >
            {({ isActive }) => (
              <FaRegHeart
                color={isActive ? "#FFFFFF" : Colors.myGray}
                size={25}
              />
            )}
          </NavLink>
          <NavLink
            to="/profile"
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
          >
            {({ isActive }) => (
              <IoPersonOutline
                color={isActive ? "#FFFFFF" : Colors.myGray}
                size={25}
              />
            )}
          </NavLink>
        </div>

        <div className="flex flex-col gap-5">
          <NavLink
            to="/pins"
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
          >
            {({ isActive }) => (
              <PiPushPinSimple
                color={isActive ? "#FFFFFF" : Colors.myGray}
                size={28}
              />
            )}
          </NavLink>
          <NavLink
            to="/lines"
            className="no-underline flex justify-center items-center h-12 w-12 rounded-xl transition-all duration-300 hover:bg-[#171717]"
          >
            {({ isActive }) => (
              <FaGripLines
                color={isActive ? "#FFFFFF" : Colors.myGray}
                size={28}
              />
            )}
          </NavLink>
        </div>
      </div>

      {/* Post Creation Widget */}
      {isCreatePostOpen && (
        <div
          id="createPostOverlay"
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClosePost}
        >
          <div className="bg-[#181818] rounded-2xl border border-[#2D2D2D] p-4 w-[600px] text-white">
            <div className="flex flex-row items-center mb-2">
              <img
                src="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"
                width={43}
                height={43}
                className="rounded-full object-cover mr-3"
                alt="User"
              />
              <h2 className="text-xl font-semibold">morris</h2>
            </div>
            <textarea
              className="w-full p-2 bg-[#181818] text-white rounded-md outline-none resize-none mb-3"
              rows={3} // Reduced rows for shorter height
              placeholder="What's new?"
            ></textarea>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button className="flex items-center text-gray-400 hover:text-red-600 transition">
                  <IoIosImage size={24} />
                </button>
                <button className="flex items-center text-gray-400 hover:text-red-600 transition">
                  <HiOutlineGif size={24} />
                </button>
              </div>
              <button
                className="px-4 py-2 bg-mygray border-[0.1px] border-gray-500 rounded-md hover:bg-[#171717] transition"
                onClick={handlePostSubmit} // Add the onClick handler here
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Aside;
