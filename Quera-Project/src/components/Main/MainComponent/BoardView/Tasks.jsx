/* eslint-disable react/prop-types */
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import EditModal from './EditModal'
import { useState } from 'react';
import projectPic from "../../../../assets/images/tasks/project.jpg"

export const Tasks = ({ imageExist, projectCategory, lessonsCategory }) => {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    return (
        <div className="bg-white w-[250px] mb-[11px] p-[10px] box-border flex flex-col items-end border border-gray-100 shadow-md rounded-md hover:shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            dir='ltr'>

            <div className={imageExist ? 'bg-black w-[230px] h-[134px] mb-[18px]' : ''}>
                <img className={imageExist ? 'bg-black w-[230px] h-[134px] mb-[18px]' : ' invisible w-0 h-0'} src={projectPic}></img>
            </div>


            {/* top div  */}
            <div className=" w-[230px] h-[42px] flex flex-col items-end gap-[9px] mb-[18px] p-0 flex-none order-2 self-stretch flex-grow-0">
                <article className="flex flex-row-reverse items-center w-full cursor-pointer justify-between">
                    <label className=" w-[50px] font-dana font-medium text-right text-xs text-gray-600">پروژه اول</label>
                    <span className={hovered ? 'rounded-full bg-yellow-200 w-[24px] h-[24px] flex justify-center items-center text-[9px] font-medium' : 'opacity-0'}>NM</span>
                </article>
                <div className="w-[230px] h-[18px] gap-1 flex flex-row-reverse items-center p-0 flex-none order-1 self-stretch flex-grow-0 ">
                    <label className="font-dana font-medium text-xs text-right">.این یک تیتر برای این تسک است</label>
                    <FormatAlignRightIcon sx={{ fontSize: 12 }} color="disabled"></FormatAlignRightIcon>
                </div>
            </div>

            {/* second div  */}
            <div className="w-[125px] h-[16px] flex flex-row items-start gap-2 mb-[18px] p-0 flex-none flex-grow-0 order-3 ">
                {/* 2/12 tick */}
                <div className="w-[50px] h-[16px] flex flex-row justify-end items-center p-0 gap-[2px] flex-none">
                    <label className="w-[29px] h-[15px] font-dana font-medium text-xs justify-center text-right text-gray-400 ">۲ / ۱۲</label>
                    <CheckBoxOutlinedIcon fontSize="inherit" color="disabled"></CheckBoxOutlinedIcon>
                </div>

                {/* date */}
                <div className="w-[75px] h-[16px] gap-[2px] flex flex-row justify-end items-center p-0 order-1 ">
                    <label className="w-[65px] h-[15px] font-dana font-medium text-xs text-right text-gray-800" dir="rtl">۵مهر - فرد</label>
                    <OutlinedFlagRoundedIcon fontSize="small" htmlColor="red"></OutlinedFlagRoundedIcon>
                </div>

            </div>

            {/* Third div  */}
            <div className={(!projectCategory || lessonsCategory) ? 'w-[69px] h-[19px] flex flex-row items-start justify-between p-0 order-4' : 'order-4'}>
                <div className={projectCategory ? 'w-[29px] h-[19px] flex items-center justify-center p-2 bg-purple-200 rounded-l-2xl w-29 h-19' : 'invisible w-0 h-0'}>
                    <label className=" w-[21px] h-[15px] font-dana font-medium text-[11px] text-right text-gray-800 ">پروژه</label>
                </div>
                <div className={lessonsCategory ? 'w-[29px] h-[19px] flex items-center justify-center p-2 bg-green-200 rounded-l-2xl w-29 h-19' : 'invisible w-0 h-0'}>
                    <label className=" w-[21px] h-[15px] font-dana font-medium text-[11px] text-right text-gray-800 ">درس</label>
                </div>

            </div>

            {/* Hidden  */}
            <div className={hovered ? 'transition ease-in-out delay-150 duration-300 opacity-100 w-[230px] h-[28px] mt-[18px] order-5 border-t border-gray-200 flex flex-row justify-between items-center pt-4' : "transition ease-in-out delay-150 duration-300 opacity-0 h-[0px]"}>
                <button onClick={openModal}><MoreHorizIcon fontSize='small' htmlColor='#323232' className={hovered ? "opacity-100" : "opacity-0"}></MoreHorizIcon></button>
                {showModal && <EditModal className={!hovered ? setShowModal(false) : null} />}
                <TaskAltOutlinedIcon fontSize='small' htmlColor='#323232' className={hovered ? "opacity-100" : "opacity-0"}></TaskAltOutlinedIcon>
            </div>
        </div>
    )
}