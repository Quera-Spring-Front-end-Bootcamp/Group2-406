/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AccessLevel } from "./AccessLevel";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { AccessProject } from "./AccessProject";

export const SharedWithOther = ({profileImg, userName, Projects}) => {
    const accessLevel = [
        {id:1, levelAccess:"دسترسی کامل", description:"توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه"},
        {id:2, levelAccess:"دسترسی ویرایش", description:"توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد."},
        {id:3, levelAccess:"دسترسی کامنت", description:"توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد."},
        {id:4, levelAccess:"فقط دسترسی مشاهده", description:"توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد."},
    ];
    const projectLevel = [
        {id:1, levelProject:"همه پروژه ها"},
        {id:2, levelProject:"پروژه اول"},
    ];

    const [Project, setProject] = useState(projectLevel);
    const [ShowAcc,setShowAcc] = useState(false);
    const [ShowPro,setShowPro] = useState(false);
    const [Acc, setAcc] = useState("دسترسی کامل");
    const [Pro, setPro] = useState("همه پروژه ها");

    const AccValue = (value) => {
        setShowAcc(!ShowAcc);
        setAcc(value);
    }
    const ProValue = (value) => {
        setShowPro(!ShowPro);
        setPro(value);
    }

    Projects.map((item) => {
        setProject(...Project,{id: Date.now(), levelProject: toString(item)});
    });
        

    return(
        <div className="flex flex-row-reverse mt-4 items-start justify-between relative">
            {/* user name & img div */}
            <div className="flex flex-row-reverse items-center justify-start">
                <span className="w-[34px] h-[34px] ml-2">
                    <img className="w-[34px] h-[34px] rounded-full" src={profileImg} alt="picture!" />
                </span>
                <span className="font-dana font-normal text-sm ml-2 flex items-center">{userName}</span>
            </div>

            {/* buttons div */}
            <div className="flex flex-row-reverse">
                <button className="font-dana font-normal text-xs w-[111px] h-[27px] border-1 border-gray-200 rounded-md flex flex-row-reverse justify-center items-center ml-2" onClick={() => {setShowAcc(!ShowAcc)}}>
                    {Acc}
                    <KeyboardArrowDownOutlinedIcon className='!text-sm mr-2'></KeyboardArrowDownOutlinedIcon>
                </button>

                <button className="font-dana font-normal text-xs w-[111px] h-[27px] border-1 border-gray-200 rounded-md flex flex-row-reverse justify-center items-center" onClick={() => {setShowPro(!ShowPro)}}>
                    {Pro}
                    <KeyboardArrowDownOutlinedIcon className='!text-sm mr-2'></KeyboardArrowDownOutlinedIcon>
                </button>
            </div>

            {/* access level div */}
            <div className="w-[252px] h-[277px] z-20 flex flex-col gap-3 shadow-lg rounded-lg p-3 bg-white absolute left-0" style={{visibility: ShowAcc ? "visible":"hidden"}}>
                {accessLevel.map((item) => {
                    return(
                        <AccessLevel AccValue={AccValue} key={item.id} levelaccess={item.levelAccess} description={item.description}/>
                    );
                })}
            </div>  

            {/* access project div */}
            <div className="w-[150px] h-auto z-20 flex flex-col gap-3 shadow-lg rounded-lg p-3 bg-white absolute left-0" style={{visibility: ShowPro ? "visible":"hidden"}}>
                {Project.map((item) => {
                    return(
                        <AccessProject ProValue={ProValue} key={item.id} levelProject={item.levelProject} />
                    );
                })}
            </div> 
        </div>
    );
}