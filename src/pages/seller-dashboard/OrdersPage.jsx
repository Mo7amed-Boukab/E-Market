import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Download, ChevronDown } from 'lucide-react';
import OrderTable from '../../components/seller-dashboard/OrderTable';

const OrdersPage = () => {
    const navigate = useNavigate();
    const [statusFilter, setStatusFilter] = useState('All');
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);

    const [orders, setOrders] = useState([
        { id: '#ORD-001', customer: 'John Doe', productName: 'Wireless Headphones', date: '2024-03-10', total: 129.00, status: 'Completed', items: 2, payment: 'Credit Card' },
        { id: '#ORD-002', customer: 'Sarah Smith', productName: 'Smart Watch', date: '2024-03-09', total: 199.00, status: 'Processing', items: 1, payment: 'PayPal' },
        { id: '#ORD-003', customer: 'Mike Johnson', productName: 'Cotton T-Shirt', date: '2024-03-09', total: 79.00, status: 'Pending', items: 3, payment: 'Credit Card' },
        { id: '#ORD-004', customer: 'Emily Davis', productName: 'Leather Wallet', date: '2024-03-08', total: 49.00, status: 'Completed', items: 1, payment: 'Stripe' },
        { id: '#ORD-005', customer: 'Alex Wilson', productName: 'Running Shoes', date: '2024-03-08', total: 39.00, status: 'Cancelled', items: 1, payment: 'PayPal' },
        { id: '#ORD-006', customer: 'Lisa Anderson', productName: 'Wireless Headphones', date: '2024-03-07', total: 299.00, status: 'Completed', items: 4, payment: 'Credit Card' },
    ]);

    const handleStatusUpdate = (orderId, newStatus) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsStatusDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOrders = orders.filter(order => {
        const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
        const matchesSearch =
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative flex-1 lg:max-w-[50%]">
                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-sm focus:outline-none"
                        />
                    </div>

                    {/* Custom Status Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-sm w-full sm:w-[180px] justify-between"
                        >
                            <span className="text-sm font-medium text-gray-700">
                                {statusFilter === 'All' ? 'All Status' : statusFilter}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`text-gray-500 transition-transform duration-200 ${isStatusDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isStatusDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-100 rounded-sm shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                                {['All', 'Completed', 'Processing', 'Pending', 'Cancelled'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => {
                                            setStatusFilter(status);
                                            setIsStatusDropdownOpen(false);
                                        }}
                                        className={`
                                            w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between
                                            ${statusFilter === status
                                                ? 'bg-gray-50 text-black font-medium'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                        `}
                                    >
                                        {status === 'All' ? 'All Status' : status}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-sm hover:bg-gray-50 text-gray-600 transition-colors w-full sm:w-auto">
                    <Download size={20} />
                    <span>Export Orders</span>
                </button>
            </div>

            <OrderTable
                orders={filteredOrders}
                onView={(order) => navigate(`${order.id.replace('#', '')}`)}
                onStatusUpdate={handleStatusUpdate}
            />
        </div>
    );
};

export default OrdersPage;
