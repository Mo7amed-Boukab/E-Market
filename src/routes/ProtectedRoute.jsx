import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LoaderContext } from '../context/LoaderContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const { user, isAuthenticated } = useContext(AuthContext);
    const { isLoading, showLoader} = useContext(LoaderContext);
    const location = useLocation();

    if (isLoading) {
        showLoader(); 
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
