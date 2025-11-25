import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import SellerRoutes from "./SellerRoutes";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/seller/*"
          element={
            <ProtectedRoute allowedRoles={['seller']}>
              <SellerRoutes />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
