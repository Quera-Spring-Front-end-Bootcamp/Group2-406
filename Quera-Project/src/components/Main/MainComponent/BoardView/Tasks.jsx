/* eslint-disable react/prop-types */
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useState } from 'react';

export const Tasks = ({ numTasks, imageExist, projectCategory, lessonsCategory }) => {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const tasks = Array.from({ length: numTasks }, (_, i) => (
        <div key={i}
            className="bg-white w-[250px] h-[133px p-[10px] mb-3 box-border flex flex-col items-end border border-gray-100 shadow-md rounded-md hover:shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <div className={imageExist ? 'bg-black w-[230px] h-[134px] mb-[18px]' : ''}>
                <img className={imageExist ? 'bg-black w-[230px] h-[134px] mb-[18px]' : ' invisible w-0 h-0'} src="https://s3-alpha-sig.figma.com/img/1ff2/08fc/84a00a92e59b4eaa4703234f3437659c?Expires=1685923200&Signature=UeMOqkV1w38scmGxoFI04AHpQNG969oOeo869JXVvs9qwUd5Z~9cnu0qaoNrXLzyV0vXqNm50lRfH3KS57MhgiinTWMWB3Typ8Xc1HLJmUv9FmfTMeNhfVbh6ej3~OA5Gy6CKy52bA0t8UtrcYw080a1oBBII6YvxRnX1Czhgjp77Q5h~mViPGynuTzd4qgYfaxI-fyEUVgoGm4FUfr2FGGifRe8qyhTRPjgrCcA1E5Pz7kJoes1qv~j5wec-u4WhpwzOHXaMo7Tf5x1a-u3X1ekHhsbbvXENOxUUUmAqnD8Nww-2iHjDJlDc5qAg5SGyyL-ryhXgM8yi4bfBuMUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
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
            <div className={hovered ? ' w-[230px] h-[28px] mt-[18px] order-5 border-t border-gray-200  flex flex-row justify-between items-center pt-4' : "invisible w-0 h-0"}>
                <MoreHorizIcon fontSize='small' htmlColor='#323232'></MoreHorizIcon>
                <TaskAltOutlinedIcon fontSize='small' htmlColor='#323232'></TaskAltOutlinedIcon>
            </div>
        </div>
    ))

    return <div>{tasks}</div>
}
