export const Phase3=({setshow,setphase,watch})=>{
    return <><div className="w-full flex flex-row mb-10"><span onClick={()=>{setshow(false)}} className=" cursor-pointer  text-2xl -translate-y-1 float-right">&times;</span>
    <div className="inline-flex justify-center w-full flex-row ">
        <span className="  justify-self-center font-extrabold text-2xl tracking-tight font-dana  self-center">مرور اطلاعات</span></div><span onClick={()=>{setphase(2)}} className="float-left cursor-pointer text-2xl -translate-y-1 ">&larr;</span></div>
    <div className=" flex  flex-col w-full mb-15 px-1 "><p className="mb-2 font-dana text-sm"></p>
    <div style={{height:"158px",border: "0.5px solid #AAAAAA"}} className=" flex flex-col gap-6 px-3  py-4 rounded-md"><div className="flex flex-row justify-between  ">
        <p className="font-dana font-semibold  tracking-tight text-sm">نام ورک‌اسپیس</p><p className="font-dana text-sm tracking-tight font-semibold">{watch("name")}</p></div>
    <div className=" flex flex-row items-center justify-between"> <p className="font-dana font-semibold  tracking-tight text-sm">رنگ ورک‌اسپیس</p><div style={{backgroundColor:watch("color")}} className=" rounded-sm h-3.5 w-3.5 "></div></div>
    <div className=" flex flex-row items-center justify-between"><p className="font-dana font-semibold  tracking-tight text-sm">اعضا</p><div style={{backgroundColor:watch("color")}} className="  rounded-full h-7 w-7 "></div></div>
    </div></div></>
}