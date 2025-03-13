import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Artisans from "./pages/artisans/Artisans";
import Notfound from "./componentes/notFound/notFound";
import ButtonShowMenu from "./pages/ButtonShowMenu/ButtonShowMenu";
import ReportPage from "./pages/reports/Reports";
import Requests from "./pages/requests/Requests";
import RequestDetals from "./pages/requests/RequestDetals";
function App() {
 
  return (
    <Router>
      <div className="flex justify-evenly items-center">
        <ButtonShowMenu/>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/request" element={<Requests />} />
          <Route path="/requestid/:id" element={<RequestDetals />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
