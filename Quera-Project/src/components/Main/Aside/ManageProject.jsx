import { useState } from "react";

export const ManageProjects = ({projectName,showInner,value,setvalue,id,Addhandle}) => {
    
    
    return(
        <div style={{visibility:showInner ? "visible":"hidden",height:showInner ? "33px":"0",marginTop:showInner ? "16px":"0"}} className="flex px-2 transition-height flex-row-reverse justify-between items-center bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <input placeholder="نام پروژه را وارد کنید" dir="rtl" className=" px-1 text-sm font-medium outline-none h-[22px] rounded  bg-asideProject" type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}} />
            <span className=" hover:scale-105 transition-transform cursor-pointer font-dana  text-sm" onClick={()=>{Addhandle(id)}}>تایید</span>
            
        </div>
    );
}