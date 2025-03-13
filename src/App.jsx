import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Artisans from "./pages/artisans/Artisans";
import Notfound from "./componentes/notFound/notFound";
import ButtonShowMenu from "./componentes/ButtonShowMenu/ButtonShowMenu";
import ReportPage from "./pages/reports/Reports";
import Requests from "./pages/requests/Requests";
import RequestDetals from "./pages/requests/RequestDetals";
import Department from "./pages/department/Department";
import AdsPage from "./pages/ads/AdsPage";
import LocationButton from "./componentes/locaionbutton/LocationButton";
function App() {
  return (
    <Router>
      <ButtonShowMenu />
      <div className="flex justify-evenly items-center">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/request" element={<Requests />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/location" element={<LocationButton />} />
          <Route path="/department" element={<Department />} />
          <Route path="/requestid/:id" element={<RequestDetals />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
