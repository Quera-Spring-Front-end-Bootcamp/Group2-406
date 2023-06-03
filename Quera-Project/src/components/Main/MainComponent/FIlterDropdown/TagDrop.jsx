import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';

import { Tags } from './Tags';
 export const TagDrop=({showTag,setShowTag,TagDetails,setDetails})=>{
  const [inputValue,setInput]=useState("")
  const [innerTag,setInner]=useState(TagDetails)
  const input=useRef()
    return(
        <div className="relative  flex flex-col items-center">
      <span className="absolute">
        <ul 
        onMouseDown={(e)=>{e.preventDefault()}}
        style={showTag ? { display:'flex' } : { display:"none" }}
        className="w-[175px] transition-all text-xs  flex flex-col justify-center items-center rounded-lg bg-white drop-shadow-lg py-2   "
        >
          <li className='flex h-8 w-[151px] mb-4 bg-[#E9E9E9] rounded items-center flex-row px-2  '>
            <SearchIcon className=' text-[#BDBDBD] '/><input value={inputValue}  onKeyUp={(e)=>{ e.key == "Enter" && (setDetails([...TagDetails,{id:Date.now(),tag:inputValue,bgcolor:"#46494D"}]),setInput(""),console.log(innerTag)),setInner(TagDetails.filter((item)=>{return  item.tag.includes(inputValue)}))}}  onChange={(e)=>{setInput(e.target.value)  }}  className='w-[100px] bg-[#E9E9E9] outline-none font-dana  text-[10px]' ref={input} onBlur={()=>{ setShowTag(false)}} onClick={()=>{input.current.focus(),setShowTag(true)}} type='text' placeholder="جستجو یا ساختن تگ"/>
          </li>

          
         
          {innerTag.length!=0 ? innerTag.map((item)=>{
            return (<Tags key={item.id} bgcolor={item.bgcolor} tag={item.tag}  />)
          }):<li className='text-[#3D3D3D]'>برای ساختن تگ جدید اینتر بزنید</li>}
         

         
        </ul>
      </span>
    </div>
    )
 }