import { createContext, useContext, useState } from "react";

const AuthContext=createContext()
export const AuthProvider=({tokenValue,children})=>{
    const [token,setToken]=useState(tokenValue)
    return ( 
    <AuthContext.Provider value={{token,setToken}}>
        {children}
    </AuthContext.Provider>
    )
}
export const useAuth=()=> useContext(AuthContext)