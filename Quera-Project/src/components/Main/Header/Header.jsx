/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ChecklistIcon from '@mui/icons-material/Checklist';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


export const Header = ({show, setShow}) => {

    return(
        <header className='w-full h-[110px] flex flex-row justify-end border-solid border-b-2 border-gray-200'>
            
            {/* project name */}
            <section className='flex flex-row-reverse items-end'>
                <article className="ml-3 pb-7 flex flex-row justify-end items-center font-bold w-[90px] h-[25px]">
                    <span className="w-auto h-5 text-lg flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana">پروژه اول</span>
                </article>

                {/* list view  */}
                <article className="ml-3 mr-0 pb-7 flex flex-row justify-end items-center w-[150px] h-[25px] border-solid border-b-2 border-teal-500 cursor-pointer">
                    <span className="w-auto h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 text-teal-500 font-dana">نمایش لیستی</span>
                    <span className="w-auto h-5 mr-2 flex items-center text-teal-500">{<ChecklistIcon></ChecklistIcon>}</span>
                </article>

                {/* column display */}
                <article className="ml-3 mr-0 pb-7 flex flex-row justify-end items-center w-[160px] h-[25px] cursor-pointer">
                    <span className="w-auto h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana">نمایش ستونی</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<SpaceDashboardOutlinedIcon></SpaceDashboardOutlinedIcon>}</span>
                </article>

                {/* calender */}
                <article className="mr-0 pb-7 flex flex-row justify-end items-center w-[90px] h-[25px] cursor-pointer">
                    <span className="w-100 h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 font-dana">تقویم</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>}</span>
                </article>

                {/* share */}
                <article className="mr-0 pb-7 font-semibold flex flex-row justify-start items-center w-[555px] h-[25px] cursor-pointer">
                    <span className="w-auto mr-2 h-5 flex items-center font-dana" onClick={()=>{setShow(!show)}}>اشتراک گذاری</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<ShareOutlinedIcon></ShareOutlinedIcon>}</span>
                </article>
            </section>
        </header>
    );
}