import { Edit, Trash2, Eye } from 'lucide-react';

const ProductTable = ({ products, onView, onEdit, onDelete }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'text-green-700 bg-green-50';
            case 'Out of Stock': return 'text-red-700 bg-red-50';
            case 'Low Stock': return 'text-orange-700 bg-orange-50';
            default: return 'text-gray-700 bg-gray-50';
        }
    };

    return (
        <div className="bg-white rounded-sm border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-10 h-10 rounded-sm object-cover bg-gray-100"
                                        />
                                        <span className="font-medium text-gray-900">{product.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => onView(product)}
                                            className="p-2 hover:bg-gray-100 rounded-sm text-gray-700 hover:text-gray-800"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="p-2 hover:bg-gray-100 rounded-sm text-blue-800 hover:text-blue-900"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(product)}
                                            className="p-2 hover:bg-gray-100 rounded-sm text-red-700 hover:text-red-800"
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
                <span className="text-sm text-gray-500">Showing 1-{products.length} of {products.length} products</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm hover:bg-gray-50">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProductTable;
