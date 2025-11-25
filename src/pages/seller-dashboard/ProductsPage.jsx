import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react';

const ProductsPage = () => {
    const [products] = useState([
        { id: 1, name: 'Wireless Headphones', price: 129.00, stock: 45, category: 'Electronics', status: 'Active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
        { id: 2, name: 'Smart Watch', price: 199.00, stock: 28, category: 'Electronics', status: 'Active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
        { id: 3, name: 'Cotton T-Shirt', price: 29.00, stock: 120, category: 'Fashion', status: 'Active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80' },
        { id: 4, name: 'Leather Wallet', price: 49.00, stock: 0, category: 'Accessories', status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=500&q=80' },
        { id: 5, name: 'Running Shoes', price: 89.00, stock: 15, category: 'Fashion', status: 'Low Stock', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'text-green-600 bg-green-50';
            case 'Out of Stock': return 'text-red-600 bg-red-50';
            case 'Low Stock': return 'text-orange-600 bg-orange-50';
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
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600 transition-colors">
                        <Filter size={20} />
                        <span>Filter</span>
                    </button>
                </div>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-sm font-medium text-white rounded-md hover:bg-gray-800 transition-colors">
                    <Plus size={20} />
                    <span>Add Product</span>
                </button>
            </div>

            <div className="bg-white rounded-md border border-gray-200">
                {/* Table */}
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
                                                className="w-10 h-10 rounded-lg object-cover bg-gray-100"
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
                                            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900">
                                                <Eye size={18} />
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

                {/* Pagination */}
                <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Showing 1-5 of 12 products</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;