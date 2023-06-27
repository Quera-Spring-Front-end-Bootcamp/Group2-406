/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { ProjectDropdown } from './ProjectDropdown/ProjectDropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../ContextApi/AuthContext';
import { baseurl } from '../../../assets/baseUrl';

export const Projects = ({projectName,showInner,RemoveProject,id,setSharepr,Mylesson,setMylesson,setBoards}) => {
    const [show,setshow]=useState(false)
    const {token}=useAuth()
    const navigate=useNavigate()
    const fetchBoards=()=>{
          axios.get(baseurl+"/board/"+id,{headers:{"x-auth-token":token}})
          .then((response)=>{
            setBoards(response.data.data)
            setBoards(perv=>perv.sort((a,b)=>(a.position < b.position) ? 1 : (a.position > b.position) ? -1 : 0))
          })
    }
    return(
        <div onClick={()=>{navigate("/Main/"+ id +"/ColumnView"),fetchBoards()}} style={{visibility:showInner ? "visible":"hidden",height:showInner ? "33px":"0",marginTop:showInner ? "16px":"0"}} 
        className="flex  transition-height flex-row-reverse justify-between items-end bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <span className="font-dana font-medium mt-4 cursor-default">{projectName}</span>
            <span className='relative'>
                <span className="mt-4 opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon tabIndex="0" onBlur={()=>{setshow(false)}} onClick={()=>{setshow(!show)}} className="!text-base focus:outline-none text-gray-600"></MoreHorizRoundedIcon>}</span>
                <ProjectDropdown setSharepr={setSharepr} show={show} id={id} setMylesson={setMylesson} setShow={setshow} Mylesson={Mylesson} RemoveProject={RemoveProject}/>
            </span>
        </div>
    );
}