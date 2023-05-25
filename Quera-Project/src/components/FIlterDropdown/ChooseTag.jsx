import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
export const ChooseTag=({showTag,setShowTag,id})=>{
  const input=useRef()
  return  <div className="relative  flex flex-col items-center">
    <span className="absolute">
      <ul
      onMouseDown={(e)=>{e.preventDefault()}}
        style={
          showTag
            ? { display:'flex' }
            : { display:"none" }
        }
        className="w-[146px] transition-all text-xs  flex flex-col  rounded-lg bg-white drop-shadow-lg py-2   "
      >
        <li className='flex flex-row px-2  w-[130px]'>
<SearchIcon className=' text-[#208D8E] ml-2'/><input className='w-[100px] outline-none font-dana  tex-[10px]' ref={input} onBlur={()=>{ setShowTag(false)}} onClick={()=>{input.current.focus(),setShowTag(true)}} type='text' placeholder="جستجو"/>
        </li>
        <li className='mb-[16px]'><hr ></hr></li>
        <li
          onClick={() => {
            setShowTag(false);
           
          }}
          className=" mx-2 rounded-md text-center flex justify-center  py-auto mb-[12px] w-[44px] h-[31px] bg-[#EBC8C8]  cursor-pointer hover:opacity-70"
        >
         <p className='flex justify-center items-center'> درس</p>
        </li>
        <li  onClick={() => {
            setShowTag(false);
           
          }}
          className=" mx-2 rounded-md text-center flex justify-center  py-auto mb-[12px] w-[31px] h-[31px] bg-[#C3B7F2]  cursor-pointer hover:opacity-70"
        >
         <p className='flex justify-center items-center'> کار</p></li>
         <li  onClick={() => {
            setShowTag(false);
           
          }}
          className=" mx-2 rounded-md text-center flex justify-center  py-auto mb-[12px] w-[44px] h-[31px] bg-[#7FFAFA]  cursor-pointer hover:opacity-70"
        >
         <p className='flex justify-center items-center'> پروژه</p></li>
      </ul>
    </span>
  </div>
}
