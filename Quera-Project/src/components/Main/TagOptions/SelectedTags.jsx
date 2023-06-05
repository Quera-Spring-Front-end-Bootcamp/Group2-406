import { Tagdropoptions } from "./TagDropOptions"
import { useRef,useEffect,useState } from "react"
export const SelectedTag=({tagname,id})=>{
    const dropdown=useRef()
    const [tagOptions,setOptions]=useState(false)
useEffect(()=>{
    
  const handleclose=(e)=>{console.log(!dropdown?.current?.contains(e.target))
    console.log(e.target)
     return !dropdown?.current?.contains(e.target)&& e.target.id!= id && setOptions(false)
  }
  document.addEventListener("click",handleclose)
  return ()=>{document.removeEventListener("click",handleclose)}
})
    
    return <span  className="cursor-pointer px-2  py-[4.5px] mb-1  rounded-md bg-[#FFAE34]" ><span id={id} onClick={()=>{setOptions(!tagOptions)}}><p id={id} className=" inline font-dana text-[10px]">{tagname}</p></span><Tagdropoptions tagOptions={tagOptions} dropref={dropdown} setOptions={setOptions}/></span>
}