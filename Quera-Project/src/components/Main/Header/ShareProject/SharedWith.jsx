/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {AccessLevel} from "./AccessLevel";

export const SharedWith = ({profileImg, userName}) => {

    const accessLevel = [
        {id:1, levelAccess:"دسترسی کامل", description:"توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه"},
        {id:2, levelAccess:"دسترسی ویرایش", description:"توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد."},
        {id:3, levelAccess:"دسترسی کامنت", description:"توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد."},
        {id:4, levelAccess:"فقط دسترسی مشاهده", description:"توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد."},
    ];

    const [Show,setShow] = useState(false);

    return(
        <div className="flex flex-row-reverse justify-between mt-4">
            <div className="flex flex-row-reverse items-center">
                <span className="w-[34px] h-[34px] ml-2">
                    <img className="w-[34px] h-[34px] rounded-full" src={profileImg} alt="my picture!" />
                </span>
                <span className="font-dana font-normal text-sm ml-2 flex items-center">{userName}</span>
            </div>

            <div>
                <AccessLevel show={Show} setShow={setShow} />
            </div>
        </div>
    );
}