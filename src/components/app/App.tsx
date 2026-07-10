import CategoryPage from "../category-page";
import HomePage from "../home-page";
import { Container } from "../ui";
import { Route, Routes } from "react-router";
import { RootLayout } from "../root-layout/RootLayout";
import ProductPage from "../product-page";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route
          path="*"
          element={
            <Container>
              <p>404 — Página no encontrada</p>
            </Container>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
