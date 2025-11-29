import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft, Tag, Calendar, DollarSign, Percent, Hash, AlertCircle, ChevronDown } from 'lucide-react';
import DatePicker from '../../components/seller-dashboard/DatePicker';

const EditCouponPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        discountType: 'Percentage',
        discountValue: '',
        minPurchase: '',
        usageLimit: '',
        startDate: '',
        endDate: '',
        status: 'Draft'
    });

    const [isDiscountTypeOpen, setIsDiscountTypeOpen] = useState(false);
    const discountTypeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (discountTypeRef.current && !discountTypeRef.current.contains(event.target)) {
                setIsDiscountTypeOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        // Simulate fetching coupon data
        const fetchCoupon = () => {
            // Mock data
            const mockCoupon = {
                id: 1,
                code: 'SUMMER25',
                description: 'Summer Sale 25% Off',
                discountType: 'Percentage',
                discountValue: '25',
                minPurchase: '50.00',
                usageLimit: '100',
                startDate: '2024-06-01',
                endDate: '2024-06-30',
                status: 'Active'
            };

            if (id) {
                setFormData({
                    code: mockCoupon.code,
                    description: mockCoupon.description,
                    discountType: mockCoupon.discountType,
                    discountValue: mockCoupon.discountValue,
                    minPurchase: mockCoupon.minPurchase,
                    usageLimit: mockCoupon.usageLimit,
                    startDate: mockCoupon.startDate,
                    endDate: mockCoupon.endDate,
                    status: mockCoupon.status
                });
            }
        };

        fetchCoupon();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => navigate('/seller/coupons')}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                >
                    <ArrowLeft size={24} />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Edit Coupon</h1>
                    <p className="text-gray-500">Update coupon details</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">

                {/* Basic Information */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Tag size={20} className="text-gray-500" />
                        Basic Information
                    </h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Coupon Code</label>
                        <div className="relative">
                            <Hash size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="code"
                                value={formData.code}
                                onChange={handleInputChange}
                                placeholder="e.g. SUMMER25"
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all uppercase"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Customers will enter this code at checkout.</p>
                    </div>
                </div>

                {/* Discount Details */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Percent size={20} className="text-gray-500" />
                        Discount Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
                            <div className="relative" ref={discountTypeRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsDiscountTypeOpen(!isDiscountTypeOpen)}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all bg-white flex items-center justify-between"
                                >
                                    <span className="text-gray-700 text-sm">{formData.discountType}</span>
                                    <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isDiscountTypeOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isDiscountTypeOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-100 rounded-sm shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                                        {['Percentage', 'Fixed Amount', 'Free Shipping'].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, discountType: type }));
                                                    setIsDiscountTypeOpen(false);
                                                }}
                                                className={`
                                                    w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between
                                                    ${formData.discountType === type
                                                        ? 'bg-gray-50 text-black font-medium'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    }
                                                `}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Value</label>
                            <div className="relative">
                                {formData.discountType === 'Fixed Amount' ? (
                                    <DollarSign size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                ) : (
                                    <Percent size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                )}
                                <input
                                    type="number"
                                    name="discountValue"
                                    value={formData.discountValue}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    disabled={formData.discountType === 'Free Shipping'}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all disabled:bg-gray-50 disabled:text-gray-400"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Min. Purchase Amount ($)</label>
                            <div className="relative">
                                <DollarSign size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="number"
                                    name="minPurchase"
                                    value={formData.minPurchase}
                                    onChange={handleInputChange}
                                    placeholder="0.00"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Validity & Usage */}
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar size={20} className="text-gray-500" />
                        Validity & Usage
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <DatePicker
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputChange}
                                placeholder="Select start date"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                            <DatePicker
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleInputChange}
                                placeholder="Select end date"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Usage Limit</label>
                            <div className="relative">
                                <AlertCircle size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="number"
                                    name="usageLimit"
                                    value={formData.usageLimit}
                                    onChange={handleInputChange}
                                    placeholder="Total times usable"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 mt-6">
                <button
                    onClick={() => navigate('/seller/coupons')}
                    className="px-6 py-2 border border-gray-200 bg-white rounded-sm text-gray-900 font-small hover:text-black hover:cursor-pointer transition-colors"
                >
                    Cancel
                </button>
                <button
                    className="px-6 py-2 bg-black text-white rounded-sm font-small hover:cursor-pointer"
                >
                    Update Coupon
                </button>
            </div>
        </div>
    );
};

export default EditCouponPage;
