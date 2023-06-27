/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { Aside, Footer,Newworkspace ,MainComponent, ShareTask, NewTask } from "../../components";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/ContextApi/AuthContext";
export const Main = () => {
    const {token,fetchData}=useAuth()
    const [showWork,setWork]=useState(false);
    // sample=[{id:1,nameLesson:"abcde",members:[],colorSquare:"#ffff",edit:false,projects:[{id:1,nameProject:"abcde",boards:[{id:1 ,name:"pending",color:"#ffff",tasks:[]}]}]}]
    const [Mylesson, setMylesson] = useState([])
    const [boards,setBoards]=useState([])
    
    useEffect(()=>{
       fetchData(setMylesson)    
    },[])
    
    const [TagDetails,setDetails]=useState([{id:1,tag:"درس",bgcolor:"#EBC8C8"},{id:2,tag:"کار",bgcolor:"#C3B7F2"},{id:3,tag:"پروژه",bgcolor:"#7FFAFA"}])
    const [showShareProject,setShareProject] = useState(false);
    
    const [showShareTask,setShareTask] = useState(false);

    const [ShowNewTask,setShowNewTask] = useState(false);

    const [boardViewVisible, setBoardViewVisible] = useState(false);
    const [listViewVisible, setListViewVisible] = useState(true);
    const [calenderViewVisible, setCalenderViewVisible] = useState(false);

    const handleBoardViewClick = () => {
      setBoardViewVisible(true);
      setListViewVisible(false);
      setCalenderViewVisible(false);
    }
    const handleListViewClick = () => {
      setBoardViewVisible(false);
      setListViewVisible(true);
      setCalenderViewVisible(false);
    }
    const handleCalenderViewClick = () => {
      setBoardViewVisible(false);
      setListViewVisible(false);
      setCalenderViewVisible(true);
    }

    return(
      token ?
    <>    
    
      {/* new workspace page*/}
      <Newworkspace Mylesson={Mylesson} setMylesson={setMylesson}  show={showWork} setshow={setWork}/>

      
      {/* <ShareProject2 show={showShareProject} setShow={setShareProject}/> */}

      

      {/* share task page*/}
      <ShareTask show={showShareTask} setShow={setShareTask} />

      {/* new task page*/}
      <NewTask TagDetails={TagDetails} setDetails={setDetails} show={ShowNewTask} setShow={setShowNewTask}/>

      <div className='w-[1440px] h-[1024px] mx-auto my-0 flex flex-row justify-center'>
          {/* left content */}
          <div className="flex flex-col justify-between w-[1080px] h-auto mr-5">
            
              

              <MainComponent setMylesson={setMylesson}  setBoards={setBoards} boards={boards} showShareProject={showShareProject} setShareProject={setShareProject} Mylesson={Mylesson} TagDetails={TagDetails} boardViewVisible={boardViewVisible} listViewVisible={listViewVisible} calenderViewVisible={calenderViewVisible} />

              <Footer show={ShowNewTask} setShow={setShowNewTask}  />
          </div>

          {/* right content */}
          <div className="w-[330] h-auto">
              <Aside setBoards={setBoards} Mylesson={Mylesson} setMylesson={setMylesson} setShareProject={setShareProject}   setWork={setWork} />
          </div>
      </div>
    </>:<Navigate to="/"/>);
}