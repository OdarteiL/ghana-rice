import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import CartPage from "../pages/Cart/CartPage";
import LoginInPage from "../pages/loginIn/LoginInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import ErrorPage from "../pages/404/ErrorPage";
import UserAccountPage from "../pages/Account/UserAccountPage";
import ProductsPage from "../pages/Products/ProductsPage";
import ProductDetailPage from "../pages/Products/ProductDetailPage";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/user-account" element={<UserAccountPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Route>
    </>
  )
);

export default AppRouter;
