import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
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
import DeleteCategory from "./pages/CategoryManager/method/DeleteCategory";
import UpdateButton from "./pages/CategoryManager/method/Update";
import Logout from "./pages/logout/Logout";
import ContextApi from "./componentes/auth/context/ContextApi";
import AdsById from "./pages/ads/AdsById";
// import Notfound from "./componentes/notFound/NotFound";
import GetByIdCat from "./pages/CategoryManager/method/GetByIdCat";
import GetById_Pro from "./pages/artisans/method/GetById_Pro";
import DeleteAdsItem from "./pages/ads/DeleteAdsItem";
function App() {
  return (
    <div>
      <LoginPage />
      <Router>
        <ContextApi>
          <Header />
          <div
            className="flex justify-evenly
          items-center"
          >
            <ButtonShowMenu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artisans" element={<Artisans />} />
              <Route path="/reports" element={<ReportPage />} />
              <Route path="/request" element={<Requests />} />
              <Route path="/ads" element={<AdsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add_new_artisan" element={<ArtisanForm />} />
              <Route path="/AddCategoryManager"  element={<AddCategoryManager />}/>
              <Route path="/accountSettings" element={<AccountSettings />} />
              <Route path="/requestid/:id" element={<RequestDetals />} />
              <Route path="/delete/category/:id" element={<DeleteCategory />} />
              <Route path="/edit/:id" element={<UpdateButton />} />
              <Route path="/view/cat/:id" element={<GetByIdCat/>}/>
              <Route path="/view/ads/:id" element={<AdsById />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/delete/ads/:id" element={<DeleteAdsItem />} />
              <Route path="/veiw_professional/:id" element={<GetById_Pro />} />
        
              {/* <Route path="/*" element={<Notfound />} /> */}
            </Routes>
          </div>
        </ContextApi>
      </Router>
    </div>
  );
}

export default App;

export function LoginPage() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
