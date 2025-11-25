import React, { useState } from 'react';
import { Search, Filter, Eye, Download, MoreVertical } from 'lucide-react';

const OrdersPage = () => {
    const [orders] = useState([
        { id: '#ORD-001', customer: 'John Doe', date: '2024-03-10', total: 129.00, status: 'Completed', items: 2, payment: 'Credit Card' },
        { id: '#ORD-002', customer: 'Sarah Smith', date: '2024-03-09', total: 199.00, status: 'Processing', items: 1, payment: 'PayPal' },
        { id: '#ORD-003', customer: 'Mike Johnson', date: '2024-03-09', total: 79.00, status: 'Pending', items: 3, payment: 'Credit Card' },
        { id: '#ORD-004', customer: 'Emily Davis', date: '2024-03-08', total: 49.00, status: 'Completed', items: 1, payment: 'Stripe' },
        { id: '#ORD-005', customer: 'Alex Wilson', date: '2024-03-08', total: 39.00, status: 'Cancelled', items: 1, payment: 'PayPal' },
        { id: '#ORD-006', customer: 'Lisa Anderson', date: '2024-03-07', total: 299.00, status: 'Completed', items: 4, payment: 'Credit Card' },
    ]);

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
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none">
                            <option>All Status</option>
                            <option>Completed</option>
                            <option>Processing</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600 transition-colors">
                            <Filter size={20} />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600 transition-colors">
                    <Download size={20} />
                    <span>Export Orders</span>
                </button>
            </div>

            <div className="bg-white rounded-md border border-gray-200">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Items</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Payment</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.date}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">${order.total.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.payment}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900">
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Showing 1-6 of 24 orders</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
