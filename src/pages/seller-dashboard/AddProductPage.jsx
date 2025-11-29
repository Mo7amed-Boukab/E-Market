import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Save, ArrowLeft, Smartphone, Shirt, Home, Dumbbell, Gamepad2, Book, Watch, Layers } from 'lucide-react';

const AddProductPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        originalPrice: '',
        currentPrice: '',
        stock: '',
        categories: [],
        status: 'Draft'
    });


    // Mock categories for now
    const availableCategories = ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Toys', 'Books', 'Accessories'];

    const categoryIcons = {
        'Electronics': Smartphone,
        'Fashion': Shirt,
        'Home & Garden': Home,
        'Sports': Dumbbell,
        'Toys': Gamepad2,
        'Books': Book,
        'Accessories': Watch
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleCategory = (category) => {
        setFormData(prev => {
            const isSelected = prev.categories.includes(category);
            if (isSelected) {
                return {
                    ...prev,
                    categories: prev.categories.filter(c => c !== category)
                };
            } else {
                return {
                    ...prev,
                    categories: [...prev.categories, category]
                };
            }
        });
    };



    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => navigate('/seller/products')}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                >
                    <ArrowLeft size={24} />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
                    <p className="text-gray-500">Fill in the information to create a new product listing</p>
                </div>
            </div>

            {/* Main Content - Single Column */}
            <div className="space-y-6">

                {/* Basic Details */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Details</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="e.g. Wireless Noise Cancelling Headphones"
                                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={6}
                                placeholder="Describe your product..."
                                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Pricing & Stock */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing & Inventory</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Original Price ($)</label>
                            <input
                                type="number"
                                name="originalPrice"
                                value={formData.originalPrice}
                                onChange={handleInputChange}
                                placeholder="0.00"
                                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Price ($)</label>
                            <input
                                type="number"
                                name="currentPrice"
                                value={formData.currentPrice}
                                onChange={handleInputChange}
                                placeholder="0.00"
                                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleInputChange}
                                placeholder="0"
                                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Organization (Categories) */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Organization</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Select Categories</label>

                            {/* Visual Category Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
                                {availableCategories.map(cat => {
                                    const isSelected = formData.categories.includes(cat);
                                    const Icon = categoryIcons[cat] || Layers;
                                    return (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => toggleCategory(cat)}
                                            className={`
                                                flex flex-col items-center justify-center gap-2 p-4 rounded border transition-all duration-200
                                                ${isSelected
                                                    ? 'border-black scale-[1.02]'
                                                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                                }
                                            `}
                                        >
                                            <Icon size={24} strokeWidth={1.5} />
                                            <span className="text-sm font-medium">{cat}</span>
                                        </button>
                                    );
                                })}
                            </div>


                        </div>
                    </div>
                </div>

                {/* Media */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Images</h2>
                    <div className="border-2 border-dashed border-gray-200 rounded-sm p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer w-full">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                            <Upload size={24} />
                        </div>
                        <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                </div>

            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 mt-6">
                <button
                    className="flex items-center gap-2 px-6 py-2 border border-gray-200 bg-white rounded-sm text-gray-900 font-small hover:text-black hover:cursor-pointer transition-colors"
                >
                    <Save size={18} />
                    Save as Draft
                </button>
                <button
                    className="px-6 py-2 bg-black text-white rounded-sm font-small hover:cursor-pointer"
                >
                    Publish Product
                </button>
            </div>
        </div>
    );
};

export default AddProductPage;
