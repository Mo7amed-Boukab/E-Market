import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, ChevronDown } from 'lucide-react';
import DeleteConfirmationModal from '../../components/seller-dashboard/DeleteConfirmationModal';
import CouponTable from '../../components/seller-dashboard/CouponTable';

const CouponsPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [couponToDelete, setCouponToDelete] = useState(null);

    const statusDropdownRef = useRef(null);
    const typeDropdownRef = useRef(null);

    const [coupons, setCoupons] = useState([
        { id: 1, code: 'SUMMER25', discount: '25%', type: 'Percentage', usage: '45/100', status: 'Active', expiry: '2024-06-30' },
        { id: 2, code: 'WELCOME10', discount: '$10.00', type: 'Fixed Amount', usage: '120/500', status: 'Active', expiry: '2024-12-31' },
        { id: 3, code: 'FLASH50', discount: '50%', type: 'Percentage', usage: '50/50', status: 'Expired', expiry: '2024-03-01' },
        { id: 4, code: 'FREESHIP', discount: 'Free Shipping', type: 'Shipping', usage: '89/200', status: 'Active', expiry: '2024-04-15' },
    ]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target)) {
                setIsStatusDropdownOpen(false);
            }
            if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
                setIsTypeDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDeleteClick = (coupon) => {
        setCouponToDelete(coupon);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (couponToDelete) {
            setCoupons(coupons.filter(c => c.id !== couponToDelete.id));
            setIsDeleteModalOpen(false);
            setCouponToDelete(null);
        }
    };



    const filteredCoupons = coupons.filter(coupon => {
        const matchesSearch = coupon.code.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All' || coupon.status === statusFilter;
        const matchesType = typeFilter === 'All' || coupon.type === typeFilter;
        return matchesSearch && matchesStatus && matchesType;
    });

    const uniqueTypes = ['All', ...new Set(coupons.map(c => c.type))];

    return (
        <div className="space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative flex-1 lg:max-w-[40%]">
                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search coupons..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-sm focus:outline-none"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="relative" ref={statusDropdownRef}>
                        <button
                            onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-sm w-full sm:w-[160px] justify-between"
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
                                {['All', 'Active', 'Expired', 'Scheduled'].map((status) => (
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

                    {/* Type Filter */}
                    <div className="relative" ref={typeDropdownRef}>
                        <button
                            onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-sm w-full sm:w-[160px] justify-between"
                        >
                            <span className="text-sm font-medium text-gray-700">
                                {typeFilter === 'All' ? 'All Types' : typeFilter}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`text-gray-500 transition-transform duration-200 ${isTypeDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isTypeDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-100 rounded-sm shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                                {uniqueTypes.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            setTypeFilter(type);
                                            setIsTypeDropdownOpen(false);
                                        }}
                                        className={`
                                            w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between
                                            ${typeFilter === type
                                                ? 'bg-gray-50 text-black font-medium'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                        `}
                                    >
                                        {type === 'All' ? 'All Types' : type}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => navigate('add')}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                    <Plus size={20} />
                    <span>Create Coupon</span>
                </button>
            </div>

            <CouponTable
                coupons={filteredCoupons}
                onEdit={(coupon) => navigate(`edit/${coupon.id}`)}
                onDelete={handleDeleteClick}
            />

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                itemName={couponToDelete?.code}
                itemType="Coupon"
            />
        </div>
    );
};

export default CouponsPage;
