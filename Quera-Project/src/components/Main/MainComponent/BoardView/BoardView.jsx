import { BoardColumns } from './BoardColumns';
import { Tasks } from './Tasks';
import AddIcon from '@mui/icons-material/Add';

export const BoardView = () => {

    return (
        <div className="parent w-[1080px] h-[840px]  overflow-x-scroll scrollbar-hide" dir='rtl'>
            <div className="main-part w-fit h-[820px] gap-5 flex flex-row-reverse justify-end items-start p-0 flex-none order-3 flex-grow-0 z-10">
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
                <div className="bg-white w-[250px] h-[41px] gap-5 mt-[17px] ml-1 flex flex-col items-start p-0 flex-none order-0 flex-grow-0 border-t-[1px] shadow-md rounded-md" dir='ltr'>
                    <div className="bg-white w-[150px] h-[25px] ml-[100px] my-auto gap-1 flex flex-row justify-end items-center p-0 flex-none order-1 flex-grow-0 ">
                        <label className="font-dana font-medium text-base text-right text-gray-800 ">ساختن برد جدید <AddIcon fontSize='' className="w-[24px] h-[24px] flex-none order-0 flex-grow-0"></AddIcon></label>
                    </div>
                </div>

            </div>
        </div>
    );
}
