import Draggable from 'react-draggable';
import { BoardColumns } from './BoardColumns';
import { Tasks } from './Tasks';
import AddIcon from '@mui/icons-material/Add';

export const BoardView = () => {

    return (
        <Draggable handle=".my-draggable-handle" cancel=".my-draggable-container p" axis="x" >
            <div className="my-draggable-handle h-[840px] absolute top-[185px] right-[395px] gap-5 flex flex-row justify-end items-start p-0 flex-none order-3 flex-grow-0 z-10"> {/*overflow*/}

                <BoardColumns name={"Done"} color={"border-green-400"}>
                </BoardColumns>

                <BoardColumns name={"To Do"} color={"border-orange-400"}>
                    <Tasks imageExist={false} projectCategory={true} lessonsCategory={true} />
                </BoardColumns>

                <BoardColumns name={"Pending"} color={"border-yellow-400"}>
                    <Tasks imageExist={false} projectCategory={true} lessonsCategory={true} />
                    <Tasks imageExist={true} projectCategory={true} lessonsCategory={false} />
                    <Tasks imageExist={false} projectCategory={true} lessonsCategory={true} />
                    <Tasks imageExist={false} projectCategory={true} lessonsCategory={true} />
                </BoardColumns>

                <BoardColumns name={"In progress"} color={"border-blue-400"}>
                </BoardColumns>

                <BoardColumns name={"Open"} color={"border-orange-400"}>
                    <Tasks imageExist={false} projectCategory={true} lessonsCategory={true} />
                    <Tasks imageExist={true} projectCategory={true} lessonsCategory={false} />
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