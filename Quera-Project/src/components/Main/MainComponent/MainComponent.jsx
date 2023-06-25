/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { StatusHeader } from "./StatusHeader/StatusHeader";
import { ProjectsBoard } from "./ProjectsBoard/ProjectsBoard";
import { BoardView } from "./BoardView/BoardView";
import { Calendar } from "./FullCalendar/Calendar";
import { Routes,Route } from "react-router-dom";
import { TaskLayout } from "./TaskLayout/TaskLayout";
import axios from "axios";
import { baseurl } from "../../../assets/baseUrl";
import { useAuth } from "../../ContextApi/AuthContext";

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
  fetchData,
  boards,
  setBoards
 
}) => {
  const {token}=useAuth()
  const newBoard=(data)=>{
    setBoards([...boards,{name:data.name,_id:data._id,color:data.color,position:data.position,project:data.project}])
  }
  const editBoard=(id,value,setEdit)=>{
    if(value){
      axios.put(baseurl + "/board/" + id,{
      name:value
    },{headers:{"x-auth-token":token}})
    .then((response)=>{
      setBoards(boards.map((item)=>{
        return {...item,name:item._id == id ? value:item.name }
      }))
      setEdit(false)
    })
    }
    
  }
  const deleteBoard=(id)=>{
    axios.delete(baseurl+"/board/"+ id,{headers:{"x-auth-token":token}})
    .then((response)=>{
      setBoards(boards.filter((item)=>{
        return item._id !=id
      }))
    })
    .catch((error)=>{
      console.log(error)
    })
      
  }
  return (
    <main className="w-full h-[844px]">
      <header>
        
      </header>
      <section>
        <Routes>
         <Route path="/:id" element={<TaskLayout setShowNewTask={setShowNewTask} ShowNewTask={ShowNewTask} Mylesson={Mylesson} showShareProject={showShareProject} setShareProject={setShareProject} TagDetails={TagDetails}/>}>
          <Route path="/:id/ColumnView" element={<ProjectsBoard/>} />
          <Route path="/:id/BoardView" element={<BoardView boards={boards} deleteBoard={deleteBoard} editBoard={editBoard}  setShow={setnewboard} newBoard={newBoard} />}/>
          <Route path="/:id/Calendar" element={  <Calendar/>}/>
         </Route>
        
        </Routes>
        
      </section>
    </main>
  );
};
