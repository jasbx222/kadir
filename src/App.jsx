import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Notfound from "./componentes/notFound/notFound";
import ButtonShowMenu from "./componentes/ButtonShowMenu/ButtonShowMenu";
import ReportPage from "./pages/reports/Reports";
import Requests from "./pages/requests/Requests";
import RequestDetals from "./pages/requests/RequestDetals";
import AdsPage from "./pages/ads/AdsPage";
import AccountSettings from "./pages/Acountsettings/AcountSettings";
import AddCategoryManager from "./pages/CategoryManager/AddCategoryManager";
import Header from "./componentes/header/Header";
import Artisans from "./pages/artisans/Artisans";
import ArtisanForm from "./pages/artisans/AddArtisans";
import UseContext from "./componentes/context/UseContext";
function App() {

  return (
 <UseContext>
      <Router>
        <Header />

        <div
          className="flex justify-evenly
          items-center"
        >
          <ButtonShowMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<Login />} />

            <Route path="/artisans" element={<Artisans />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/request" element={<Requests />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add_new_artisan" element={<ArtisanForm />} />
            <Route
              path="/AddCategoryManager"
              element={<AddCategoryManager />}
            />
            <Route path="/accountSettings" element={<AccountSettings />} />
            <Route path="/requestid/:id" element={<RequestDetals />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </div>
      </Router>
    </UseContext>
   
  );
}

export default App;
