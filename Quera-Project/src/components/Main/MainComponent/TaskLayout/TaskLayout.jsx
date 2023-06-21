import { Outlet, useParams,useOutletContext,Navigate } from "react-router-dom"

export const TaskLayout=({Mylesson})=>{
  let {id}= useParams()
 let SelectedWorkspace= Mylesson.filter((item)=>{
    return item.projects.some((p)=>{
        return p.id == id
    })
  })
 let project= SelectedWorkspace[0].projects.filter((item)=>{
   return item.id == id
  })
  
    return project.length == 0  ?<Navigate to="/Main" /> :<Outlet context={project} />
}
export const useProject=()=>{
    return useOutletContext()
}