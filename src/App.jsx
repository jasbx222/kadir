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
import AdsPage from "./pages/ads/AdsPage";
import LocationButton from "./componentes/locaionbutton/LocationButton";

import { createContext } from "react";
import AccountSettings from "./pages/Acountsettings/AcountSettings";
import AddCategoryManager from "./pages/CategoryManager/AddCategoryManager";
export const Context = createContext(null);

function App() {
  const user = {
    name: "jassim mohamed",
    email: "jassim-mohamed@email",
    password: "123455678",
    img: "https://th.bing.com/th/id/R.a69e7e8f62a7410d57a19b74c7a43644?rik=ZyvQN437cofFVg&pid=ImgRaw&r=0",
  };
  return (
    <Router>
      <Context.Provider value={user}>
        {user.name === "jassim mohamed" ? <ButtonShowMenu /> : ""}
        <div className="flex justify-evenly
          gap-10
          items-center">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            {user.name === "jassim mohamed" ? (
              <Route path="/" element={<HomePage />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/request" element={<Requests />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/AddCategoryManager" element={<AddCategoryManager />} />
            <Route path="/accountSettings" element={<AccountSettings />} />
            <Route path="/location" element={<LocationButton />} />
            <Route path="/requestid/:id" element={<RequestDetals />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
