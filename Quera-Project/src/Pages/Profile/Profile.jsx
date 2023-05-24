 import { useState } from "react"
import { ProfileAside } from "./InnerProfileAside"
import { Personal } from "./Personal"
import { Verify } from "./Verify"
import { Settings } from "./Settings"
 export const Profile=()=>{
    const [page,setPage]=useState(1)
    return <><ProfileAside page={page} setPage={setPage}/>
       {page==1 ? <Personal/>:page==2 ? <Verify/>:<Settings/> }
    </>
 }