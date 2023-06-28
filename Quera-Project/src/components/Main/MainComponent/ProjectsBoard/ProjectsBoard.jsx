/* eslint-disable no-unused-vars */


import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { BoardList } from "./BoardList";
import { useState } from "react";
import React from "react";

export const ProjectsBoard = ({boards}) => {
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
        {showProcess && 
          boards.map((item)=>{
            return (
              <BoardList
              key={item._id}
           
            
           
            ProcessName={item.name}
            color={item.color}
            tasks={item.tasks}
          />
            )
          })}
          
        
      </span>
      
      
      
    </main>
  );
};
