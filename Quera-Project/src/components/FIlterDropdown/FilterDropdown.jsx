import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { ChooseFilter } from './ChooseFilter';

 export const FilterDropdown=({show,setShow})=>{
   const [filter,setFilter]=useState([{id:1,tag:"انتخاب کنید",type:"انتخاب کنید",decide:"است"}])
   function selectDecide(id,value){
      setFilter(filter.map((item)=>{
         return  {id:item.id,tag:item.tag,type:item.type,decide:id==item.id ? value:item.decide}
      }))

   }

    return <section dir="rtl" style={{display: show ? "flex":"none"}} onMouseDown={(e)=>{e.preventDefault()}} className=" w-[718px] bg-white z-10  mt-6  shadow-lg rounded-lg font-dana   py-[15px] px-[21px] absolute flex-col ">
         <article className='flex flex-row mb-[17px] justify-between'>
            <p className='text-2xl font-semibold'>فیلترها</p><CloseOutlinedIcon onClick={()=>{ setShow(false)}} className=' cursor-pointer'/>
         </article >
         {filter.map((item)=>{
            return <ChooseFilter selectDecide={selectDecide} id={item.id} key={item.id} tag={item.tag} type={item.type} decide={item.decide} />
         })}
         
<article className=' mb-[55px] inline text-[#208D8E] text-xs'><p className='cursor-pointer '>افزودن فیلتر جدید</p></article>
     </section>
 }