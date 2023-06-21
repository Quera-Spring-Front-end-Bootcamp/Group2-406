/* eslint-disable react/prop-types */
import { useState } from "react"
import { Phase1 } from "./Phase1"
import { Phase2 } from "./Phase2"
import { Phase3 } from "./Phase3"
import { useForm } from "react-hook-form"

import axios from "axios"

export const Newworkspace=({show,setshow,setMylesson,Mylesson})=>{
    const {watch,register,reset,formState:{errors},handleSubmit}=useForm({defaultValues:{color:"#7D828C"}});
    const [phase,setphase]=useState(1);

    const onsubmit= async(data)=>{
        console.log(data)
        if(phase<3){
            setphase(phase+1);
        }
        else{
            
            await axios.post("http://localhost:3000/api/workspace/create",{
                name:watch("name")
            },{headers:{"x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGU4M2Q4MzMyNjk5MDAzZjJmZjRkNCIsInVzZXJuYW1lIjoiZGFkYSIsImVtYWlsIjoibWV5c2Ftc2F5eWFkdGFsYUBnbWFpbC5jb20iLCJpYXQiOjE2ODcyMzY4OTUsImV4cCI6MTY4NzMyMzI5NX0.pZ7tc502bTHxfA7KbgcB3ZtcF3jeAPmHhlsSOKY4wNs"}})
            .then(function (response) {
              
              setMylesson([...Mylesson,{id:response.data.data._id,nameLesson:watch("name"),colorSquare:watch("color"),edit:false,projects:[]}]);
              console.log(Mylesson)
              })
              .catch(function (error) {
               console.log(error)
              });
            
            
            setphase(1);
            reset();
            setshow(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <div id="outer" onClick={(e)=>{e.target.id=="outer" &&  setshow(false)}} className={`w-screen h-screen bg-gray-600 bg-opacity-50 z-50 justify-center items-center ${show ? "flex":"hidden"} flex-col fixed `}>
                <div style={{maxHeight:"383px",minHeight:"294px"}} dir="rtl" className=" p-6  rounded-lg bg-white    items-center flex flex-col w-100">
                    {phase==1 ? <Phase1 errors={errors} setshow={setshow} register={register} />:phase==2 ? 
                    <Phase2 watch={watch} register={register} setshow={setshow} setphase={setphase}/>
                    :<Phase3 watch={watch} setshow={setshow} setphase={setphase}/>}

                    <div className="w-full flex flex-row justify-center self-end  px-1 items-center"><input type="submit" value={phase!=3 ? "ادامه":"ساختن ورک‌اسپیس"}  className="w-full h-10  text-center text-sm rounded-md font-dana bg-submitColor text-white"/></div>
                </div>

                <div className="flex mt-10 flex-row">
                    <div style={{backgroundColor:phase==1? "white":"grey"}} className=" h-2 w-2 rounded-full   mx-1"></div>
                    <span style={{backgroundColor:phase==2 ? "white" :"grey"}} className=" h-2 w-2 rounded-full block  mx-1"></span>
                    <span style={{backgroundColor:phase==3 ? "white" :"grey"}} className=" h-2 w-2 rounded-full block  mx-1"></span>
                </div>
            </div>
        </form>
    )
}