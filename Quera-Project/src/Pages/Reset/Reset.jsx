
import { useForm } from "react-hook-form";

export function Reset() {
  const { handleSubmit } = useForm();
  let onSubmit = (data) => console.log(data);

  const redirectToLogin = () => {
    window.location.href = "/Login";
  };
  return (
    <div dir="rtl">
      <div className="  flex   flex-row justify-between font-dana font-bold py-7 px-7 ">
        <h1
          className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent
"
        >
          کوئرا تسک منیجر
        </h1>
        <div className="flex  text-xs text-center h-full">
          <p className=" py-3 font-dana">قبلا ثبتنام کرده ای؟</p>
          <button
            className="m-1 rounded text-sx font-dana bg-submitColor justify-center mt-1 text-center text-white h-full  px-9 py-2 "
            onClick={redirectToLogin}
          >
            ورود
          </button>
        </div>
      </div>
      <div className="h-screen w-screen z-20 flex flex-col mt-45 items-center fixed ">
        <div
          className={`  w-registerw  bg-white flex flex-col justify-center rounded-registerRad shadow-registerShadow `}
        >
          <p className="text-center text-headerSize font-dana font-bold mt-6 ">
            فراموشی رمز عبور
          </p>
          <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center mx-6 ">
              <p className="text-xs py-3 my-5 font-dana">
                لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
                کنید.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}