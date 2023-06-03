import { useState } from "react"
import { MoreHorizRounded } from '@mui/icons-material';
import { Tagdropoptions } from './TagDropOptions';
export function Tags({bgcolor,tag}){
    const [tagOptions,setOptions]=useState(false)
    return <li onMouseLeave={()=>{setOptions(false)}}
            
    className={`  text-center self-start flex flex-row justify-between pb-[12px] items-center w-full px-3 group  bg-[${bgcolor}]  cursor-pointer `}
>
  <p style={{backgroundColor:bgcolor}} className='flex rounded-md hover:opacity-70 justify-center px-2 py-[5px] items-center'> {tag}</p><span  className='relative'><MoreHorizRounded id="dots" tabIndex="1"  onClick={()=>{setOptions(!tagOptions)}} className='text-[#BDBDBD] group-hover:opacity-100 opacity-0 group-hover:transition-all group-hover:duration-300 !text-xs'/><Tagdropoptions tagOptions={tagOptions} setOptions={setOptions}/></span>
</li>
}