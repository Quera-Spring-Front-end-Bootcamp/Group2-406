
import { useForm } from "react-hook-form";
import { LinkButton } from "../../components/Bottons/LinkButtons";

export function Register(){
    const  {register,handleSubmit,formState:{errors}}= useForm()
   let onSubmit=data=>console.log(data)
   
    return <><LinkButton/>
    <div className="h-screen w-screen z-20 flex justify-center  mb-11 items-center fixed">
        <div dir="rtl" className={`  w-registerw max-h-maxh bg-white flex flex-col justify-center align-middle rounded-registerRad shadow-registerShadow `}>
<p className="text-center text-headerSize tracking-tight font-dana font-bold mt-6 ">ثبت‌نام در کوئرا تسک منیجر</p>
<form className="flex flex-col " onSubmit={handleSubmit(onSubmit)} >

<div className="flex flex-col  mb-6 mt-6 mr-6">
    <label htmlFor="name" className="mb-2 text-sm font-dana">نام کامل</label>
<input id="name"   {...register("fullname",{required:{value:true,message:"وارد کردن نام الزامی است"}})} className="   px-2  border border-inputBorder font-dana focus-visible:outline-none rounded-md ml-6 h-10 "/>
<p className="text-xxs mt-1 font-dana text-red-700">{errors.fullname?.message}</p></div>
<div className="flex flex-col mb-6 mr-6">
    <label htmlFor="email" className="  mb-2 text-sm font-dana">ایمیل</label>
<input id="email" dir="ltr"  type="email" {...register("Email",{required:{value:true,message:"وارد کردن ایمیل الزامی است"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"ایمیل وارد شده صحیح نمی باشد"}})} className=" font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md ml-6 h-10"/>
<p className=" text-xxs mt-1 font-dana text-red-700">{errors.Email?.message}</p>
</div>
<div className="flex flex-col mb-6 mr-6">
    <label htmlFor="password" className="mb-2 text-sm font-dana">رمز عبور</label>
<input id="password" dir="ltr"  type="password" {...register("Password",{required:{value:true,message:"وارد کردن رمز عبور الزامی است"},minLength:{ value:8 ,message:" رمز عبور باید حداقل ۸ کاراکتر باشد "}},)}  className=" px-2  border border-inputBorder focus-visible:outline-none  rounded-md ml-6 h-10"/>
<p className=" mt-1 text-xxs font-dana  text-red-700">{errors.Password?.message}</p>
</div>
<div className="mr-6 mb-2" >
<div className="flex flex-row   items-center  text-base">
    <input id="check" {...register("check",{required:{value:true,message:"لطفا ابتدا قوانین و مقررات را مطالعه فرمایید"}})} type="checkbox" className="  ml-2  relative appearance-none hover:ring hover:ring-check shrink-0 
w-5 h-5 border border-uncheck rounded checked:bg-check checked:after:content-['']  after:absolute after:left-1.5 after:top-0.5 after:bg-no-repeat
 checked:after:border-r-2 checked:after:border-b-2 after:box-border checked:after:border-mark cursor-pointer after:w-checkw after:h-checkh after:rotate-45 checked:border checked:border-mark checked:hover:ring-0    "></input>
<label htmlFor="check"  className=" text-base leading-normal font-dana">قوانین و مقررات را می‌پذیرم.</label>

</div>
<p className="text-xxs mt-1 font-dana text-red-700">{errors.check?.message}</p>
</div>
<div className="text-center mx-6 ">
    <input className=" mb-6 cursor-pointer w-full h-12 text-sm rounded-md font-dana bg-submitColor text-white  "   type="submit" value="ثبت‌نام"/>
    </div>


 

</form>




    </div>
    </div>
    </>



}