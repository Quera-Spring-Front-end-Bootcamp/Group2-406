/* eslint-disable no-unused-vars */

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import girlImg from "../../../../assets/img/girl.png";
import boyImg from "../../../../assets/img/boy.png";

import { useState } from "react";

export const ProjectsBoard = () => {
 

  return (
    <main className="w-[1080px] mt-6 flex flex-col justify-start items-end">
      {/* First-Project area */}
      <section className=" w-full mr-5 flex flex-row-reverse text-lg font-dana   tracking-tight  text-end">
        <span className="mt-0.5">
          <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
        </span>
        <span className="mr-2 font-extrabold">پروژه اول</span>
      </section>
      {/* Pending Header */}
      <section className="w-full flex flex-row-reverse  justify-between  mt-7  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-10">
          <span className="flex">
            <ExpandCircleDownOutlinedIcon className="text-gray-700"></ExpandCircleDownOutlinedIcon>
          </span>
          <span className="text-xl  p-1 mr-1  bg-pink-500 rounded text-white text tracking-wider">
            Pending
          </span>
          <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
            ۲تسک
          </span>
        </article>

        <article className="w-1/2  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana text-base font-semibold tracking-tighter">
            اعضا
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            ددلاین
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            اولویت
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            توضیحات
          </span>
        </article>
      </section>

      {/* Pending Task1 */}
      <section className="w-full flex flex-row-reverse  bg-gray-100  justify-between  mt-6 py-1 font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
          <span className="font-dana mr-4 text-base font-semibold p-1">
            <SquareRoundedIcon className="text-pink-500"></SquareRoundedIcon>
          </span>
          <span className=" font-dana  font-semibold text-[13px] ">
            این یک تیتر برای این تسک است{" "}
          </span>
        </article>

        <article className="w-1/2 px-4 pr-1  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana flex text-xs mr-2">
            <span className="rounded-full bg-black w-[25px] h-[25px]  flex ">
              <img src={boyImg} alt="" />
            </span>
            <span className="rounded-full bg-purple-950 w-[25px] h-[25px]  flex mr-3">
              <img src={girlImg} alt="" />
            </span>
          </span>
          <span className="w-1/4 font-dana text-lg  tracking-tighter ">
            آبان
          </span>

          <span className="w-1/4 text-lg">
            <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
          </span>
        </article>
      </section>
      {/* Pending Task2 */}

      <section className="w-full flex flex-row-reverse py-1  bg-gray-100  justify-between  mt-6  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
          <span className="font-dana mr-4 text-base font-semibold p-1">
          <SquareRoundedIcon className="text-pink-500"></SquareRoundedIcon>
          </span>
          <span className=" font-dana  font-semibold text-[13px] ">
            این یک تیتر برای این تسک است{" "}
          </span>
        </article>

        <article className="w-1/2 px-4 pr-1  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana flex text-xs mr-2">
            <span className="rounded-full bg-black w-[25px] h-[25px]  flex ml-3">
              <img src={boyImg} alt="" />
            </span>
          </span>
          <span className="w-1/4 font-dana text-lg  tracking-tighter ">
            آبان
          </span>
          <span className="w-1/4 text-lg">
            <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
          </span>
        </article>
      </section>

      {/* In Progress */}

      <section className="w-full flex flex-row-reverse  justify-between  mt-8  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
          <span className="text-xl  p-1 mr-5  bg-orange-500 rounded  tracking-wide">
            in progress
          </span>{" "}
          <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
            ۲تسک
          </span>
        </article>

        <article className="w-1/2  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana text-base font-semibold tracking-tighter">
            اعضا
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            ددلاین
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            اولویت
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            توضیحات
          </span>
        </article>
      </section>
      {/* Done */}

      <section className="w-full flex flex-row-reverse  justify-between  mt-8  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-10">
          <span className="flex">
            <ExpandCircleDownOutlinedIcon className="text-gray-700"></ExpandCircleDownOutlinedIcon>
          </span>
          <span className=" text-xl  p-1  bg-lime-600 rounded text-white mr-1 tracking-wide">
            Done
          </span>{" "}
          <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
            ۲تسک
          </span>
        </article>

        <article className="w-1/2  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana text-base font-semibold tracking-tighter">
            اعضا
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            ددلاین
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            اولویت
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            توضیحات
          </span>
        </article>
      </section>
      {/* Done Task1 */}

      <section className="w-full flex flex-row-reverse py-1 bg-gray-100  justify-between  mt-6  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
          <span className="font-dana mr-4 text-base font-semibold p-1">
            <SquareRoundedIcon className="text-lime-600"></SquareRoundedIcon>
          </span>
          <span className=" font-dana  font-semibold text-[13px]">
            این یک تیتر برای این تسک است{" "}
          </span>
        </article>

        <article className="w-1/2 px-4 pr-1  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana flex text-xs mr-2">
            <span className="rounded-full bg-black w-[25px] h-[25px]  flex ">
              <img src={boyImg} alt="" />
            </span>
            <span className="rounded-full bg-purple-950 w-[25px] h-[25px]  flex mr-3">
              <img src={girlImg} alt="" />
            </span>
          </span>
          <span className="w-1/4 font-dana text-lg  tracking-tighter ">
            آبان
          </span>
          <span className="w-1/4 text-lg">
            <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
          </span>
        </article>
      </section>
      {/* Done Task2 */}

      <section className="w-full flex flex-row-reverse py-1  bg-gray-100  justify-between  mt-6  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-12">
          <span className="font-dana mr-4 text-base font-semibold p-1">
          <SquareRoundedIcon className="text-lime-600"></SquareRoundedIcon>
          </span>
          <span className=" font-dana  font-semibold text-[13px] ">
            این یک تیتر برای این تسک است{" "}
          </span>
        </article>

        <article className="w-1/2 px-4 pr-1  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana flex text-xs mr-2">
            <span className="rounded-full bg-black w-[25px] h-[25px]  flex ml-3">
              <img src={boyImg} alt="" />
            </span>
          </span>
          <span className="w-1/4 font-dana text-lg  tracking-tighter ">
            آبان
          </span>
          <span className="w-1/4 text-lg">
            <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
          </span>
        </article>
      </section>
      <article className="flex flex-row justify-center items-center mt-4 h-[32px] rounded-md bg-blue-400"></article>
    </main>
  );
};
