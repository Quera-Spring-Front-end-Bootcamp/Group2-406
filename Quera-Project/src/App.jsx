import './App.css';
import { Routes, Route} from "react-router-dom";
import { Forget, Login, Reset, Register, Board } from "./Pages";
import {Layout} from "./components/Layout/Layout";

function App() {

  return (

    <div className='bg-white'>
      
      <div >
    
      <Routes >
          <Route path='/' element={<Layout />}>
            <Route path='register' element={<Register />}  />
            <Route path="Forget" element={<Forget />} />
            <Route path="Reset" element={<Reset />} /> 
            <Route path="Login" index element={<Login />} />
            <Route path="Board" element={<Board />} />
          </Route>

      </Routes>
   
    
    <div className=' h-bgh z-0 absolute flex overflow-hidden bottom-0 '><div className='w-screen h-bgh bg-bggradient origin-top-right -skew-y-7 '></div></div>
    </div></div>
  )
}

export default App