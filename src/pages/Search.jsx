import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

function Search() {
  return (
    <div className="bg-myblack flex justify-center min-h-screen text-white  pt-5">
      <h5 className="text-white z-10 font-bold">Search</h5>
      <div className="flex justify-center pt-11">
        <div className="w-[620px] border-[0.5px] rounded-3xl border-[#2D2D2D] h-screen flex bg-mygray fixed z-0 p-5">
          <div className="flex h-11 items-center p-5 w-full bg-[#0A0A0A]  rounded-2xl">
            <FaSearch className="text-gray-400 mr-2" /> {/* Search Icon */}
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[40px] bg-transparent outline-none text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
