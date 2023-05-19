/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"

// export function LinkButton(){
//     return <><div className="flex flex-row z-30 mt-7% w-full items-center  justify-between  fixed">
//     <div className="ml-20 text-center flex items-center ">
//     <Link to={"/Login"}><button className="   cursor-pointer h-10 text-sm rounded-md font-dana bg-submitColor text-white w-23  ">ورود</button></Link>
//     <span className="ml-2 font-dana text-base">قبلا ثبت‌نام کرده‌ای؟</span></div>
//     <div className=" bg-namegradient bg-clip-text text-transparent mr-20 font-dana font-extrabold tracking-tight text-headerSize">کوئرا تسک منیجر</div>
//     </div></>
// }
import { Link } from "react-router-dom"

export function LinkButton({buttoncontent,question,path}){
    return <><div className="flex flex-row z-30 mt-7% w-full items-center  justify-between  fixed">
    <div className=" md:ml-20 text-center flex items-center ">
    <Link to={path}><button className="   cursor-pointer h-10 text-sm rounded-md font-dana bg-submitColor text-white w-23  ">{buttoncontent}</button></Link>
    <span className="ml-2 font-dana text-base">{question}</span></div>
    <div className=" bg-namegradient bg-clip-text text-transparent md:mr-20 font-dana font-extrabold tracking-tight text-headerSize">کوئرا تسک منیجر</div>
    </div></>
}