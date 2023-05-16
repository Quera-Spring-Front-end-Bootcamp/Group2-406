
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './Pages/Login/Login';
import {Register} from "./Pages/Register/Register";
import {Forget} from "./Pages/Forget/Forget";
import {Reset} from "./Pages/Reset/Reset";

function App() {

  return (

    <div className='bg-white'>
      
      <div >
    
      <Routes >
          
          <Route path='/' element={<Register />}  />
          <Route path="/" element={<Forget />} />
          <Route path="/" element={<Reset />} /> 
          <Route path="/" element={<Login />} />
        

      </Routes>
   
    
    <div className=' h-bgh z-0 absolute flex overflow-hidden bottom-0 '><div className='w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 '></div></div>
    </div></div>
  )
}

export default App
