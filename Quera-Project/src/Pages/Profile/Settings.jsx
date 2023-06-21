/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useForm } from "react-hook-form"
export const Settings=()=>{
const {register}=useForm()
const [darkMode,setDark]=useState(false)
    const Themecolors=["#208D8E","#78C6B0","#76BC86","#80DC69","#E46161","#E17E80","#EC8182","#F3C567","#E57A57","#F1A25C"]
    return(
        <>
            <section dir="rtl" className=" flex mt-[170px] mr-[58px] flex-col w-[354px] float-right font-dana">
                <article className="mb-[35px] tracking-tight font-extrabold text-[31px]">تنظیمات</article>
                <article className="flex flex-col gap-2 mb-[50px]">
                    <div className=" text-sm">انتخاب تم</div>
                    <div className="flex items-center gap-[13px] flex-row">{Themecolors.map((item,index)=>{
                    return <input key={item} defaultChecked={item=="#76BC86"}  style={{backgroundColor:item}}  
                    className=" rounded-full relative appearance-none  checked:after:content-['']  
                    after:absolute after:left-4  after:top-2 after:bg-no-repeat checked:after:border-r-2
                    checked:after:border-b-2   checked:after:border-white cursor-pointer after:w-2
                    after:h-5 after:rotate-45     checked:w-[40px] checked:h-[40px]  w-[20px] h-[20px]" 
                    {...register("themecolor")} value={item} type="radio"/>
                    })}
                    </div>
                </article>
                <article className="flex items-center flex-row mb-[48px]">
                    <button onClick={()=>{setDark(!darkMode)}} className="w-[55px] transition-all items-center flex flex-row h-[24px]  border justify-end rounded-full  border-black ">
                        <div style={{transform:darkMode && "translate(31px,0px)",backgroundColor:darkMode && "#208D8E"}} className=" w-[22px] transition-all rounded-full h-[22px] bg-[#8A8989]"></div>
                    </button>
                    <span className=" text-sm mr-[14px]">حالت شب</span>
                </article>
                <article>
                    <button className="  cursor-pointer w-full  h-[38px] text-sm rounded-md font-dana bg-submitColor text-white  ">ثبت تغییرات</button>
                </article>
            </section>
        </>
    );
}