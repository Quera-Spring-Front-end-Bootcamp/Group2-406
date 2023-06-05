/* eslint-disable react/prop-types */
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import { NewTag } from "./NewTag";
export const Tag = ({ showTag, setShowTag, id, selectTag }) => {
  const input = useRef();

  const[showNewTag,setShowNewTag]=useState(false);

  return (
    <div className="relative  flex flex-col items-center z-20" dir="rtl">
      <span className="absolute ">
        <ul
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          style={showTag ? { display: "flex" } : { display: "none" }}
          className="w-[175px] h-[189px] transition-all text-xs  flex flex-col   rounded-lg p-2 bg-white drop-shadow-lg   "
        >
          <li className="flex flex-row border-2  m-1 bg-slate-200 p-1"     onClick={() => {
                setShowNewTag(!showNewTag);
              }}             
>
            <SearchIcon className=" text-[#b3b7b7] ml-2 " />
            <input 
              className="w-full outline-none relative font-dana  text-[#b3b7b7] bg-slate-200"
              ref={input}
              onBlur={() => {
                setShowTag(false);
              }}
              onClick={() => {
                input.current.focus(), setShowTag(true);
              }}
              type="text"
              placeholder=" جستجو یا ساختن تگ"
            />          
{showNewTag && (<NewTag showTag={showTag} setShowTag={setShowTag}/>)}
          </li>
          <span className="flex  text-center w-full justify-between p-1">
            <li
              onClick={() => {
                setShowTag(false);
                selectTag(id, "درس");
              }}
              className=" mx-2 rounded-md text-center flex justify-center  py-auto mb-[12px] w-[44px] h-[31px] bg-[#EBC8C8]  cursor-pointer hover:opacity-70"
            >
              <p className="flex justify-center items-center"> درس</p>
            </li>
            {
              <MoreHorizRoundedIcon className=" text-gray-300"></MoreHorizRoundedIcon>
            }
          </span>

          <span className="flex  text-center w-full justify-between p-1">
            <li
              onClick={() => {
                setShowTag(false);
                selectTag(id, "کار");
              }}
              className=" mx-2 rounded-md text-center flex justify-center  py-auto mb-[12px] w-[31px] h-[31px] bg-[#C3B7F2]  cursor-pointer hover:opacity-70"
            >
              <p className="flex justify-center items-center"> کار</p>
            </li>
            {
              <MoreHorizRoundedIcon className=" text-gray-300"></MoreHorizRoundedIcon>
            }
          </span>

          <span className="flex  text-center w-full justify-between  p-1">
            <li
              onClick={() => {
                setShowTag(false);
                selectTag(id, "پروژه");
              }}
              className=" mx-2 rounded-md text-center flex justify-center  py-auto mb-[12px] w-[44px] h-[31px] bg-[#7FFAFA]  cursor-pointer hover:opacity-70"
            >
              <p className="flex justify-center items-center"> پروژه</p>
            </li>

            {
              <MoreHorizRoundedIcon className=" text-gray-300"></MoreHorizRoundedIcon>
            }
          </span>
        </ul>
      </span>
    </div>
  );
};
