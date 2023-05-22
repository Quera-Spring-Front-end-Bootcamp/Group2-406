/* eslint-disable react/prop-types */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export const MyWork = ({squareColor}) => {

    return(
        <div>
            {/* MyWork Workspace */}
            <div className="flex flex-row-reverse justify-start mt-4 group/lesson">
                <span>{squareColor}</span>
                <span className="font-dana mr-2 font-medium text-base mt-1 w-[260px] text-end cursor-default">کارهای شخصی</span>
                <span className="opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
            </div>

            {/* projects */}
            <div className="flex flex-col mr-7">
                <div className="flex flex-row-reverse justify-between items-end bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
                    <span className="font-dana font-medium mt-4 cursor-default">پروژه اول</span>
                    <span className="mt-4 opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
                </div>

                <div className="flex flex-row-reverse justify-between items-end rounded h-[33px] pr-1 mt-4 group/lesson">
                    <span className="font-dana font-medium text-base mt-4">پروژه دوم</span>
                    <span className="mt-4 opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
                </div>
            </div>
        </div>
    );
}