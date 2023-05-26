import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export const Footer = () => {

    return(
        <footer className="w-full h-[70px] flex flex-row justify-start items-start relative z-30">
                <button className="bg-footBtn w-[118px] h-[40px] rounded-md font-bold text-sm text-white font-dana">
                    تسک جدید
                    <AddBoxOutlinedIcon className="ml-1"></AddBoxOutlinedIcon>
                </button>
        </footer>
    );
}