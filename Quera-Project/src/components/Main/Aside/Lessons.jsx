/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useState } from 'react';
import { Projects } from './Projects';
import { Dropdown } from './Dropdown/Dropdown';
import { ManageProjects } from './ManageProject';
import axios from 'axios';
import { baseurl } from '../../../assets/baseUrl';
import { useAuth } from '../../ContextApi/AuthContext';
import { ShareWorkspace } from './ShareWorkspace/ShareWorkspace';

export function Lessons({id,setBoards,Mylesson,setMylesson,lessonName,showLessons, squareColor,setSharepr,projectname,setNameProjects,members}) {
    

    const [showShareWorkspace,setShareWorkspace] = useState(false);
    const [showInner,setInner]=useState(false);
    const [show,setShow]=useState(false);
    const {token}=useAuth()
    const Removehandler=async()=>{
        axios.delete(baseurl+"/workspace/"+id,{
headers:{"x-auth-token":token}
        }).then((response)=>{
             setMylesson(Mylesson.filter((item)=>{
            return id!=item.id
        }))   
        })
        .catch((error)=>{
            console.log(error)
        })
       
    }
    const RemoveProject=(id)=>{
        axios.delete(baseurl +"/projects/"+id,
          {headers:{"x-auth-token":token}})
          .then((response)=>{
            setMylesson(Mylesson.map((item)=>{
                return {...item,projects:item.projects.filter((p)=>{
                    return id != p.id
                })}
                
            }))
          })
          .catch((error)=>{
            console.log(error)
          })
       
    }
    const Addhandle=(id,value,setvalue)=>{
      axios.put(baseurl +"/projects/"+id,{
        name:value
      },{headers:{"x-auth-token":token}})
      .then((response)=>{
        console.log(response)
        setMylesson(Mylesson.map((item)=>{
            return {...item,projects:item.projects.map((p)=>{
               return {...p,nameProject: id == p.id ? value:p.nameProject,edit:id==p.id ? false: p.edit }
            })}
             
         }))
      })
      
      setvalue("")
    }
    
    return (
        <>
        {/* share workspace page*/} 
      { showShareWorkspace && <ShareWorkspace  setMylesson={setMylesson} id={id} members={members} show={showShareWorkspace} setShow={setShareWorkspace} nameProjects={projectname} />}
        <div style={{display:showLessons ? "block":"none"}}>
            {/* workSpace */}
            <div className="flex flex-row-reverse justify-start mt-4 group/lesson">
                <span>{squareColor}</span>
                <span onClick={()=>{setInner(!showInner)}} className="font-dana mr-2 font-medium text-base mt-1 w-[260px] text-end cursor-default">{lessonName}</span>
                <span className='relative'>
                    <span className=" text-start opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">
                        {<MoreHorizRoundedIcon tabIndex="0" onBlur={()=>{setShow(false)}} onClick={()=>{setShow(!show)}} className="!text-base focus:outline-none text-gray-600"></MoreHorizRoundedIcon>}
                    </span>
                    <Dropdown id={id} setNameProjects={setNameProjects} setShareW={setShareWorkspace} dropdown={show} Removehandler={Removehandler} setInner={setInner} setShow={setShow} Mylesson={Mylesson} setMylesson={setMylesson} />
                </span>
            </div>


            {/* projects */}
            <div className="flex flex-col mr-7">
                {projectname.map((item) => {
                    return(item.nameProject != id && !item.edit ?<Projects setBoards={setBoards} setMylesson={setMylesson}  Mylesson={Mylesson} setSharepr={setSharepr} key={item.id} RemoveProject={RemoveProject} showInner={showInner} id={item.id} projectName={item.nameProject} />
                    :<ManageProjects setMylesson={setMylesson} edit={item.edit} nameProject={item.nameProject}  Addhandle={Addhandle} workspaceId={id} id={item.id} RemoveProject={RemoveProject} key={item.id} showInner={showInner} />
                    );
                })}
            </div>
        </div>
        </>
    );
}