import React, { useState } from "react";
import { HiOutlineGif } from "react-icons/hi2";
import { IoIosImage } from "react-icons/io";

function Home() {
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
    <div className="bg-myblack flex justify-center min-h-screen text-white">
      {/* Title Section */}
      <div className="w-[620px] text-center py-4 fixed z-20">
        <h1 className="text-lg font-semibold">Home</h1>
      </div>

      {/* Background Border Container */}
      <div className="w-[620px] border-[0.5px] rounded-3xl border-[#2D2D2D] h-screen bg-mygray fixed z-0 mt-[64px]"></div>

      {/* Posts positioned inside the border */}
      <div className="w-[620px] z-10 mt-[64px]">
        <div>
          {/* Post Input Section */}
          <div className="flex items-center p-4 gap-3 border-b-[0.5px] border-[#383939]">
            <img
              src="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"
              width={43}
              height={43}
              className="rounded-full object-cover ml-[16px]"
            />
            <input
              type="text"
              placeholder="What's new?"
              className="flex-1 p-2 bg-transparent rounded-md outline-none text-white"
            />
            <button onClick={toggleCreatePost} className="bg-[#181818]  border-[0.5px] border-[#2D2D2D] text-white px-5 py-[5.5px] rounded-md">
              Post
            </button>
          </div>
        </div>
      </div>
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

export default Home;
