/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useState } from 'react';
import { Projects } from './Projects';

export function Lessons({lessonName, squareColor}) {
    const project = [
        {id: 1, nameProject: "پروژه اول"},
        {id: 2, nameProject: "پروژه دوم"},
    ];

    const [Projects, setProjects] = useState(project);

    return (
        <div>
            {/* workSpace */}
            <div className="flex flex-row-reverse justify-start mt-4 group/lesson">
                <span>{squareColor}</span>
                <span className="font-dana mr-2 font-medium text-base mt-1 w-[260px] text-end cursor-default">{lessonName}</span>
                <span className=" text-start opacity-0 group-hover/lesson:opacity-100 transition-all duration-300">{<MoreHorizRoundedIcon className="!text-base text-gray-600"></MoreHorizRoundedIcon>}</span>
            </div>

            {/* projects */}
            <div className="flex flex-col mr-7">
                {Projects.map((item) => {
                    return(<Projects key={item.id} projectName={item.nameProject} />
                    );
                })};
            </div>
        </div>
    );
}