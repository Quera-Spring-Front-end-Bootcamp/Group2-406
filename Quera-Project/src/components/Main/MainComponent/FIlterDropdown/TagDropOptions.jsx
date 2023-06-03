import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
export const Tagdropoptions=({tagOptions,setOptions})=>{
return <article     dir='rtl' style={{display:tagOptions ? "flex":"none"}} className=" z-10 h-[85px] justify-between min-w-[90px] rounded-lg shadow-md absolute bg-white p-2 font-dana flex-col">
    <section className='flex flex-row  gap-1'>
      <CloseIcon className='!text-xs'/><small className=' text-[10px]'>حذف</small>
    </section>
    <section className='flex flex-row gap-1'>
        <EditIcon className=' !text-xs text-[#BDBDBD]'/><small className=' text-[10px]'>ویرایش تگ</small>
        </section>
        <section className='flex flex-row gap-1'>
        <ColorLensOutlinedIcon className=' !text-xs text-[#BDBDBD]'/><small className=' text-[10px]'>ویرایش رنگ</small>
        </section>
</article>


}