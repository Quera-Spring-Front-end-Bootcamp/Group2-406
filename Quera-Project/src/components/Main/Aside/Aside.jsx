/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { Lessons} from './Lessons';
import { ProfileAside } from './ProfileAside';

export const Aside = ({setWork,Mylesson,setMylesson}) => {

    return(
        <aside className='bg-white w-[330px] border-solid border-l-2 border-gray-200 h-[1024px] flex flex-col justify-start items-end relative z-30'>
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
                    <button onClick={()=>{setWork(true)}} className="font-dana font-semibold text-xs h-[32px] bg-makeWorkspace">
                        ساختن اسپیس جدید
                        <span className="text-xs"><AddBoxOutlinedIcon></AddBoxOutlinedIcon></span>
                    </button>
                </article>
             
                {/* lessons & projects */}
                <article className="h-[650px] overflow-y-scroll bg-scroll">
                    {Mylesson.map((item)=>{
                            return (<Lessons Mylesson={Mylesson} id={item.id} setMylesson={setMylesson} key={item.id} lessonName={item.nameLesson} 
                            projectname={item.projects}  squareColor={<SquareRoundedIcon style={{color:item.colorSquare}}/>} />)
                    })}
                </article>
            </section>

            {/* exit & profile */}
            <section className='w-full h-[70px] mt-2'>
                {/* profile */}
                <ProfileAside Name="نیلوفر موجودی" Abb="NM" />

                {/* exit */}
                <article className="text-stone-500 flex flex-row w-full justify-end items-end mt-2 cursor-pointer">
                    <span className='mr-2'>خروج</span>
                    <span><MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon></span>
                </article>
            </section>
        </aside>
    );
}