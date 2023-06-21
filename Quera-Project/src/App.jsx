import './App.module.css';
import { Routes, Route } from "react-router-dom";
import { Forget, Login, Reset, Register, Main, Profile } from "./Pages";
import { Layout } from "./components/Layout/Layout";
import { AuthProvider } from './components/ContextApi/AuthContext';
function App() {

  return (
    <>
      <div className='bg-white'>
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<AuthProvider> <Login /> </AuthProvider>} />
            <Route path='register' element={<Register />} />
            <Route path="Forget" element={<Forget />} />
            <Route path="Reset" element={<Reset />} />
            <Route path="Main" element={<Main />} />
            <Route path="Profile/*" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App