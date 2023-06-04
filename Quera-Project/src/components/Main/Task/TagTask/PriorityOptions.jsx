/* eslint-disable react/prop-types */
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export const PriorityOptions = () => {
  return (
    <div className="relative  flex flex-col items-center ">
      <span className="absolute ">
        <div className="modal-content bg-white w-[160px] h-[189px]  flex flex-col items-end p-[8px] gap-[8px] absolute shadow-md rounded-lg mb-[10px]">
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              فوری
              <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              بالا
              <OutlinedFlagIcon className="text-yellow-400"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              متوسط
              <OutlinedFlagIcon className="text-blue-500"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-1">
              پایین
              <OutlinedFlagIcon className="text-gray-300"></OutlinedFlagIcon>
            </div>
            <div className=" flex flex-row justify-end items-center text-[13px] mt-2">
              حذف اولویت
              <CloseOutlinedIcon className="text-red-500"></CloseOutlinedIcon>
            </div>{" "}
        </div>
      </span>
    </div>
  );
};

// /* eslint-disable no-unused-vars */

// import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import { useState } from "react";
// export const PriorityOptions = () => {

//   return (
//     <div className="modal-content bg-white w-[160px] h-[199px]  flex flex-col items-end p-[12px] gap-[16px] absolute shadow-md rounded-lg "   >
//      <span className="absolute">
//      <div className=" flex flex-row justify-end items-center text-[13px]">
//         فوری
//         <OutlinedFlagIcon className="text-red-600"></OutlinedFlagIcon>
//       </div>
//       <div className=" flex flex-row justify-end items-center text-[13px]">
//         بالا
//         <OutlinedFlagIcon className="text-yellow-400"></OutlinedFlagIcon>
//       </div>
//       <div className=" flex flex-row justify-end items-center text-[13px]">
//         متوسط
//         <OutlinedFlagIcon className="text-blue-500"></OutlinedFlagIcon>
//       </div>
//       <div className=" flex flex-row justify-end items-center text-[13px]">
//         پایین
//         <OutlinedFlagIcon className="text-gray-300"></OutlinedFlagIcon>
//       </div>
//       <div className=" flex flex-row justify-end items-center text-[13px]">
//         حذف اولویت
//         <CloseOutlinedIcon className="text-red-500"></CloseOutlinedIcon>
//       </div>{" "}
//      </span>
//     </div>
//   );
// };
