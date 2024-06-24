import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import BrandsPage from "./Pages/BrandsPage";
import BranchesPage from "./Pages/BranchesPage";
import FranchisePage from "./Pages/FranchisePage";
import AdminBrands from "./components/Dashboard/Brands/AdminBrands";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import BrandDetailsPage from "./Pages/DashboardPage/BrandDetailsPage";
import Labels from "./components/Dashboard/Labels/Labels";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Dashboard/Brands" element={<AdminBrands />} />
        <Route path="/Dashboard/Labels" element={<Labels />} />
        <Route
          path="/Dashboard/BrandDetails/:id"
          element={<BrandDetailsPage />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
