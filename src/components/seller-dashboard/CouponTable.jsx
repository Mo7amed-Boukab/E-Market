import { Edit, Trash2, Copy, Tag } from 'lucide-react';

const CouponTable = ({ coupons, onEdit, onDelete }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'text-green-600 bg-green-50';
            case 'Expired': return 'text-red-600 bg-red-50';
            case 'Scheduled': return 'text-blue-600 bg-blue-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="bg-white rounded-sm border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">Code</th>
                            <th className="px-6 py-4">Discount</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Usage</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Expiry Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {coupons.map((coupon) => (
                            <tr key={coupon.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            <Tag size={16} className="text-gray-600" />
                                        </div>
                                        <span className="font-medium text-gray-900">{coupon.code}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{coupon.discount}</td>
                                <td className="px-6 py-4 text-gray-600">{coupon.type}</td>
                                <td className="px-6 py-4 text-gray-600">{coupon.usage}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(coupon.status)}`}>
                                        {coupon.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{coupon.expiry}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-800" title="Copy Code">
                                            <Copy size={18} />
                                        </button>
                                        <button
                                            onClick={() => onEdit(coupon)}
                                            className="p-2 hover:bg-gray-100 rounded-lg text-blue-700 hover:text-blue-800"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(coupon)}
                                            className="p-2 hover:bg-gray-100 rounded-lg text-red-700 hover:text-red-800"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-500">Showing 1-{coupons.length} of {coupons.length} coupons</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm hover:bg-gray-50">Next</button>
                </div>
            </div>
        </div>
    );
};

export default CouponTable;
