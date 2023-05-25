/* eslint-disable react/prop-types */
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Tooltip, Button, Fade } from '@mui/material';

export const BoardColumns = ({ name, children, color }) => {
    return (
        <div className="w-[250px] h-[599px] left-[788px] gap-5 flex flex-col items-start p-0 flex-none order-5 flex-grow-0">

            {/* column header  */}
            <div className={`bg-white w-[250px] h-[41px] flex flex-row items-center justify-between border-t-[1px] ${color} shadow-md rounded p-2 gap-1`}>
                <div className="bg-white max-w-[140px] h-[25px] gap-1 flex flex-row-reverse items-center p-0 flex-none order-1 flex-grow-0">
                    <label className="w-fit font-dana font-medium text-base text-right text-gray-800">
                        {name}
                    </label>
                    <div className="flex flex-col justify-center items-center pt-[3px] pr-[4px] pb-[2px] pl-[2px]  gap-10 w-[13px] h-[17px] bg-gray-100 rounded-full">
                        <p className="w-[5px] h-[15px] font-dana font-medium not-italic text-xs">۰</p>
                    </div>
                </div>

                {/* hidden  */}
                <div className="w-[48px] h-[24px] gap-1 flex flex-row items-center p-0 flex-none flex-grow-0 transition ease-in-out delay-150 duration-300 opacity-0 hover:opacity-100">
                    <Tooltip title="افزودن تسک جدید" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="top" arrow >
                        <AddIcon fontSize='' className="w-[24px] h-[24px] flex-none order-0 flex-grow-0"></AddIcon>
                    </Tooltip>
                    <MoreHorizIcon fontSize=''></MoreHorizIcon>
                </div>
            </div>

            {/* tasks */}
            <div className="w-[250px] max-h-[770px] gap-[12px] flex flex-col items-start p-0 flex-none order-1 flex-grow-0">
                {children}
            </div>

        </div>
    );
}
