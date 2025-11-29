import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Package, User, MapPin, CreditCard, Calendar, Printer, ChevronDown } from 'lucide-react';

const OrderDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsStatusDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        // Simulate fetching order data
        const fetchOrder = () => {
            setLoading(true);
            setTimeout(() => {
                const mockOrder = {
                    id: `#${id}`,
                    date: '2024-03-10 14:30',
                    status: 'Completed',
                    customer: {
                        name: 'John Doe',
                        email: 'john.doe@example.com',
                        phone: '+1 (555) 123-4567'
                    },
                    shippingAddress: {
                        street: '123 Main Street, Apt 4B',
                        city: 'New York',
                        state: 'NY',
                        zip: '10001',
                        country: 'USA'
                    },
                    payment: {
                        method: 'Credit Card',
                        last4: '4242',
                        status: 'Paid'
                    },
                    items: [
                        { id: 1, name: 'Wireless Headphones', price: 129.00, quantity: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
                        { id: 2, name: 'Screen Cleaner', price: 15.00, quantity: 2, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
                        { id: 3, name: 'Wireless Headphones', price: 129.00, quantity: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
                        { id: 4, name: 'Wireless Headphones', price: 129.00, quantity: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' }
                    ],
                    subtotal: 159.00,
                    shipping: 10.00,
                    tax: 12.72,
                    total: 181.72
                };
                setOrder(mockOrder);
                setLoading(false);
            }, 500);
        };

        fetchOrder();
    }, [id]);

    const handleStatusUpdate = (newStatus) => {
        setOrder({ ...order, status: newStatus });
        setIsStatusDropdownOpen(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900">Order not found</h2>
                <button
                    onClick={() => navigate('/seller/orders')}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                    Back to Orders
                </button>
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-green-700 bg-green-50';
            case 'Processing': return 'text-blue-700 bg-blue-50';
            case 'Pending': return 'text-orange-700 bg-orange-50';
            case 'Cancelled': return 'text-red-700 bg-red-50';
            default: return 'text-gray-700 bg-gray-50';
        }
    };

    return (
        <div className="space-y-6 pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/seller/orders')}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-gray-900">Order {order.id}</h1>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                            <Calendar size={14} />
                            <span>{order.date}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-sm w-full sm:w-[180px] justify-between"
                        >
                            <span className="text-sm font-medium text-gray-700">
                                {order.status}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`text-gray-500 transition-transform duration-200 ${isStatusDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isStatusDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-100 rounded-sm shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                                {['Completed', 'Processing', 'Pending', 'Cancelled'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => handleStatusUpdate(status)}
                                        className={`
                                            w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between
                                            ${order.status === status
                                                ? 'bg-gray-50 text-black font-medium'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                        `}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Order Items & Summary */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Order Items */}
                    <div className="bg-white rounded-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                                <Package size={18} className="text-gray-500" />
                                Order Items
                            </h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {order.items.map((item) => (
                                <div key={item.id} className="p-6 flex items-center gap-4">
                                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm border border-gray-200">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="text-right font-medium text-gray-900">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment & Shipping Info (Mobile/Tablet view - stacked) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-sm border border-gray-200">
                            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin size={18} className="text-gray-500" />
                                Shipping Address
                            </h2>
                            <address className="not-italic text-sm text-gray-600 space-y-1">
                                <p className="font-medium text-gray-900">{order.customer.name}</p>
                                <p>{order.shippingAddress.street}</p>
                                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
                                <p>{order.shippingAddress.country}</p>
                            </address>
                        </div>
                        <div className="bg-white p-6 rounded-sm border border-gray-200">
                            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <CreditCard size={18} className="text-gray-500" />
                                Payment Details
                            </h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Method</span>
                                    <span className="font-medium text-gray-900">{order.payment.method}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Card Number</span>
                                    <span className="font-medium text-gray-900">**** {order.payment.last4}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Status</span>
                                    <span className="text-green-600 font-medium">{order.payment.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Customer & Order Summary */}
                <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="bg-white p-6 rounded-sm border border-gray-200">
                        <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <User size={18} className="text-gray-500" />
                            Customer Details
                        </h2>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium">
                                {order.customer.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{order.customer.name}</p>
                                <p className="text-sm text-gray-500">Customer since 2023</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <p className="flex justify-between">
                                <span className="text-gray-500">Email</span>
                                <span className="text-gray-900">{order.customer.email}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-500">Phone</span>
                                <span className="text-gray-900">{order.customer.phone}</span>
                            </p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-sm border border-gray-200">
                        <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
                        <div className="space-y-3 text-sm border-b border-gray-100 pb-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="text-gray-900 font-medium">${order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Shipping</span>
                                <span className="text-gray-900 font-medium">${order.shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Tax</span>
                                <span className="text-gray-900 font-medium">${order.tax.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <span className="font-bold text-gray-900">Total</span>
                            <span className="font-bold text-xl text-gray-900">${order.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
