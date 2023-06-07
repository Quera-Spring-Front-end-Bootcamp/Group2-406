/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { Aside, Footer,Newworkspace ,MainComponent, Header, ShareProject, ShareWorkspace, ShareTask, NewTask } from "../../components";
import { useEffect, useState } from "react";

export const Main = () => {
    const Lesson = [
        {id : 1, nameLesson: "درس مدیریت پروژه", colorSquare:"rgba(113, 253, 169, 1)", projects:[] },
        {id : 2, nameLesson: "کارهای شخصی", colorSquare:"rgba(146, 255, 7, 1)", projects:[] },
        {id : 3, nameLesson: "درس کامپایلر", colorSquare:"rgba(222, 136, 253, 1)", projects:[] },
        {id : 4, nameLesson: "درس طراحی الگوریتم", colorSquare:"rgba(252, 7, 51, 1)", projects:[] },
    ];
    const [showWork,setWork]=useState(false);
    const [Mylesson, setMylesson] = useState(Lesson);
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
    <>    
      {/* new workspace page*/}
      <Newworkspace Mylesson={Mylesson} setMylesson={setMylesson}  show={showWork} setshow={setWork}/>

      {/* share project page*/}
      <ShareProject show={showShareProject} setShow={setShareProject}/>

      {/* share workspace page*/} 
      <ShareWorkspace show={showShareWorkspace} setShow={setShareWorkspace} nameProjects={nameProjects} />

      {/* share task page*/}
      <ShareTask show={showShareTask} setShow={setShareTask} />

      {/* new task page*/}
      <NewTask TagDetails={TagDetails} setDetails={setDetails} show={ShowNewTask} setShow={setShowNewTask}/>

      <div className='w-[1440px] h-[1024px] mx-auto my-0 flex flex-row justify-center'>
          {/* left content */}
          <div className="flex flex-col justify-start w-[1080px] h-auto mr-5">
              <Header show={showShareProject} setShow={setShareProject} onBoardViewClick={handleBoardViewClick} onListViewClick={handleListViewClick} 
              onCalenderViewClick={handleCalenderViewClick} boardViewVisible={boardViewVisible} listViewVisible={listViewVisible} calenderViewVisible={calenderViewVisible} />

              <MainComponent TagDetails={TagDetails} boardViewVisible={boardViewVisible} listViewVisible={listViewVisible} calenderViewVisible={calenderViewVisible} />

              <Footer show={ShowNewTask} setShow={setShowNewTask} />
          </div>

          {/* right content */}
          <div className="w-[330] h-auto">
              <Aside setNameProjects={setNameProjects} Mylesson={Mylesson} setMylesson={setMylesson} setShareProject={setShareProject} setShareWorkspace={setShareWorkspace}  setWork={setWork} />
          </div>
      </div>
    </>);
}