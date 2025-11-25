import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    const location = useLocation();

    const getPageInfo = (pathname) => {
        switch (pathname) {
            case '/seller':
                return { title: 'Dashboard', description: 'Overview of your store performance' };
            case '/seller/products':
                return { title: 'Products', description: 'Manage your product inventory' };
            case '/seller/orders':
                return { title: 'Orders', description: 'Track and manage customer orders' };
            case '/seller/coupons':
                return { title: 'Coupons', description: 'Manage discount codes and promotions' };
            case '/seller/statistics':
                return { title: 'Statistics', description: 'Detailed store analytics' };
            case '/seller/settings':
                return { title: 'Settings', description: 'Configure your store preferences' };
            default:
                return { title: 'Dashboard', description: 'Overview of your store performance' };
        }
    };

    const { title, description } = getPageInfo(location.pathname);

    return (
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
                >
                    <Menu size={20} />
                </button>

                <div>
                    <h1 className="text-xl font-bold text-gray-900">{title}</h1>
                    <p className="text-sm text-gray-500 hidden sm:block">{description}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;

