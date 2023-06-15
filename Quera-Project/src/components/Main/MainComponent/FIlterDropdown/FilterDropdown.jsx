/* eslint-disable react/prop-types */
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { ChooseFilter } from './ChooseFilter';

 export const FilterDropdown=({show,setShow,TagDetails})=>{
   const [filter,setFilter]=useState([{id:1,tag:"انتخاب کنید",color:"transparent",type:"انتخاب کنید",decide:"است"}])
   
   function selectDecide(id,value){
      setFilter(filter.map((item)=>{
         return  {id:item.id,tag:item.tag,color:item.color,type:item.type,decide:id==item.id ? value:item.decide}
      }))
      

   }
   function selectTag(id,value,bgcolor){
      setFilter(filter.map((item)=>{
         return  {id:item.id,tag:id==item.id ? value:item.tag,color: item.id == id ?bgcolor: item.color,type:item.type,decide:item.decide}
      }))
   }
   function selectType(id,value){
      setFilter(filter.map((item)=>{
         return  {id:item.id,tag:item.tag,color:item.color,type:id==item.id ? value:item.type,decide:item.decide}
      }))
   }
   function DeleteFilter(id){
      setFilter(filter.filter((item)=>{return id!=item.id }))
   }
   return ( 
      <section dir="rtl" id="Filter" style={{display: show ? "flex":"none"}}  className=" w-[718px] bg-white z-10  mt-6  shadow-lg rounded-lg font-dana   py-[15px] px-[21px] absolute flex-col ">
         <article className='flex flex-row mb-[17px] justify-between'>
            <p className='text-2xl font-semibold'>فیلترها</p><CloseOutlinedIcon onClick={()=>{ setShow(false)}} className=' cursor-pointer'/>
         </article >
         
         {filter.map((item)=>{
            return <ChooseFilter TagDetails={TagDetails} color={item.color} DeleteFilter={DeleteFilter} selectTag={selectTag} selectType={selectType} selectDecide={selectDecide} id={item.id} key={item.id} tag={item.tag} type={item.type} decide={item.decide} />
         })}
            
         <article className=' mb-[55px] inline text-[#208D8E] text-sm'><small onClick={()=>{ filter.length<= 3 && setFilter([...filter,{id:Date.now(),tag:"انتخاب کنید",type:"انتخاب کنید",decide:"است"}])}} className='cursor-pointer font-semibold '>افزودن فیلتر جدید</small></article>
      </section>
   );

 }