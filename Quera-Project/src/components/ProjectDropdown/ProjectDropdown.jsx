import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ShareIcon from '@mui/icons-material/Share';

export const ProjectDropdown=({show,setShow,id,RemoveProject})=>{
    
 return <div dir="rtl" style={{visibility:show ? "visible":"hidden",width:'190px',height:show ? "190px":"0",}}  className=" overflow-hidden flex transition-all flex-col absolute  gap-3  shadow-lg rounded-lg p-3 bg-white">
      <div   className=" flex flex-row  cursor-pointer items-center gap-2">
      <AddCircleOutlineIcon className='!text-xl'/><div className=" my-auto font-dana  text-sm">ساختن تسک جدید</div>
      </div>
      <div className=" flex flex-row  cursor-pointer items-center gap-2">
      <EditRoundedIcon className='!text-xl'/><div className="font-dana  text-sm">ویرایش نام پروژه</div>
      </div>
      
      <div className=" flex flex-row  cursor-pointer items-center gap-2">
      <InsertLinkRoundedIcon className='!text-lg -rotate-45'/><div className="font-dana text-sm">کپی لینک</div>
      </div>
      <div onClick={()=>{RemoveProject(id)}}  className=" flex flex-row   cursor-pointer items-center gap-2">
      <DeleteTwoToneIcon  className=' text-red-600 !text-lg'/><div className=" text-red-600 font-dana text-sm">حذف</div>
      </div>
      <div className=" flex flex-row  cursor-pointer bg-submitColor h-9 items-center px-3  rounded-md   gap-2">
      <ShareIcon className='text-white !text-lg '/><div className=" font-dana text-white text-sm">اشتراک‌گذاری </div>
      </div>


 </div>
}