import { useState, useEffect } from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp, Calendar } from 'lucide-react';
import StatCard from '../../components/seller-dashboard/StatCard';

const OverviewPage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const weekday = date.toLocaleString('default', { weekday: 'long' });
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

        return `${weekday} ${day} ${month} ${year} at ${time}`;
    };

    const stats = [
        {
            title: 'Total Sales',
            value: '$24,500',
            trend: 'up',
            trendValue: '12%',
            icon: DollarSign,
            color: 'bg-blue-500',
        },
        {
            title: 'Total Orders',
            value: '1,240',
            trend: 'up',
            trendValue: '8%',
            icon: ShoppingBag,
            color: 'bg-purple-500',
        },
        {
            title: 'Total Customers',
            value: '845',
            trend: 'down',
            trendValue: '2%',
            icon: Users,
            color: 'bg-orange-500',
        },
        {
            title: 'Average Order',
            value: '$124',
            trend: 'up',
            trendValue: '4%',
            icon: TrendingUp,
            color: 'bg-green-500',
        },
    ];

    const recentOrders = [
        { id: '#ORD-001', product: 'Wireless Headphones', customer: 'John Doe', date: '2024-03-10', amount: '$129.00', status: 'Completed' },
        { id: '#ORD-002', product: 'Smart Watch', customer: 'Sarah Smith', date: '2024-03-09', amount: '$199.00', status: 'Processing' },
        { id: '#ORD-003', product: 'Bluetooth Speaker', customer: 'Mike Johnson', date: '2024-03-09', amount: '$79.00', status: 'Pending' },
        { id: '#ORD-004', product: 'Laptop Stand', customer: 'Emily Davis', date: '2024-03-08', amount: '$49.00', status: 'Completed' },
        { id: '#ORD-005', product: 'USB-C Hub', customer: 'Alex Wilson', date: '2024-03-08', amount: '$39.00', status: 'Cancelled' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-green-600 bg-green-50';
            case 'Processing': return 'text-blue-600 bg-blue-50';
            case 'Pending': return 'text-orange-600 bg-orange-50';
            case 'Cancelled': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg font-medium">
                        {formatDate(currentTime)}
                    </span>
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 3 Months</option>
                        <option>This Year</option>
                    </select>
                    <button className="px-4 py-2 bg-black text-white rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.product}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.date}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
