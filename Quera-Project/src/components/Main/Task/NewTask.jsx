/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { PriorityOptions } from "./TagTask/PriorityOptions";
import { useState } from "react";
import {Tag} from "./TagTask/Tag"

export const NewTask = ({ show, setShow, id, selectTag}) => {
  const [showTask, setShowTask] = useState(false);
  const [showTag, setShowTag] = useState(false);


  return (
    <div
      className="w-screen h-screen fixed flex z-40 justify-center items-center"
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <section className="w-[1166px] h-[576px] shadow-newTaskShadow rounded-3xl bg-white flex flex-col p-10">
        {/* task name & exit */}
        <article className="flex flex-row-reverse w-full h-[80px] justify-between">
          <div className="flex flex-row-reverse justify-end">
            <span>
              <SquareRoundedIcon className="text-gray-300 !text-xl" />
            </span>
            <p className="font-dana text-2xl font-medium mr-3">عنوان تسک</p>
          </div>
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            <CloseOutlinedIcon className="text-gray-400 cursor-pointer"></CloseOutlinedIcon>
          </span>
        </article>

        {/* detected project and user */}
        <article className="font-dana flex flex-row-reverse justify-start items-center h-[35px]">
          <p>در</p>
          <span className="mx-2 w-[158px] h-[33px] border-1 border-gray-300 rounded-md flex justify-end items-center pr-1 text-base font-normal text-gray-800">
            پروژه اول
          </span>
          <p>برای</p>
          <span className="border-dashed border-1 border-gray-400 h-[33px] w-[33px] rounded-full mr-2 flex justify-center items-center">
            <PersonAddAltOutlinedIcon className="text-neutral-400 !text-xl"></PersonAddAltOutlinedIcon>
          </span>
        </article>

        {/* description of task */}
        <article className="w-full h-auto mt-11">
          <form className="w-full">
            <label className="w-full flex flex-wrap">
              <textarea
                type="text"
                name="descriptionTask"
                className="w-full h-[200px] border-1 border-gray-300 rounded-xl font-dana text-end px-4 outline-none break-words pt-4"
                placeholder="توضیحاتی برای این تسک بنویسید"
                wrap="normal"
              ></textarea>
            </label>
          </form>
        </article>

        {/* upload file */}
        <article className="w-full h-[80px] flex flex-row-reverse justify-start items-center font-dana">
          <p>افزودن پیوست</p>
          <button className="mr-2 border-2 border-teal-500 rounded flex flex-row-reverse w-[115px] h-[33px] justify-center items-center">
            <span>
              <InsertLinkOutlinedIcon className="text-teal-600 ml-1"></InsertLinkOutlinedIcon>
            </span>
            <p>آپلود فایل</p>
          </button>
        </article>

        {/* other work on task & create task */}
        <article className="w-full flex flex-row-reverse justify-between items-center">
          <div className="flex flex-row-reverse items-center justify-start">
            <span
              className="border-dashed border-1 border-gray-400 h-[50px] w-[50px] rounded-full mr-2 flex justify-center items-center cursor-pointer"
              onClick={() => {
                setShowTask(!showTask);
              }}
            >
              <FlagOutlinedIcon className="text-neutral-400 !text-3xl"></FlagOutlinedIcon>
            </span>{" "}
            {showTask && <PriorityOptions  id={id} selectTag={selectTag} showTag={showTag} setShowTag={setShowTag} />}
           
           
           
            <span className="border-dashed border-1 border-gray-400 h-[50px] w-[50px] rounded-full mx-6 flex justify-center items-center cursor-pointer">
              <CalendarMonthOutlinedIcon className="text-neutral-400 !text-3xl"></CalendarMonthOutlinedIcon>
            </span>
          
          
            <span className="border-dashed border-1 border-gray-400 h-[50px] w-[50px] rounded-full ml-6 flex justify-center items-center cursor-pointer">
              <LocalOfferOutlinedIcon className="text-neutral-400 !text-3xl"  onClick={() => {
              setShowTag(!showTag);
            }}></LocalOfferOutlinedIcon>
            </span>
            {showTag && (<Tag  id={id} selectTag={selectTag} showTag={showTag} setShowTag={setShowTag} />)}



            <span className="h-[60px] w-[50px] cursor-pointer flex items-end relative">
              <span className="bg-teal-500 w-[26px] h-[26px] rounded-full flex justify-center items-center right-0 top-0 absolute">
                2
              </span>
              <VisibilityOutlinedIcon className="text-neutral-400 !text-5xl"></VisibilityOutlinedIcon>
            </span>
          </div>
          <button
            className="text-white bg-footBtn font-dana font-medium text-xs w-[125px] h-[32px] rounded"
            onClick={() => {
              setShow(!show);
            }}
          >
            ساختن تسک
          </button>
        </article>
      </section>
    </div>
  );
}

