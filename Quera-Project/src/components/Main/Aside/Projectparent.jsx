/* eslint-disable react/prop-types */

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useState } from 'react';
import { Projects } from './Projects';
import { Dropdown } from '../../Dropdown/Dropdown';
import { NewProject } from './newProject';


export const Less=({lessonName, squareColor,projectname})=> {
    

    const [projects, setprojects] = useState(projectname);
    const [show,setShow]=useState(false)
    const [showInner,setInner]= useState(false)

    return (
        <div>
            {/* workSpace */}
            <div className="flex flex-row-reverse justify-start mt-4 group/lesson">
                <span>{squareColor}</span>
                <span onClick={()=>{setInner(!showInner)}} className="font-dana mr-2 font-medium text-base mt-1 w-[260px] text-end cursor-default">{lessonName}</span>
                <span className='relative'>
                    <span className=" text-start opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon onClick={()=>{setShow(!show)}} className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span> 
                    <Dropdown dropdown={show} setInner={setInner} setShow={setShow} setprojects={setprojects} projects={projects}/>
                </span>
            </div>

            {/* projects */}
            <div className="flex flex-col mr-7">
                {projects.map((item) => {
                    return(item.nameProject!= ""?<Projects showInner={showInner} key={item.id} projectName={item.nameProject} />:<NewProject  showInner={showInner} key={item.id} />
                    );
                })}
            </div>
        </div>
    );
}