
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from "./Pages/Login/Login";
// import {Forget} from "./Pages/Forget/Forget";
// import {Reset} from "./Pages/Reset/Reset";
import {Register} from "./Pages/Register/Register";
import {Board} from "./Pages/Board/Board";

function App() {

  return (

    <div className='bg-white'>
      
      <div >
    
      <Routes >
          
          <Route path='/register' element={<Register />}  />
          {/* <Route path="/" element={<Forget />} /> */}
          {/* <Route path="/" element={<Reset />} />  */}
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
        

      </Routes>
   
    
    <div className=' h-bgh z-0 absolute flex overflow-hidden bottom-0 '><div className='w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 '></div></div>
    </div></div>
  )
}

export default App
