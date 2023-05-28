/* eslint-disable react/prop-types */

import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import girlImg from "../../../../assets/img/girl.png";
import boyImg from "../../../../assets/img/boy.png";
import { useState } from "react";
import { Task } from "./Task";

export const Pending = ({
  Icon,
  ProcessName,
  TaskNumber,
  Member,
  Deadline,
  Priority,
  Description,
}) => {
  const [showTask, setShowTask] = useState(false);

  function taskHandler() {
    setShowTask(true);
  }
  return (
    <>
      <section className="w-full flex flex-row-reverse  justify-between  mt-7  font-dana">
        <article className="w-1/2 flex  items-center  flex-row-reverse  mr-10">
          <span className="flex" onClick={taskHandler}>
            {Icon}
          </span>
          <span className="text-xl  p-1 mr-1  bg-pink-500 rounded text-white text tracking-wider">
            {ProcessName}
          </span>
          <span className="mr-3 font-dana  text-base font-semibold tracking-tighter">
            <span className="" dir="rtl">
              {TaskNumber}
            </span>
          </span>
        </article>

        <article className="w-1/2  flex mr-5 flex-row-reverse items-center ">
          <span className="w-1/4 font-dana text-base font-semibold tracking-tighter">
            {Member}
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            {Deadline}
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            {Priority}
          </span>
          <span className="w-1/4 font-dana  text-base font-semibold tracking-tighter">
            {Description}
          </span>
        </article>
      </section>
      <span className="w-full">
        {" "}
        {showTask && (
          <Task
            ColorIcon={
              <SquareRoundedIcon className="text-pink-500"></SquareRoundedIcon>
            }
            taskText="این یک تیتر برای این تسک است."
            memberBoy={<img src={boyImg} alt="" />}
            memberGirl={<img src={girlImg} alt="" />}
            taskTime="۶ آبان "
            prioritySign={
              <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
            }
            descIcon={
              <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
            }
          />
        )}
      </span>
      <span className="w-full">
        {showTask && (
          <Task
            imageExist1={true}
            imageExist2={false}
            ColorIcon={
              <SquareRoundedIcon className="text-pink-500"></SquareRoundedIcon>
            }
            taskText="این یک تیتر برای این تسک است."
            memberBoy={<img src={boyImg} alt="" />}
            taskTime="۶ آبان "
            prioritySign={
              <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
            }
            descIcon={
              <FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>
            }
          />
        )}
      </span>
    </>
  );
};
