import { Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import BrandsPage from "./Pages/BrandsPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/brands" element={<BrandsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
