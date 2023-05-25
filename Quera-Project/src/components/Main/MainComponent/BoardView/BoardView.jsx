import Draggable from 'react-draggable';
import { BoardColumns } from './BoardColumns';
import { Tasks } from './Tasks';
import AddIcon from '@mui/icons-material/Add';

export const BoardView = () => {

    return (
        <Draggable handle=".my-draggable-handle" cancel=".my-draggable-container p" axis="x" >
            <div className="my-draggable-handle absolute top-[140px] right-[379px] gap-5 flex flex-row justify-end items-start p-0 flex-none order-3 flex-grow-0 z-10"> {/*overflow*/}

                <BoardColumns name={"Done"} color={"green"}>
                </BoardColumns>

                <BoardColumns name={"To Do"} color={"orange"}>
                    <Tasks numTasks={1} imageExist={false} projectCategory={true} lessonsCategory={true} />
                </BoardColumns>

                <BoardColumns name={"Pending"} color={"yellow"}>
                    <Tasks numTasks={1} imageExist={false} projectCategory={true} lessonsCategory={true} />
                    <Tasks numTasks={1} imageExist={true} projectCategory={true} lessonsCategory={false} />
                    <Tasks numTasks={2} imageExist={false} projectCategory={true} lessonsCategory={true} />
                </BoardColumns>

                <BoardColumns name={"In progress"} color={"blue"}>
                </BoardColumns>

                <BoardColumns name={"Open"} color={"orange"}>
                    <Tasks numTasks={1} imageExist={false} projectCategory={true} lessonsCategory={true} />
                    <Tasks numTasks={1} imageExist={true} projectCategory={true} lessonsCategory={false} />
                </BoardColumns>

                {/* ساختن برد جدید */}
                <div className="bg-white w-[250px] h-[41px] left-[788px] gap-5 flex flex-col items-start p-0 flex-none order-0 flex-grow-0 border-t-[1px] shadow-md rounded-md">
                    <div className="bg-white w-[150px] h-[25px] ml-[100px] absolute top-2 gap-1 flex flex-row  items-center p-0 flex-none order-1 flex-grow-0 ">
                        <label className="absolute left-[17px] font-dana font-medium text-base text-right text-gray-800 ">ساختن برد جدید <AddIcon fontSize='' className="w-[24px] h-[24px] flex-none order-0 flex-grow-0"></AddIcon></label>
                    </div>
                </div>

            </div>
        </Draggable>
    );
}