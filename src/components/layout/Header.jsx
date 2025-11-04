import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          E-Market
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Products
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="nav-link cart-link">
                Cart
                {getCartCount() > 0 && (
                  <span className="cart-badge">{getCartCount()}</span>
                )}
              </Link>
              <span className="nav-link">Hello, {user?.name || user?.email}</span>
              <button onClick={logout} className="btn-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
