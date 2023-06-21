import { createContext, useContext, useState } from "react";
import { baseurl } from "../../assets/baseUrl";
import { useEffect } from "react";
import axios from "axios";

const AuthContext=createContext()
export const AuthProvider=({children})=>{
      const [refreshToken,setRefreshToken]=useState(()=>{
        return  localStorage.refreshToken ? localStorage.refreshToken:""
        })
    const [token,setToken]=useState(()=>{
      return  localStorage.token  ? localStorage.token:null
    })
  useEffect(()=>{
      async function refresh(){
        
              await axios.post(baseurl+"/auth/refreshtoken",{
                refreshToken:refreshToken
              }).then((response)=>{ 
                localStorage.token= response.data.data.accessToken
              })
        }
        refresh()
  },[])
       
      
    return ( 
    <AuthContext.Provider value={{token,setToken,setRefreshToken,refreshToken}}>
        {children}
    </AuthContext.Provider>
    )
}
export const useAuth=()=> useContext(AuthContext)