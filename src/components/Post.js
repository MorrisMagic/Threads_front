import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

function Post() {
  return (
    <div className="border-b-[0.5px] border-[#383939]">
      <div className="flex gap-3 pl-5 flex-col">
        <div className="flex gap-3 items-center p-3">
          <div className="mt-[-25px]">
            <img
              src="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"
              width={42}
              height={42}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-semibold">youssef</p>
              <p>hello everyone</p>
            </div>
            <div className="flex items-center gap-5 mt-4 justify-start">
              <div className="flex items-center gap-2">
                <FaRegHeart color={"#C9C9C9"} />
                <p className="text-[12px]">3</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegComment color={"#C9C9C9"} />
                <p className="text-[12px]">3</p>
              </div>
              <div className="flex items-center gap-1">
                <BiRepost size={20} color={"#C9C9C9"} />
              </div>
              <div className="flex items-center">
                <LuSend color={"#C9C9C9"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
