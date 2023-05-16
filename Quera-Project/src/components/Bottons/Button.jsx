import { Link } from "react-router-dom"

export function Button(){
    return <><div className="flex flex-row z-30 mt-7% w-full items-center  justify-between  fixed">
    <div className="ml-20 text-center flex items-center ">
    <Link to={"/Login"}><button className="   cursor-pointer h-10 text-sm rounded-md font-dana bg-submitColor text-white w-23  ">ورود</button></Link>
    <span className="ml-2 font-dana text-base">قبلا ثبت‌نام کرده‌ای؟</span></div>
    <div className=" bg-namegradient bg-clip-text text-transparent mr-20 font-dana font-extrabold text-headerSize">کوئرا تسک منیجر</div>
    </div></>
}