/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { ProjectDropdown } from './ProjectDropdown/ProjectDropdown';
import { useState } from 'react';

export const Projects = ({projectName,showInner,RemoveProject,id}) => {
    const [show,setshow]=useState(false)
    
    return(
        <div style={{visibility:showInner ? "visible":"hidden",height:showInner ? "33px":"0",marginTop:showInner ? "16px":"0"}} className="flex  transition-height flex-row-reverse justify-between items-end bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <span className="font-dana font-medium mt-4 cursor-default">{projectName}</span>
            <span className='relative'><span className="mt-4 opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon onClick={()=>{setshow(!show)}} className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
            <ProjectDropdown show={show} id={id} RemoveProject={RemoveProject}/>
            </span>
        </div>
    );
}