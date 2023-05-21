import ChecklistIcon from '@mui/icons-material/Checklist';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


export const Header = () => {

    return(
        <header className='w-[1080px] h-[110px] flex flex-row justify-end mr-5 border-solid border-b-2 border-gray-200'>
            <div className='flex flex-row-reverse items-end'>
                <div className="ml-3 pb-7 flex flex-row justify-end items-center font-bold w-[90px] h-[25px]">
                    <span className="w-auto h-5 text-lg flex items-center pl-4 border-solid border-l-2 border-gray-200">پروژه اول</span>
                </div>
                
                <div className="ml-3 mr-0 pb-7 flex flex-row justify-end items-center w-[150px] h-[25px] border-solid border-b-2 border-teal-500">
                    <span className="w-auto h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200 text-teal-500">نمایش لیستی</span>
                    <span className="w-auto h-5 mr-2 flex items-center text-teal-500">{<ChecklistIcon></ChecklistIcon>}</span>
                </div>
                <div className="ml-3 mr-0 pb-7 flex flex-row justify-end items-center w-[160px] h-[25px]">
                    <span className="w-auto h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200">نمایش ستونی</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<SpaceDashboardOutlinedIcon></SpaceDashboardOutlinedIcon>}</span>
                </div>
                <div className="mr-0 pb-7 flex flex-row justify-end items-center w-[90px] h-[25px] ">
                    <span className="w-100 h-5 mr-2 font-semibold flex items-center pl-4 border-solid border-l-2 border-gray-200">تقویم</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>}</span>
                </div>
                <div className="mr-0 pb-7 font-semibold flex flex-row justify-start items-center w-[555px] h-[25px]">
                    <span className="w-auto mr-2 h-5 flex items-center">اشتراک گذاری</span>
                    <span className="w-auto h-5 mr-2 flex items-center">{<ShareOutlinedIcon></ShareOutlinedIcon>}</span>
                </div>
            </div>
        </header>
    );
}