import { useState, useEffect, useRef } from 'react';
import { Eye, ChevronDown } from 'lucide-react';

const OrderTable = ({ orders, onView, onStatusUpdate }) => {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdownId(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleStatusChange = (orderId, newStatus) => {
        if (onStatusUpdate) {
            onStatusUpdate(orderId, newStatus);
        }
        setOpenDropdownId(null);
    };

    return (
        <div className="bg-white rounded-sm border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">Order ID</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">Items</th>
                            <th className="px-6 py-4">Total</th>
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
                                <td className="px-6 py-4 text-gray-600">{order.productName}</td>
                                <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                                <td className="px-6 py-4 font-medium text-gray-900">${order.total.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    <div className="relative">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenDropdownId(openDropdownId === order.id ? null : order.id);
                                            }}
                                            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                                        >
                                            {order.status}
                                            <ChevronDown size={14} />
                                        </button>

                                        {openDropdownId === order.id && (
                                            <div
                                                ref={dropdownRef}
                                                className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-100 rounded-sm shadow-xl z-50 py-1 animate-in fade-in zoom-in-95 duration-100"
                                            >
                                                {['Completed', 'Processing', 'Pending', 'Cancelled'].map((status) => (
                                                    <button
                                                        key={status}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleStatusChange(order.id, status);
                                                        }}
                                                        className={`
                                                            w-full text-left px-4 py-2 text-xs transition-colors
                                                            ${order.status === status ? 'bg-gray-50 font-medium text-black' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                                                        `}
                                                    >
                                                        {status}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => onView(order)}
                                        className="p-2 hover:bg-gray-100 rounded-sm text-gray-500 hover:text-gray-900"
                                    >
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
                <span className="text-sm text-gray-500">Showing {orders.length} orders</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm hover:bg-gray-50">Next</button>
                </div>
            </div>
        </div>
    );
};

export default OrderTable;
