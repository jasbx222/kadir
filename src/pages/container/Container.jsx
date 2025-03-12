import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "../../componentes/sidemenu/SideMenu";
import HomePage from "../home/HomePage";
import Login from "../login/Login";
import "../container/Container.css";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import ProfileAdd from "../../componentes/ProfileAdd";
const Container = () => {
  const [show, setShow] = useState(true);
  const HandleButtonMenu = () => {
    setShow(!show);
  };

  return (
    <Router>
      <button className="btn" onClick={HandleButtonMenu}>
        <AlignJustify size={40} />{" "}
      </button>
      <div className="flex justify-between items-center">
        {show ? <SideMenu /> : ""}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileAdd />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Container;
