/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { set } from 'react-hook-form';

export const Footer = ({show, setShow}) => {

    return(
        <footer className="w-full h-[70px] flex flex-row justify-start items-start relative z-30">
                <button className="bg-footBtn w-[118px] h-[40px] rounded-md font-bold text-sm text-white font-dana" onClick={()=>{setShow(!show)}}>
                    تسک جدید
                    <AddBoxOutlinedIcon className="ml-1"></AddBoxOutlinedIcon>
                </button>
        </footer>
    );
}