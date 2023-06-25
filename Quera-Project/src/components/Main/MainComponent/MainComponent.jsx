/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { StatusHeader } from "./StatusHeader/StatusHeader";
import { ProjectsBoard } from "./ProjectsBoard/ProjectsBoard";
import { BoardView } from "./BoardView/BoardView";
import { Calendar } from "./FullCalendar/Calendar";
import { Routes,Route } from "react-router-dom";
import { TaskLayout } from "./TaskLayout/TaskLayout";

export const MainComponent = ({
  boardViewVisible,
  listViewVisible,
  calenderViewVisible,
  TagDetails,
  Mylesson,
  setShareProject,
  showShareProject,
  ShowNewTask,
  setShowNewTask,
  setnewboard,
  newBoard,
  boards
 
}) => {
  return (
    <main className="w-full h-[844px]">
      <header>
        
      </header>
      <section>
        <Routes>
         <Route path="/:id" element={<TaskLayout setShowNewTask={setShowNewTask} ShowNewTask={ShowNewTask} Mylesson={Mylesson} showShareProject={showShareProject} setShareProject={setShareProject} TagDetails={TagDetails}/>}>
          <Route path="/:id/ColumnView" element={<ProjectsBoard/>} />
          <Route path="/:id/BoardView" element={<BoardView boards={boards}  setShow={setnewboard} newBoard={newBoard} />}/>
          <Route path="/:id/Calendar" element={  <Calendar/>}/>
         </Route>
        
        </Routes>
        
      </section>
    </main>
  );
};
