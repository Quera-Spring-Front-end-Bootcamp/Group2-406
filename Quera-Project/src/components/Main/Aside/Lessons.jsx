/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useState } from 'react';
import { Projects } from './Projects';
import { Dropdown } from './Dropdown/Dropdown';
import { ManageProjects } from './ManageProject';

export function Lessons({id,Mylesson,setMylesson,lessonName,showLessons, squareColor,projectname,setSharepr,setShareW}) {
    

    const [projects, setprojects] = useState(projectname);
    const [showInner,setInner]=useState(false);
    const [show,setShow]=useState(false);

    const Removehandler=()=>{
        setMylesson(Mylesson.filter((item)=>{
            return id!=item.id
        }))   
    }
    const RemoveProject=(id)=>{
        setprojects(projects.filter((item)=>{
            return id!=item.id
        }))
    }
    const Addhandle=(id,value,setvalue)=>{
      setprojects(projects.map((item)=>{
          return {id:item.id, nameProject: id== item.id ? value:item.nameProject }
      }))
      setvalue("")
    }
    
    return (
        <div style={{display:showLessons ? "block":"none"}}>
            {/* workSpace */}
            <div className="flex flex-row-reverse justify-start mt-4 group/lesson">
                <span>{squareColor}</span>
                <span onClick={()=>{setInner(!showInner)}} className="font-dana mr-2 font-medium text-base mt-1 w-[260px] text-end cursor-default">{lessonName}</span>
                <span className='relative'><span className=" text-start opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon tabIndex="0" onBlur={()=>{setShow(false)}} onClick={()=>{setShow(!show)}} className="!text-base focus:outline-none text-gray-600"></MoreHorizRoundedIcon>}</span>
            <Dropdown setShareW={setShareW} dropdown={show} Removehandler={Removehandler} setInner={setInner} setShow={setShow} projects={projects} setprojects={setprojects} /></span>
            </div>


            {/* projects */}
            <div className="flex flex-col mr-7">
                {projects.map((item) => {
                    return(item.nameProject != "" ?<Projects setSharepr={setSharepr} key={item.id} RemoveProject={RemoveProject} showInner={showInner} id={item.id} projectName={item.nameProject} />
                    :<ManageProjects Addhandle={Addhandle} id={item.id} RemoveProject={RemoveProject}   key={item.id} showInner={showInner} />
                    );
                })}
            </div>
        </div>
    );
}