/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { MoreHorizRounded } from '@mui/icons-material';
import { Tagdropoptions } from "../TagOptions/TagDropOptions";
export function Tags({bgcolor,tag,setSelectedTag,tagchoose,Tagdelete,id,TagColorChange}){
  const dropref=useRef()
    const [tagOptions,setOptions]=useState(false)
    const dotsref=useRef()
    const newtag=false
useEffect(()=>{
  const handleclose=(e)=>{
     return !dropref?.current?.contains(e.target)&& setOptions(false)
  }
  document.addEventListener("mousedown",handleclose)
  return ()=>{document.removeEventListener("mousedown",handleclose)}
})
    return <li 
            
    className={`  text-center  self-start flex flex-row justify-between pb-[12px] items-center w-full  group  cursor-pointer `}
>
  <p onClick={()=>{setSelectedTag((pervTag)=>[...pervTag,{id:id,tagname:tag,bgcolor:bgcolor}]),tagchoose(tag)}} style={{backgroundColor:bgcolor}} className='flex  bg-[${bgcolor}]  rounded-md hover:opacity-70 justify-center px-2 py-[5px] items-center'> {tag}</p><span ref={dotsref} className='relative'><MoreHorizRounded  ref={dotsref}  onClick={()=>{setOptions(true)}} className='text-[#BDBDBD] group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:duration-300 !text-xs'/>
  <Tagdropoptions TagColorChange={TagColorChange} newtag={newtag} Tagdelete={Tagdelete} id={id} tagOptions={tagOptions} dropref={dropref} setOptions={setOptions}/></span>
</li>
}