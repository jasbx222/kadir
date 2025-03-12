import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "../componentes/sidemenu/SideMenu";
import HomePage from "./HomePage";
import Login from "./Login";
import './Container.css'
import { AlignJustify } from "lucide-react";
import { useState } from "react";
const Container = () => {
  const [show,setShow]=useState(true);
  const HandleButtonMenu =()=>{
    setShow(!show)
  }

  return (
    <Router>
       <button className="btn" onClick={HandleButtonMenu}><AlignJustify size={40}/> </button>
      <div className="flex justify-between items-center">
   
    {
      show ? <SideMenu/> :''
    }
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Container;
