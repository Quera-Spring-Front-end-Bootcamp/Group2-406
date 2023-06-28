import './App.module.css';
import { AuthProvider } from './components/ContextApi/AuthContext';
import { Routes, Route} from "react-router-dom";
import { Forget, Login, Reset, Register, Main, Profile } from "./Pages";
import {Layout} from "./components/Layout/Layout";

function App() {

  return (
    <>
      <div className='bg-white font-dana'>
        <AuthProvider>
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element= {<Login />}  />
            <Route path='register' element={<Register />} />
            <Route path="Forget" element={<Forget />} />
            <Route path="Reset" element={<Reset />} />
            <Route path="Main/*" element={<Main />} />
            <Route path="Profile/*" element={<Profile />} />
           </Route>
        </Routes>
        </AuthProvider>
      </div>
    </>
  )
}

export default App