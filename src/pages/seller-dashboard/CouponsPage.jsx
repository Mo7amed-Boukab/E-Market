import { useState } from 'react';
import { Plus, Search, Tag, Copy, Trash2, Edit } from 'lucide-react';

const CouponsPage = () => {
    const [coupons] = useState([
        { id: 1, code: 'SUMMER25', discount: '25%', type: 'Percentage', usage: '45/100', status: 'Active', expiry: '2024-06-30' },
        { id: 2, code: 'WELCOME10', discount: '$10.00', type: 'Fixed Amount', usage: '120/500', status: 'Active', expiry: '2024-12-31' },
        { id: 3, code: 'FLASH50', discount: '50%', type: 'Percentage', usage: '50/50', status: 'Expired', expiry: '2024-03-01' },
        { id: 4, code: 'FREESHIP', discount: 'Free Shipping', type: 'Shipping', usage: '89/200', status: 'Active', expiry: '2024-04-15' },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'text-green-600 bg-green-50';
            case 'Expired': return 'text-red-600 bg-red-50';
            case 'Scheduled': return 'text-blue-600 bg-blue-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search coupons..."
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                    <Plus size={20} />
                    <span>Create Coupon</span>
                </button>
            </div>

            <div className="bg-white rounded-md border border-gray-200">
                {/* Table */}
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
                                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900" title="Copy Code">
                                                <Copy size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg text-blue-600 hover:text-blue-700">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600 hover:text-red-700">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
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

export default CouponsPage;
