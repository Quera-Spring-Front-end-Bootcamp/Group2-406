/* eslint-disable no-misleading-character-class */
import { useForm } from "react-hook-form";

useForm
export const Personal=()=>{
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onsubmit=(data)=>{console.log(data)}

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div dir="rtl" className=" flex flex-col float-right h-[550px] font-dana gap-[35px]  mr-[58px] mt-[170px] ">
          <section className="text-[31px] font-bold">اطلاعات فردی</section>
          <section>
            <div className="flex gap-4 items-center flex-row">
              <span className="rounded-full bg-yellow-200 w-[100px] h-[100px] font-medium ml-2 flex justify-center items-center  text-[34px]">NM</span>
              <div className="flex flex-col gap-3   items-start">  
                <div className=" p-[10px]  border border-[#208D8E] rounded-lg text-[#208D8E] text-xl">ویرایش تصویر پروفایل</div>
                <p className=" text-[#8A8989]  text-xs">این تصویر برای عموم قابل نمایش است.</p>
              </div>
            </div>
          </section>
          <div>  
            <div  className="flex   gap-5 flex-col">
              <div className="flex   flex-col">
                <label htmlFor="name" className="mb-2 text-sm font-dana">نام</label>
                <input id="name" type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "وارد کردن نام الزامی است",
                  },
                  pattern: {
                    value:
                      /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\sa-zA-Z]+$/,
                    message: "نام وارد شده صحیح نمی باشد",
                  },
                })}
                className="     border border-inputBorder font-dana focus-visible:outline-none rounded-md px-2   h-10 "
                />
                <p className="text-xxs mt-1 font-dana text-red-700">{errors.name?.message}</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="surename" className="mb-2 text-sm font-dana">نام خانوادگی</label>
                <input id="surename" type="text"
                {...register("surename", {
                  required: {
                    value: true,
                    message: "وارد کردن نام خانوادگی الزامی است",
                  },
                  pattern: {
                    value:
                      /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\sa-zA-Z]+$/,
                    message: "نام وارد شده صحیح نمی باشد",
                  },
                })}
                className="     border border-inputBorder font-dana focus-visible:outline-none rounded-md px-2   h-10 "
                />
                <p className="text-xxs mt-1 font-dana text-red-700">{errors.surename?.message}</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-sm font-dana">شماره موبایل</label>
                <input id="name" type="tel"
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "وارد کردن نام الزامی است",
                  },
                  pattern: {
                    value:
                      /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
                    message: "شماره وارد شده صحیح نمی باشد",
                  },
                })}
                className="     border border-inputBorder font-dana focus-visible:outline-none rounded-md px-2   h-10 "
                />
                <p className="text-xxs mt-1 font-dana text-red-700">{errors.fullname?.message}</p>
              </div>
            </div>   
          </div>
          <div className="flex flex-col mt-auto ">
            <input className="  cursor-pointer w-full  h-[38px] text-sm rounded-md font-dana bg-submitColor text-white  " value="ثبت تغییرات" type="submit"/>
          </div>
        </div> 
      </form>
    </>
  );
}