/* eslint-disable react/no-unknown-property */
import { useForm } from "react-hook-form";
import { LinkButton } from "../../components/Bottons/LinkButtons";
import { useNavigate } from "react-router";
//import {toast} from "react-toastify"

export const Login = () => {
    const navigate = useNavigate();
    const handleRedirectToRegister = () => {
        navigate("/Register");
    }
    const handleRedirectToForget = () => {
        navigate("/Forget");
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                //console.log(userData.fullname + " You Are Successfully Logged In")
                navigate("/Main");
            } else {
                alert("ایمیل یا رمز عبور اشتباه می باشد");
            }
        } else {
            alert("ایمیل یا رمز عبور اشتباه می باشد");
        }
    };

    return <>
        {/* top div  */}
        <LinkButton buttoncontent={"ثبت نام"} question={"ثبت نام نکرده ای؟"} path={"/Register"} />
    
        <div className=" h-screen w-screen z-20 flex justify-center items-center fixed">
            <div dir="rtl" className=" bg-white flex flex-col justify-center align-middle rounded-registerRad shadow-registerShadow p-6 gap-7">
                <p className="h-50 font-dana font-semibold text-3xl leading-50 text-right text-black flex-none order-0">به کوئرا تسک منیجر خوش برگشتی </p>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} >

                    {/* Email */}
                    <div className="flex flex-col mb-6"><label htmlFor="email" className="  mb-2 text-sm font-dana">ایمیل</label>
                        <input id="email" dir="ltr" type="email" {...register("email", { required: { value: true, message: "وارد کردن ایمیل الزامی است" },
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "ایمیل وارد شده صحیح نمی باشد" } })} className=" font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md h-10" />
                        <p className=" text-xxs mt-1 font-dana text-red-700">{errors.email?.message}</p></div>

                    {/* Password */}
                    <div className="flex flex-col mb-6"><label htmlFor="password" className="mb-2 text-sm font-dana">رمز عبور</label>
                        <input id="password" dir="ltr" type="password" {...register("password", { required: { value: true, message: "وارد کردن رمز عبور الزامی است" } })} className=" px-2  border border-inputBorder focus-visible:outline-none  rounded-md h-10" />

                        <p className=" mt-1 text-xxs font-dana  text-red-700">{errors.password?.message}</p>

                        <div className="flex flex-row  items-center mb-2 text-base">
                            <button htmlFor="check" className="w-132 h-19 font-dana text-xs font-semibold  text-right text-teal-500 flex-none order-2 flex-grow-0 " type="submit" onClick={handleRedirectToForget}>رمز عبور را فراموش کرده‌ای؟</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 w-469 h-85 flex-none order-1 self-stretch flex-grow-0 ">
                        {/* ورود */}
                        <div className="text-center">
                            <button className=" cursor-pointer w-full h-12 align-middle rounded-md font-dana bg-submitColor text-white" id="check" type="submit">ورود</button>
                        </div>

                        {/* ثبت‌نام */}
                        <div className="w-159 h-25 flex flex-row-reverse justify-center items-center p-0 gap-1.5 flex-none order-1 flex-grow-0" >
                            <label className="w-105 h-25 font-dana font-normal text-right text-black flex-none order-1 flex-grow-0">ثبت‌نام نکرده‌ای؟</label>
                            <button className="w-47 h-25 font-dana font-bold text-right text-teal-500 flex-none order-0 flex-grow-0" type="submit" onClick={handleRedirectToRegister}>ثبت‌نام</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </>
}
