import { Route, Routes } from "react-router";
import { RootLayout } from "../root-layout/RootLayout";
import HomePage from "../../pages/home-page";
import CategoryPage from "../../pages/category-page";
import ProductPage from "../../pages/product-page";
import NotFoundPage from "../../pages/not-found-page";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
