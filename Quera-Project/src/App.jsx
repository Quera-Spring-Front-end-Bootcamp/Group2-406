
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './Pages/Login/login';
import {Register} from "./Pages/Register/Register.jsx";

import Forget from "./Pages/Forget";
import Reset from "./Pages/Reset";



function App() {

  return (

    <div className='bg-white'>
      
      <div >
    
      <Routes >
          
          <Route path='/' element={<Register />}  />
          <Route path="Forget" element={<Forget />} />
          <Route path="Reset" element={<Reset />} /> 
           <Route path="Login" element={<Login />} />
        

      </Routes>
   
    
    <div className=' h-bgh z-0 absolute flex overflow-hidden bottom-0 '><div className='w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 '></div></div>
    </div></div>
  )
}

export default App
