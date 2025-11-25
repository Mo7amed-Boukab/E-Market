import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/seller-dashboard/DashboardLayout';
import OverviewPage from '../pages/seller-dashboard/OverviewPage';
import ProductsPage from '../pages/seller-dashboard/ProductsPage';
import OrdersPage from '../pages/seller-dashboard/OrdersPage';
import CouponsPage from '../pages/seller-dashboard/CouponsPage';

const SellerRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route index element={<OverviewPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="coupons" element={<CouponsPage />} />
                <Route path="statistics" element={<div className="p-4">Statistics Page (Coming Soon)</div>} />
                <Route path="settings" element={<div className="p-4">Settings Page (Coming Soon)</div>} />
            </Route>
        </Routes>
    );
};

export default SellerRoutes;
