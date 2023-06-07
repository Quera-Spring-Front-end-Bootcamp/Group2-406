/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import faLocale from "@fullcalendar/core/locales/fa";
import FullCalendar from "@fullcalendar/react";
export const Calendar = () => {
  return (
    <div className="mt-8 font-dana font-semibold ">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        locale={faLocale}
        contentHeight={"768px"}
        fixedWeekCount={false}
        weekNumberClassNames={"bg-orange-100"}
        dayCellContent={(props) => {
          return (
            <div className="flex  justify-end  ml-4 text-md font-bold h-[90px]">
              <div className="text-end mt-[95px] ">{props.dayNumberText}</div>
            </div>
          );
        }}
      />
    </div>
  );
};
