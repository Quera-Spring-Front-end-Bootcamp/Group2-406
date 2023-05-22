/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export const Projects = ({projectName}) => {
    
    return(
        <div className="flex flex-row-reverse justify-between items-end bg-asideProject rounded h-[33px] pr-1 mt-4 group/lesson">
            <span className="font-dana font-medium mt-4 cursor-default">{projectName}</span>
            <span className="mt-4 opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
        </div>
    );
}