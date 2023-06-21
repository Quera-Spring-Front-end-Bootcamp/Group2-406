/* eslint-disable no-unused-vars */
import { useState } from "react";


export function ProjectInput() {
    const [projectVal, setProjectVal] = useState("پروژه اول");
    const [workspaceVal, setWorkspaceVal] = useState("مدیریت پروژه");

  return (
    <>
        <select className="mx-2 w-[158px] h-[33px] border-1 border-gray-300 rounded-md  pr-1 text-base font-normal text-gray-800 font-dana" name="project-select" dir="rtl">
            <optgroup label={workspaceVal}>
                <option value={projectVal} onClick={()=>{setProjectVal(projectVal), setWorkspaceVal(workspaceVal)}}>{projectVal.toString()}</option>
            </optgroup>
        </select>
    
    </>
  )
}
