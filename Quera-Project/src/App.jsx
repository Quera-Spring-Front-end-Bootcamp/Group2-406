import './App.module.css';
import { AuthProvider } from './components/ContextApi/AuthContext';
import { Routes, Route } from "react-router-dom";
import { Forget, Login, Reset, Register, Main, Profile } from "./Pages";
import { Layout } from "./components/Layout/Layout";
import { ThemeProvider } from './components/ThemeContext/ThemeContext';

function App() {

  return (
    <>
      <div className='bg-white font-dana'>
        <AuthProvider>
          <ThemeProvider>
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
        </ThemeProvider>
        </AuthProvider>
      </div>
    </>
  )
}

export default App