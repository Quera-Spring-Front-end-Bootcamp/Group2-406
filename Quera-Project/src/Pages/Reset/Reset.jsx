
import { useForm } from "react-hook-form";
import { LinkButton } from "../../components/Bottons/LinkButtons";

export function Reset() {
  const { handleSubmit } = useForm();
  let onSubmit = (data) => console.log(data);

  return (<>
    <LinkButton buttoncontent={"ورود"} question={"قبلا ثبت نام کرده ای؟"} path={"/"} />

    <div dir="rtl">
      <div className="h-screen w-screen z-20 flex flex-col mt-45 items-center fixed justify-center">
        <div className={`  w-registerw  bg-white flex flex-col justify-center rounded-registerRad shadow-registerShadow `}>
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
  </>
  );
}