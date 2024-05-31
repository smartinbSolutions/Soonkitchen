import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import BrandsPage from "./Pages/BrandsPage";
import BranchesPage from "./Pages/BranchesPage";
import FranchisePage from "./Pages/FranchisePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        <Route path="/franchise" element={<FranchisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
