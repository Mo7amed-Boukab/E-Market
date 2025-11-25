import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Ticket,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Store,
  Moon,
  User,
  Sun
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, isCollapsed, toggleCollapse }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuGroups = [
    {
      title: 'GENERAL',
      items: [
        { path: '/seller', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/seller/products', icon: Package, label: 'Products' },
        { path: '/seller/orders', icon: ShoppingCart, label: 'Orders' },
        { path: '/seller/coupons', icon: Ticket, label: 'Coupons' },
        { path: '/seller/statistics', icon: BarChart3, label: 'Statistics' },
      ]
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-100
        transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}>
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-50">
          <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center flex-shrink-0">
              <Store className="text-white w-5 h-5" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold text-gray-900">E-Market</span>
            )}
          </div>

          <button
            onClick={toggleCollapse}
            className={`
              hidden lg:flex items-center justify-center w-6 h-6 rounded-md bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors
              ${isCollapsed ? 'absolute -right-3 top-7 shadow-sm border border-gray-100' : ''}
            `}
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {!isCollapsed && (
                <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {group.title}
                </h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group relative
                        ${isActive
                          ? 'bg-black text-white shadow-md shadow-black/5'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        }
                        ${isCollapsed ? 'justify-center' : ''}
                      `}
                    >
                      <Icon
                        size={20}
                        className={`
                          transition-colors duration-200
                          ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}
                        `}
                      />

                      {!isCollapsed && <span>{item.label}</span>}

                      {/* Tooltip for collapsed state */}
                      {isCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                          {item.label}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* System Section */}
          <div>
            {!isCollapsed && (
              <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                SYSTEM
              </h3>
            )}
            <div className="space-y-1">
              {/* Settings */}
              <Link
                to="/seller/settings"
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group relative
                  ${location.pathname === '/seller/settings'
                    ? 'bg-black text-white shadow-md shadow-black/5'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                <Settings
                  size={20}
                  className={`
                    transition-colors duration-200
                    ${location.pathname === '/seller/settings' ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}
                  `}
                />
                {!isCollapsed && <span>Settings</span>}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    Settings
                  </div>
                )}
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group relative
                  text-gray-500 hover:bg-gray-50 hover:text-gray-900
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-gray-400 group-hover:text-gray-600" />
                ) : (
                  <Moon size={20} className="text-gray-400 group-hover:text-gray-600" />
                )}

                {!isCollapsed && (
                  <div className="flex-1 flex items-center justify-between">
                    <span>Dark mode</span>
                    <div className={`
                      w-9 h-5 rounded-full relative transition-colors duration-200
                      ${isDarkMode ? 'bg-black' : 'bg-gray-200'}
                    `}>
                      <div className={`
                        absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200
                        ${isDarkMode ? 'left-5' : 'left-1'}
                      `} />
                    </div>
                  </div>
                )}

                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    Toggle Theme
                  </div>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-50 space-y-4">
          {/* User Profile */}
          <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : 'px-2'}`}>
            <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
              <User className="text-gray-500 w-5 h-5" />
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{user?.fullname || 'Seller'}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email || 'Seller Dashboard'}</p>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`
            flex items-center gap-3 px-3 py-2.5 w-full rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors
            ${isCollapsed ? 'justify-center' : ''}
          `}>
            <LogOut size={20} />
            {!isCollapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
