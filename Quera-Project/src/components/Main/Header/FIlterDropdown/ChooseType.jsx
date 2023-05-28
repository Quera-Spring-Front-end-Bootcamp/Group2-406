/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
export const ChooseType=({showType,setShowType,id,selectType})=>{
  const input=useRef()
  return ( 
    <div className="relative  flex flex-col items-center">
      <span className="absolute">
        <ul
        onMouseDown={(e)=>{e.preventDefault()}}
        style={showType ? { display:'flex' } : { display:"none" }}
        className="w-[182px] transition-all h-[165px] text-xs  flex flex-col  rounded-lg bg-white drop-shadow-lg py-2   "
        >
          <li className='flex flex-row px-2  w-[130px]'>
            <SearchIcon className=' text-[#208D8E] ml-2'/><input className='w-[100px] outline-none font-dana  tex-[10px]' ref={input} onBlur={()=>{ setShowType(false)}} 
            onClick={()=>{input.current.focus(),setShowType(true)}} type='text' placeholder="جستجو بین فیلتر‌ها"/>
          </li>

          <li className='mb-[16px]'><hr ></hr></li>

          <li className='mr-2 cursor-pointer  mb-[14px]'
            onClick={() => {
              setShowType(false);
              selectType(id,"تاریخ")
            }}
          >
            <p>تاریخ</p>
          </li>

          <li className='mr-2 cursor-pointer  mb-[14px]'
            onClick={() => {
              setShowType(false);
              selectType(id,"تگ")
            }}
          >
            <p >تگ</p>
          </li>

          <li className='mr-2 cursor-pointer  mb-[14px]'
            onClick={() => {
              setShowType(false);
              selectType(id,"اعضا")
            }}
          >
            <p >اعضا</p>
          </li>

          <li className='mr-2 cursor-pointer  mb-[14px]'
          onClick={() => {
            setShowType(false);
            selectType(id,"اولویت")
          }}
          >
            <p>اولویت</p>
          </li>
        </ul>
      </span>
    </div>
  );
}
