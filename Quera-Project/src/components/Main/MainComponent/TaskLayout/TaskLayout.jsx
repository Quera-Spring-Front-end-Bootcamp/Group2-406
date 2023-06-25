import { Outlet, useParams,useOutletContext,Navigate } from "react-router-dom"
import { Header } from "../../Header/Header"
import { StatusHeader } from "../StatusHeader/StatusHeader"

export const TaskLayout=({Mylesson,showShareProject,setShareProject,TagDetails})=>{
  let {id}= useParams()
 let SelectedWorkspace= Mylesson.filter((item)=>{
    return item.projects.some((p)=>{
        return p.id == id
    })
  })
  
 let project= SelectedWorkspace.length > 0 ? SelectedWorkspace[0].projects.filter((item)=>{
   return item.id == id
  }):"undefined"
  
    return SelectedWorkspace.length == 0  ?<Navigate to="/Main" /> :
    
    <>
   <Header id={id} show={showShareProject} setShow={setShareProject}  />
   <StatusHeader TagDetails={TagDetails} />
<Outlet context={project[0]} />
    </>
    
}
export const useProject=()=>{
    return useOutletContext()
}