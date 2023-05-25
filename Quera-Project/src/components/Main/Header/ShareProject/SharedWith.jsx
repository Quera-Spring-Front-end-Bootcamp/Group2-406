/* eslint-disable react/prop-types */

export const SharedWith = ({profileImg, userName}) => {

    return(
        <div className="flex flex-row-reverse justify-between mt-4">
            <div className="flex flex-row-reverse items-center">
                <span className="w-[34px] h-[34px] ml-2">
                    <img className="w-[34px] h-[34px] rounded-full" src={profileImg} alt="my picture!" />
                </span>
                <span className="font-dana font-normal text-sm ml-2 flex items-center">{userName}</span>
            </div>

            <div>
                <button>
                    
                </button>
            </div>
            {/* <select name="accessLevel">
                <optgroup label="دسترسی کامل">
                    <option value="دسترسی کامل" name="دسترسی کامل">توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه</option>
                </optgroup>

                <optgroup label="دسترسی ویرایش">
                    <option>توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.</option>
                </optgroup>

                <optgroup label="دسترسی کامنت">
                    <option>توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.</option>
                </optgroup>

                <optgroup label="فقط دسترسی مشاهده">
                    <option>توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.</option>
                </optgroup>
            </select> */}
        </div>
    );
}