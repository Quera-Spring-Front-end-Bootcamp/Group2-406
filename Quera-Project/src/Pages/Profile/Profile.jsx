import { ProfileAside } from "./InnerProfileAside";
import { Personal } from "./Personal";
import { Verify } from "./Verify";
import { Settings } from "./Settings";
import { Route,Routes } from "react-router-dom";

 export const Profile=()=>{
    
   return (
      <>
         <ProfileAside/>
         <Routes>
            <Route path="/" element={<Personal/>}/>
            <Route path="Verify" element={<Verify/>}/>
            <Route path="Settings" element={<Settings/>}/>
         </Routes>
      </>
   );
 }