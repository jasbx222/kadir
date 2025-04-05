import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonShowMenu from "./componentes/ButtonShowMenu/ButtonShowMenu";
import Requests from "./pages/requests/Requests";
import AdsPage from "./pages/ads/AdsPage";
import AccountSettings from "./pages/Acountsettings/AcountSettings";
import AddCategoryManager from "./pages/CategoryManager/AddCategoryManager";
import Header from "./componentes/header/Header";
import Artisans from "./pages/artisans/Artisans";
import ArtisanForm from "./pages/artisans/AddArtisans";
import DeleteCategory from "./pages/CategoryManager/method/DeleteCategory";
import Logout from "./pages/logout/Logout";
import ContextApi from "./componentes/auth/context/ContextApi";
import AdsById from "./pages/ads/method/AdsById";
import GetByIdCat from "./pages/CategoryManager/method/GetByIdCat";
import GetById_Pro from "./pages/artisans/method/GetById_Pro";
import DeleteAdsItem from "./pages/ads/method/DeleteAdsItem";
import DeletePro from "./pages/artisans/method/DeletePro";
import UpdateCategory from "./pages/CategoryManager/method/Update";
import UpdateAds from "./pages/ads/method/UpdateAds";
import FormUpdate from "./pages/artisans/method/UpdatePro";
import MediaAndPolicy from "./pages/policy/MediaAndPolicy";
import ArtisansEndEx from "./pages/artisans/method/ArtisansEndEx";
import ArtisansActive from "./pages/artisans/method/ArtisansActive";
import DeleteOrder from "./pages/requests/method/DeleteOrder";
import AddImage from "./pages/artisans/image/AddImage";
import Notfound from "./componentes/notFound/notFound";
import DeleteImage from "./pages/artisans/image/DeleteImage";
import Image from "./pages/artisans/image/Image";
function RoutePage() {
  return (
    <div>
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
              <Route path="/professional" element={<Artisans />} />
              <Route path="/request" element={<Requests />} />
              <Route path="/ads" element={<AdsPage />} />
              <Route path="/add_professional" element={<ArtisanForm />} />
              <Route
                path="/AddCategoryManager"
                element={<AddCategoryManager />}
              />
              <Route path="/accountSettings" element={<AccountSettings />} />
              <Route path="/delete/category/:id" element={<DeleteCategory />} />
              <Route path="/update/category/:id" element={<UpdateCategory />} />
              <Route path="/update/ads/:id" element={<UpdateAds />} />
              <Route path="/policy" element={<MediaAndPolicy />} />
              <Route path="/view/cat/:id" element={<GetByIdCat />} />
              <Route path="/view/ads/:id" element={<AdsById />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/delete/ads/:id" element={<DeleteAdsItem />} />
              <Route path="/veiw_professional/:id" element={<GetById_Pro />} />
              <Route path="/delete/professional/:id" element={<DeletePro />} />
              <Route path="/update/pro/:id" element={<FormUpdate />} />
              <Route path="add_image" element={<AddImage />} />
              <Route path="/image/:id" element={<Image />} />
              <Route path="delete_image/:id" element={<DeleteImage />} />
              <Route path="/expier_date" element={<ArtisansEndEx />} />
              <Route path="/active_professional" element={<ArtisansActive />} />
              <Route path="/delete_order/:id" element={<DeleteOrder />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </div>
        </ContextApi>
      </Router>
    </div>
  );
}

export default RoutePage;
