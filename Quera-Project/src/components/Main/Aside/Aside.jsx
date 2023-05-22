/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { Lessons } from './lessons';
import { MyWork } from './MyWork';
import { useState } from 'react';

export const Aside = () => {
    const Lesson = [
        {id : 1, nameLesson: "درس مدیریت پروژه", colorSquare: <SquareRoundedIcon className="text-squareG1"></SquareRoundedIcon>},
        {id : 2, nameLesson: "درس کامپایلر", colorSquare: <SquareRoundedIcon className="text-squareR"></SquareRoundedIcon>},
        {id : 3, nameLesson: "درس طراحی الگوریتم", colorSquare: <SquareRoundedIcon className="text-squareG2"></SquareRoundedIcon>},
    ]
    const WorkS = [
        {id : 1, colorSquare: <SquareRoundedIcon className="text-squareP"></SquareRoundedIcon>},
    ]
    const [Mylesson, setMYlesson] = useState(Lesson);
    const [WorkSpace, setWorkSpace] = useState(WorkS);
    
    return(
        <aside className='w-[330px] border-solid border-l-2 border-gray-200 h-[1024px] flex flex-col justify-start items-end'>
            {/* Quera task manager name */}
            <section className="ml-16 mt-14 w-full bg-namegradient bg-clip-text text-transparent text-4xl font-dana font-extrabold tracking-tight text-headerSize text-end">کوئرا تسک منیجر</section>

            {/* workspace */}
            <section className="w-[314px] mr-0">
                {/* workspaces */}
                <article className="flex justify-between items-center flex-row-reverse mt-6">
                    <span className="font-dana text-base font-semibold">ورک اسپیس ها</span>
                    <span className=""><KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></span>
                </article>

                {/* workspace search */}
                <article>
                    <form className='w-full mt-3'>
                    <input  dir="rtl" className="font-dana w-full pr-8 font-medium text-xs bg-neutral-100 h-[40px] rounded focus:outline-none" type="search" name="search-workspace" placeholder='جست و جو کنید' />
                    <span className="-ml-7 text-gray-500 text-xs"><SearchOutlinedIcon></SearchOutlinedIcon></span>
                    </form>
                </article>

                {/* new workspace */}
                <article className="flex flex-row justify-center items-center mt-4 h-[32px] rounded-md bg-makeWorkspace">
                    <button className="font-dana font-semibold text-xs h-[32px] bg-makeWorkspace">
                        ساختن اسپیس جدید
                        <span className="text-xs"><AddBoxOutlinedIcon></AddBoxOutlinedIcon></span>
                    </button>
                    
                </article>

                {/* lessons & projects */}
                <article className="h-[650px] bg-sky-100">
                    {Mylesson.map((item)=>{
                        return (<Lessons key={item.id} lessonName={item.nameLesson} squareColor={item.colorSquare} />)
                    })}
                    {WorkSpace.map((item)=>{
                        return (<MyWork key={item.id} squareColor={item.colorSquare}/>)
                    })}
                </article>
            </section>

            {/* exit & profile */}
            <section>
                {/* profile */}
                <article>
                    
                </article>
                
                {/* exit */}
                <article>

                </article>
            </section>
        </aside>
    );
}