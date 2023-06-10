/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
export const CalendarTask = ({ showCalendar, setShowCalendar }) => {
  const [value, setValue] = useState(new Date());

  return (
    <div
      className=" bg-gray-100  fixed "
      style={{ visibility: showCalendar ? "visible" : "hidden" }}
    >
      <section
        className="shadow-lg rounded-lg bg-white w-[517px] h-[350px] flex flex-col "
        dir="rtl"
      >
        {/*section-top*/}
        <article className="w-full  flex flex-row justify-center items-center  font-dana text-[16px]  font-bold h-1/5">
          <span className=" w-1/2  items-center mr-3">
            <CalendarTodayOutlinedIcon className="text-slate-400"></CalendarTodayOutlinedIcon>
            <span className="mr-2">زمان شروع</span>
          </span>
          <span className="w-1/2    items-center  border-r-1">
            <CalendarTodayOutlinedIcon className="text-slate-400 mr-2"></CalendarTodayOutlinedIcon>
            <span className="mr-2">زمان پایان </span>
          </span>
        </article>
        {/*section-top*/}

        {/* body-section */}
        <article className=" h-[290px] flex flex-row w-full">
          <div className="w-[230px] border-zinc-400  bg-slate-100 p-3 pt-6 font-dana  font-semibold">
            <div className="flex justify-between h-7">
              <span>امروز</span>
              <span className="text-slate-400">یکشنبه</span>
            </div>
            <div className="flex justify-between h-7">
              <span>کمی بعد</span>
              <span className="text-slate-400">۱۷:۳۹</span>
            </div>{" "}
            <div className="flex justify-between  h-7">
              <span>فردا</span>
              <span className="text-slate-400">دوشنبه</span>
            </div>
            <div className="flex justify-between h-7">
              <span>این آخر هفته</span>
              <span className="text-slate-400">جمعه</span>
            </div>{" "}
            <div className="flex justify-between  h-7">
              <span>هفته ی آینده</span>
              <span className="text-slate-400">شنبه</span>
            </div>{" "}
            <div className="flex justify-between h-7">
              <span>آخر هفته ی آینده</span>
              <span className="text-slate-400">۴ تیر</span>
            </div>{" "}
            <div className="flex justify-between h-7">
              <span>دو هفته دیگر</span>
              <span className="text-slate-400">۱۱ تیر</span>
            </div>{" "}
            <div className="flex justify-between h-7">
              <span>۴ هفته دیگر </span>
              <span className="text-slate-400">۱ مرداد</span>
            </div>
          </div>
          <div className="  pr-4 w-[100px] h-12">
            <Calendar
              className=" h-0  px-4"
              calendar={persian}
              locale={persian_fa}
              value={value}
              onChange={setValue}
            />
          </div>
        </article>
      </section>
    </div>
  );
};
