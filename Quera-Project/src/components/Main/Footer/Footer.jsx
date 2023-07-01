/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export const Footer = ({show, setShow}) => {

    return(
        <footer className="w-full h-[70px]  flex flex-row justify-start items-start relative z-20">
                <button className="bg-footBtn w-[118px] h-[40px] absolute rounded-md font-bold text-sm text-white font-dana" onClick={()=>{setShow(!show)}}>
                    تسک جدید
                    <AddBoxOutlinedIcon className="ml-1"></AddBoxOutlinedIcon>
                </button>
        </footer>
    );
}