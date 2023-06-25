/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { Aside, Footer,Newworkspace ,MainComponent, ShareProject, ShareWorkspace, ShareTask, NewTask } from "../../components";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../assets/baseUrl";
import { useAuth } from "../../components/ContextApi/AuthContext";
export const Main = () => {
    const {token}=useAuth()
    const [showWork,setWork]=useState(false);
    // sample=[{id:1,nameLesson:"abcde",members:[],colorSquare:"#ffff",edit:false,projects:[{id:1,nameProject:"abcde",boards:[{id:1 ,name:"pending",color:"#ffff",tasks:[]}]}]}]
    const [Mylesson, setMylesson] = useState([])
    const [boards,setBoards]=useState([])
    const fetchData=async()=>{
      await axios.get(baseurl+"/workspace/get-all",{headers:{"x-auth-token":token}})
       .then((response)=>{
        console.log(response)
        const workspaces=response.data.data
        setMylesson(workspaces.map((item)=>{
          return {id:item._id,nameLesson:item.name,members:item.members,colorSquare:item.color,edit:false,projects:item.projects.map((p)=>{
            return ({id:p._id,nameProject:p.name,members:p.members,boards:p.boards})
          })}
        }))
       })
       .catch((error)=>{
        console.log(error)
       })
    }
    useEffect(()=>{
       fetchData()    
    },[])
    const newBoard=(data)=>{
      setBoards([...boards,{name:data.name,_id:data._id,color:data.color,position:data.position,project:data.project}])
      fetchData()
    }
    const [TagDetails,setDetails]=useState([{id:1,tag:"درس",bgcolor:"#EBC8C8"},{id:2,tag:"کار",bgcolor:"#C3B7F2"},{id:3,tag:"پروژه",bgcolor:"#7FFAFA"}])
    const [showShareProject,setShareProject] = useState(false);
    const [showShareWorkspace,setShareWorkspace] = useState(false);
    const [showShareTask,setShareTask] = useState(false);

    const [nameProjects, setNameProjects] = useState([]);

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

      {/* share project page*/}
      <ShareProject show={showShareProject} setShow={setShareProject}/>
      {/* <ShareProject2 show={showShareProject} setShow={setShareProject}/> */}

      {/* share workspace page*/} 
      <ShareWorkspace show={showShareWorkspace} setShow={setShareWorkspace} nameProjects={nameProjects} />

      {/* share task page*/}
      <ShareTask show={showShareTask} setShow={setShareTask} />

      {/* new task page*/}
      <NewTask TagDetails={TagDetails} setDetails={setDetails} show={ShowNewTask} setShow={setShowNewTask}/>

      <div className='w-[1440px] h-[1024px] mx-auto my-0 flex flex-row justify-center'>
          {/* left content */}
          <div className="flex flex-col justify-between w-[1080px] h-auto mr-5">
            
              

              <MainComponent boards={boards} newBoard={newBoard} showShareProject={showShareProject} setShareProject={setShareProject} Mylesson={Mylesson} TagDetails={TagDetails} boardViewVisible={boardViewVisible} listViewVisible={listViewVisible} calenderViewVisible={calenderViewVisible} />

              <Footer show={ShowNewTask} setShow={setShowNewTask}  />
          </div>

          {/* right content */}
          <div className="w-[330] h-auto">
              <Aside setBoards={setBoards} setNameProjects={setNameProjects} Mylesson={Mylesson} setMylesson={setMylesson} setShareProject={setShareProject} setShareWorkspace={setShareWorkspace}  setWork={setWork} />
          </div>
      </div>
    </>:<Navigate to="/"/>);
}