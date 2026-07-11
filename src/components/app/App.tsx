import { Route, Routes } from "react-router";
import { RootLayout } from "../root-layout/RootLayout";
import HomePage from "../../pages/home-page";
import CategoryPage from "../../pages/category-page";
import ProductPage from "../../pages/product-page";
import NotFoundPage from "../../pages/not-found-page";
import CartPage from "../../pages/cart-page";
import CheckoutPage from "../../pages/checkout-page";
import OrderConfirmationPage from "../../pages/order-confirmation-page";
import LoginPage from "../../pages/login-page";
import SignupPage from "../../pages/signup-page";
import GuestRoute from "../guest-route/guest-route";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
