/* eslint-disable react/prop-types */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export function Lessons({lessonName, squareColor}) {

    return (
        <div className="flex flex-row-reverse justify-start mt-4 group/lesson">
            <span>{squareColor}</span>
            <span className="font-dana mr-2 font-medium text-base mt-1 w-[260px] text-end">{lessonName}</span>
            <span className=" text-start opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
        </div>
    );
}