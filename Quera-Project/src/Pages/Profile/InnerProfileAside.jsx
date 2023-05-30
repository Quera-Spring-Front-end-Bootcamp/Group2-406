import EastIcon from '@mui/icons-material/East';
import ManageAccountsIcon from '@mui/icons-material/ManageAccountsOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import { useNavigate } from 'react-router-dom';
export const ProfileAside=({page,setPage})=>{
   const Navigate=useNavigate()
    return <aside dir='rtl' className=' border-solid border-l-2 border-gray-200 h-screen w-[340px] float-right flex flex-col pt-10  pr-[50px]'>
         <section className="  w-full bg-namegradient bg-clip-text text-transparent  float-right font-dana font-extrabold tracking-tight text-headerSize ">کوئرا تسک منیجر</section>
         <section className='mt-[79px] mb-10'><button className='h-[39px] w-[110px] text-white rounded-lg bg-[#208D8E]'><EastIcon/> بازگشت</button></section>
         <div className='flex flex-col  ml-6 gap-8'>
            <section onClick={()=>{setPage(1),Navigate("./Personal")}} style={{backgroundColor:page==1 ? "#C5FFFF":"transparent",fontWeight:page==1 ? "600":"500s"}} className='  rounded cursor-pointer flex flex-row font-dana pr-2 py-1  transition-all duration-300  gap-[11px]'><ManageAccountsIcon/><p>اطلاعات فردی</p></section>
            <section onClick={()=>{setPage(2),Navigate("./Verify")}} style={{backgroundColor:page==2 ? "#C5FFFF":"transparent",fontWeight:page==2 ? "600":"500s"}} className='cursor-pointer flex rounded flex-row font-dana pr-2 py-1 transition-all duration-300 gap-[11px]'><VerifiedUserIcon/><p>اطلاعات حساب</p></section>
            <section onClick={()=>{setPage(3),Navigate("./Settings")}} style={{backgroundColor:page==3 ? "#C5FFFF":"transparent",fontWeight:page==3 ? "600":"500s"}} className='cursor-pointer flex rounded flex-row font-dana pr-2 py-1 transition-all duration-300 gap-[11px]'><SettingsIcon/><p>تنظیمات</p></section>
         </div>


    </aside>
          


    
}