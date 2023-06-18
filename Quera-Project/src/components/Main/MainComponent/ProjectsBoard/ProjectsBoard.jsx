/* eslint-disable no-unused-vars */

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import { Pending } from "./Pending";
import { InProgress } from "./InProgress";
import { Done } from "./Done";
import { useState } from "react";
import React from "react";

export const ProjectsBoard = () => {
  const [showProcess, setShowProcess] = useState(true);


  return (
    <main className="w-[1080px] mt-6 flex flex-col justify-start items-end">
      {/* First-Project area */}
      <section className=" w-full mr-5 flex flex-row-reverse text-lg font-dana   tracking-tight  text-end">
        <span className="mt-0.5" >
          <ExpandCircleDownOutlinedIcon onClick={()=>{setShowProcess(!showProcess)}}></ExpandCircleDownOutlinedIcon>
        </span>
        <span className="mr-2 font-extrabold">پروژه اول</span>
      </section>
      {/* Pending */}
      <span className="w-full" >
        {showProcess && (
          <Pending
            Icon={
              <ExpandCircleDownOutlinedIcon  className="text-gray-700"></ExpandCircleDownOutlinedIcon>
            }
            ProcessName="Pending"
            TaskNumber="۲ تسک"
            Member="اعضا"
            Deadline="ددلاین"
            Priority="اولویت"
            Description="توضیحات"
          />
        )}
      </span>
      {/* In Progress */}
      <span className="w-full">
        {showProcess && (
          <InProgress
            ProcessName="InProgress"
            TaskNumber="۲ تسک"
            Member="اعضا"
            Deadline="ددلاین"
            Priority="اولویت"
            Description="توضیحات"
          />
        )}
      </span>
      {/* Done */}
      <span className="w-full">
        {showProcess && (
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
        )}
      </span>
    </main>
  );
};
