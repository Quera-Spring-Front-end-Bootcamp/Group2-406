import './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forget from "./Pages/Forget";
import Reset from "./Pages/Reset";
import Layout from "./Pages/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Register />} />
          <Route path="Forget" element={<Forget />} />
          <Route path="Reset" element={<Reset />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
