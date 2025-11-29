import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Edit, Package, DollarSign, Tag, Layers, Image as ImageIcon } from 'lucide-react';

const ProductDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching product data
        const fetchProduct = () => {
            setLoading(true);
            // Mock data - in reality, find the product by ID
            setTimeout(() => {
                const mockProduct = {
                    id: 1,
                    name: 'Wireless Headphones',
                    description: 'High quality wireless headphones with noise cancellation. Perfect for travel and work. Features long battery life and premium sound quality.',
                    originalPrice: 159.00,
                    currentPrice: 129.00,
                    stock: 45,
                    categories: ['Electronics', 'Accessories'],
                    status: 'Active',
                    images: [
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
                    ],
                    sku: 'WH-001-BLK',
                    createdAt: '2024-03-15'
                };
                setProduct(mockProduct);
                setLoading(false);
            }, 500);
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900">Product not found</h2>
                <button
                    onClick={() => navigate('/seller/products')}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/seller/products')}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === 'Active' ? 'bg-green-50 text-green-700' :
                                product.status === 'Out of Stock' ? 'bg-red-50 text-red-700' : 'bg-gray-50 text-gray-700'
                                }`}>
                                {product.status}
                            </span>
                            <span className="text-sm text-gray-500">SKU: {product.sku}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Basic Info - Row 1, Col 1-2 */}
                <div className="lg:col-span-2 bg-white p-6 rounded-sm border border-gray-200 h-full">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Tag size={20} className="text-gray-400" />
                        Basic Information
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Description</label>
                            <p className="text-gray-900 leading-relaxed">{product.description}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-2">Categories</label>
                            <div className="flex flex-wrap gap-2">
                                {product.categories.map((cat, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-100">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing - Row 1, Col 3 */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 h-full">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <DollarSign size={20} className="text-gray-400" />
                        Pricing
                    </h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                            <span className="text-gray-500">Current Price</span>
                            <span className="text-xl font-bold text-gray-900">${product.currentPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                            <span className="text-gray-500">Original Price</span>
                            <span className="text-gray-900 line-through">${product.originalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-500">Profit Margin</span>
                            <span className="text-green-600 font-medium">~25%</span>
                        </div>
                    </div>
                </div>

                {/* Images - Row 2, Col 1-2 */}
                <div className="lg:col-span-2 bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <ImageIcon size={20} className="text-gray-400" />
                        Product Images
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {product.images.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-sm overflow-hidden border border-gray-100 group">
                                <img
                                    src={img}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inventory - Row 2, Col 3 */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 h-fit">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Package size={20} className="text-gray-400" />
                        Inventory
                    </h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                            <span className="text-gray-500">Stock Status</span>
                            <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-500">Quantity Available</span>
                            <span className="text-gray-900 font-bold">{product.stock}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
