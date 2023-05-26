/* eslint-disable no-unused-vars */

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import girlImg from "../../../../assets/img/girl.png";
import boyImg from "../../../../assets/img/boy.png";
import { Pending } from "../../ProjectsBoard/Pending";
import { InProgress } from "../../ProjectsBoard/InProgress";
import { Done } from "../../ProjectsBoard/Done";
import { Task } from "../../ProjectsBoard/Task";
import { useState } from "react";
import React from "react";

const setHandle = () => {
  alert("Hiiiiiiiiiiiiiiiiiiiii");
};



export const ProjectsBoard = () => {
// const [tasks,setTasks]=useState(Task)
   
  return (
    <main className="w-[1080px] mt-6 flex flex-col justify-start items-end">
      {/* First-Project area */}
      <section className=" w-full mr-5 flex flex-row-reverse text-lg font-dana   tracking-tight  text-end">
        <span className="mt-0.5" onClick={setHandle}>
          <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
        </span>
        <span className="mr-2 font-extrabold">پروژه اول</span>
      </section>
      {/* Pending */}

      <Pending
        Icon={
          <ExpandCircleDownOutlinedIcon className="text-gray-700"></ExpandCircleDownOutlinedIcon>
        }
        ProcessName="Pending"
        TaskNumber="۲ تسک"
        Member="اعضا"
        Deadline="ددلاین"
        Priority="اولویت"
        Description="توضیحات"
      />
     
      {/* Pending Task1 */}


      <Task
        ColorIcon={
          <SquareRoundedIcon className="text-pink-500"></SquareRoundedIcon>
        }
        taskText="این یک تیتر برای این تسک است."
        memberBoy={<img src={boyImg} alt="" />}
        memberGirl={<img src={girlImg} alt="" /> }
        taskTime="۶ آبان "  
        prioritySign={<OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>}
        descIcon={<FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>}
      />
                  
      {/* Pending Task2 */}

      <Task
        ColorIcon={
          <SquareRoundedIcon className="text-pink-500"></SquareRoundedIcon>
        }
        taskText="این یک تیتر برای این تسک است."
        memberBoy={<img src={boyImg} alt="" />}
        memberGirl={<img src={girlImg} alt="" /> }
        taskTime="۶ آبان "  
        prioritySign={<OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>}
        descIcon={<FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>}
      />

      {/* In Progress */}
      <InProgress
        ProcessName="InProgress"
        TaskNumber="۲ تسک"
        Member="اعضا"
        Deadline="ددلاین"
        Priority="اولویت"
        Description="توضیحات"
      />

      {/* Done */}

      <Done
        Icon={
          <ExpandCircleDownOutlinedIcon className="text-gray-700"></ExpandCircleDownOutlinedIcon>
        }
        ProcessName="Done"
        TaskNumber="۲ تسک"
        Member="اعضا"
        Deadline="ددلاین"
        Priority="اولویت"
        Description="توضیحات"
      />
      {/* Done Task1 */}

      <Task
        ColorIcon={
          <SquareRoundedIcon className="text-lime-600"></SquareRoundedIcon>
        }
        taskText="این یک تیتر برای این تسک است."
        memberBoy={<img src={boyImg} alt="" />}
        memberGirl={<img className=" bg-transparent" src={girlImg} alt="" /> }
        taskTime="۶ آبان "  
        prioritySign={<OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>}
        descIcon={<FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>}
      />
      {/* Done Task2 */}

      <Task
        ColorIcon={
          <SquareRoundedIcon className="text-lime-600"></SquareRoundedIcon>
        }
        taskText="این یک تیتر برای این تسک است."
        memberBoy={<img src={boyImg} alt="" />}
        memberGirl={<img src={girlImg} alt="" /> }
        taskTime="۶ آبان "  
        prioritySign={<OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>}
        descIcon={<FormatAlignRightIcon className="text-stone-400"></FormatAlignRightIcon>}
      />
    </main>
  );
};
