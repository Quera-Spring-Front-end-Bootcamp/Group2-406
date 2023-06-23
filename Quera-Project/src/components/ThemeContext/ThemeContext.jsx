import { createContext,useContext } from "react"
import { useState } from "react"

const Theme=createContext()
export const ThemeProvider=({children})=>{
    const [darkTheme,setDarkTheme]=useState(()=>{
       return localStorage.darkTheme ? localStorage.darkTheme: false
    })
    const [color,setColor]=useState(()=>{
        return localStorage.color ? localStorage.color:"#208D8E"
    })
   return <Theme.Provider value={{color,setColor,darkTheme,setDarkTheme}} >
    {children}
   </Theme.Provider>
}
export const useTheme=()=>useContext(Theme)