import './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Forget from "./Pages/Forget/Forget.jsx";
import Reset from "./Pages/Reset/Reset.jsx";
import Layout from "./Pages/Layout/Layout.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="Register" element={<Register />} />
          <Route path="Forget" element={<Forget />} />
          <Route path="Reset" element={<Reset />} />
          <Route path="Login" index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
