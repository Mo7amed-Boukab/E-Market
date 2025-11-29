import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, ChevronDown } from 'lucide-react';
import DeleteConfirmationModal from '../../components/seller-dashboard/DeleteConfirmationModal';
import ProductTable from '../../components/seller-dashboard/ProductTable';

const ProductsPage = () => {
    const navigate = useNavigate();
    const [statusFilter, setStatusFilter] = useState('All');
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const dropdownRef = useRef(null);

    const [products, setProducts] = useState([
        { id: 1, name: 'Wireless Headphones', price: 129.00, stock: 45, category: 'Electronics', status: 'Active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
        { id: 2, name: 'Smart Watch', price: 199.00, stock: 28, category: 'Electronics', status: 'Active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
        { id: 3, name: 'Cotton T-Shirt', price: 29.00, stock: 120, category: 'Fashion', status: 'Active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
        { id: 4, name: 'Leather Wallet', price: 49.00, stock: 0, category: 'Accessories', status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
        { id: 5, name: 'Running Shoes', price: 89.00, stock: 15, category: 'Fashion', status: 'Low Stock', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
    ]);

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

    const handleDeleteClick = (product) => {
        setProductToDelete(product);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (productToDelete) {
            setProducts(products.filter(p => p.id !== productToDelete.id));
            setIsDeleteModalOpen(false);
            setProductToDelete(null);
        }
    };

    const filteredProducts = products.filter(product =>
        statusFilter === 'All' || product.status === statusFilter
    );

    return (
        <div className="space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative flex-1 lg:max-w-[50%]">
                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
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
                                {['All', 'Active', 'Out of Stock', 'Low Stock'].map((status) => (
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

                <button
                    onClick={() => navigate('add')}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-sm font-medium text-white rounded-sm hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                    <Plus size={20} />
                    <span>Add Product</span>
                </button>
            </div>

            <ProductTable
                products={filteredProducts}
                onView={(product) => navigate(`${product.id}`)}
                onEdit={(product) => navigate(`edit/${product.id}`)}
                onDelete={handleDeleteClick}
            />

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={productToDelete?.name}
                itemType="Product"
            />
        </div>
    );
};

export default ProductsPage;