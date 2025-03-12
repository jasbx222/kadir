import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "../componentes/sidemenu/SideMenu";
import HomePage from "./HomePage";
import Login from "./Login";
const Container = () => {
  return (
    <Router>
      <div className="flex justify-between items-center">
        
<SideMenu/>
        <Routes>
  
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
};

export default Container;
