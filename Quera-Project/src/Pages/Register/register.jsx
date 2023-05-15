


export function Register(){
    return <div className="h-screen w-screen z-20 flex justify-center items-center fixed"><div dir="rtl" className=" h-registerh w-registerw bg-white flex flex-col justify-center align-middle rounded-registerRad shadow-registerShadow  ">
<p className="text-center text-headerSize ">ثبت‌نام در کوئرا تسک منیجر</p><form className="flex flex-col " >
<div className="flex flex-col mb-5 mt-7 mr-6"><label htmlFor="name" className="mb-2 text-sm">نام کامل</label>
<input id="name"  name="name" className="  px-2  border border-inputBorder focus-visible:outline-none rounded-md ml-6 h-10 "/></div>
<div className="flex flex-col mb-5 mr-6"><label htmlFor="email" className="  mb-2 text-sm">ایمیل</label>
<input id="email" dir="ltr" name="email" type="email" className="px-2 border border-inputBorder focus-visible:outline-none rounded-md ml-6 h-10"/></div>

<div className="flex flex-col mb-5 mr-6"><label htmlFor="password" className="mb-2 text-sm">رمز عبور</label>
<input id="password" dir="ltr" name="password" type="password"  className=" px-2  border border-inputBorder focus-visible:outline-none  rounded-md ml-6 h-10"/></div>
<div className="flex flex-row  items-center mb-2 text-base"><input name="check" type="checkbox" className=" mr-6 ml-2  relative appearance-none hover:ring hover:ring-check shrink-0 
w-5 h-5 border rounded checked:bg-check checked:after:content-['']  after:absolute after:left-1.5 after:top-0.5 after:bg-no-repeat
 checked:after:border-r-2 checked:after:border-b-2 after:box-border checked:after:border-mark cursor-pointer after:w-checkw after:h-checkh after:rotate-45 checked:border checked:border-check checked:hover:ring-0    "></input>
<label htmlFor="check" className="align-middle leading-normal">قوانین و مقررات را می‌پذیرم.</label></div>
<div className="text-center mx-6 "><input className=" cursor-pointer w-full h-12 align-middle rounded-md bg-submitColor text-white  "  type="submit" value="ثبت‌نام"/></div>




</form>



    </div></div>
}