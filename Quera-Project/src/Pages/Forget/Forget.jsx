import { useForm } from "react-hook-form";

export const Forget = () => {
  const redirectToRegister = () => {
    window.location.href = "/Login";
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData.email === data.email) {
      window.location.href = "/Reset";
    } else {
      alert("اینجاست؟؟؟؟؟مشکل کجاست؟؟؟");
    }
  };

  return (
    <div dir="rtl">
      <div className="  flex   flex-row p-1 justify-between font-dana font-bold py-7 px-7 ">
        <h1
          className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent
"
        >
          کوئرا تسک منیجر
        </h1>
        <div className="flex  text-xs text-center h-full">
          <p className=" py-3">قبلا ثبتنام کرده ای؟</p>
          <button
            className="m-1 rounded text-sx font-dana bg-submitColor justify-center mt-1 text-center text-white h-full w-30 px-9 py-2"
            onClick={redirectToRegister}
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
            <div className="flex flex-col mb-6 mr-6">
              <label htmlFor="email" className="  mb-2 text-sm font-dana">
                ایمیل خود را وارد کنید
              </label>
              <input
                id="email"
                dir="ltr"
                type="email"
                {...register("Email", {
                  required: {
                    value: true,
                    message: "وارد کردن ایمیل الزامی است",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل وارد شده صحیح نمی باشد",
                  },
                })}
                className=" font-dana px-2 border border-inputBorder focus-visible:outline-none rounded-md ml-6 h-10"
              />
              <p className=" text-xxs mt-1 font-dana text-red-700">
                {errors.Email?.message}
              </p>
            </div>

            <div className="text-center mx-6 ">
              <input
                className=" mb-6 cursor-pointer w-full h-12 align-middle rounded-md font-dana bg-submitColor text-white  "
                id="check"
                type="submit"
                value="دریافت ایمیل بازیابی رمز عبور"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
