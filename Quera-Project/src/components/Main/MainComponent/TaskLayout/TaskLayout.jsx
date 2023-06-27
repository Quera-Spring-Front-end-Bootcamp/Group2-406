import { Outlet, useParams,useOutletContext,Navigate } from "react-router-dom"
import { Header } from "../../Header/Header"
import { StatusHeader } from "../StatusHeader/StatusHeader"
import { ShareProject } from "../../Header/ShareProject/ShareProject"

export const TaskLayout=({Mylesson,setMylesson,showShareProject,setShareProject,TagDetails})=>{
  let {id}= useParams()
 let SelectedWorkspace= Mylesson.filter((item)=>{
    return item.projects.some((p)=>{
        return p.id == id
    })
  })
  
 let project= SelectedWorkspace.length > 0 ? SelectedWorkspace[0].projects.filter((item)=>{
   return item.id == id
  })[0]:"undefined"
  
    return SelectedWorkspace.length == 0  ?<Navigate to="/Main" /> :
    
    <>
    {/* share project page*/}
    { showShareProject && <ShareProject  members={project.members} show={showShareProject} setShow={setShareProject}/>}
   <Header id={id} show={showShareProject} setShow={setShareProject}  />
   <StatusHeader TagDetails={TagDetails} />
<Outlet context={project} />
    </>
    
}
export const useProject=()=>{
    return useOutletContext()
}