import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export const Aside = () => {

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
                <article className="flex flex-row justify-center items-center mt-4 bg-zinc-300 h-[32px] rounded-md">
                    <button className="font-dana font-semibold text-xs h-[32px]">
                        ساختن اسپیس جدید
                        <span className="text-xs"><AddBoxOutlinedIcon></AddBoxOutlinedIcon></span>
                    </button>
                    
                </article>
                {/* lessons & projects */}
                <article>
                    
                </article>
            </section>
            {/* exit & profile */}
            <section>
                
            </section>
        </aside>
    );
}