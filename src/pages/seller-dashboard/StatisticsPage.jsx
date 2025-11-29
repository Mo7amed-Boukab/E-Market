import { useState, useRef, useEffect } from 'react';
import { TrendingUp, ArrowUpRight, Calendar, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const StatisticsPage = () => {
    const [revenueFilter, setRevenueFilter] = useState('This Year');
    const [categoryFilter, setCategoryFilter] = useState('All Time');
    const [isRevenueFilterOpen, setIsRevenueFilterOpen] = useState(false);
    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);

    const revenueFilterRef = useRef(null);
    const categoryFilterRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (revenueFilterRef.current && !revenueFilterRef.current.contains(event.target)) {
                setIsRevenueFilterOpen(false);
            }
            if (categoryFilterRef.current && !categoryFilterRef.current.contains(event.target)) {
                setIsCategoryFilterOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const monthlyRevenue = [
        { month: 'Jan', value: 35000 },
        { month: 'Feb', value: 42000 },
        { month: 'Mar', value: 38000 },
        { month: 'Apr', value: 55000 },
        { month: 'May', value: 48000 },
        { month: 'Jun', value: 62000 },
        { month: 'Jul', value: 58000 },
        { month: 'Aug', value: 68000 },
        { month: 'Sep', value: 75000 },
        { month: 'Oct', value: 72000 },
        { month: 'Nov', value: 85000 },
        { month: 'Dec', value: 92000 },
    ];

    const categoryData = [
        { name: 'Electronics', value: 45, color: '#3B82F6' }, // blue-500
        { name: 'Accessories', value: 25, color: '#A855F7' }, // purple-500
        { name: 'Home Office', value: 20, color: '#F97316' }, // orange-500
        { name: 'Audio', value: 10, color: '#22C55E' }, // green-500
    ];

    const topProducts = [
        { name: 'Wireless Headphones', sales: 450, revenue: '$12,450', growth: '+15%' },
        { name: 'Smart Watch Series 5', sales: 320, revenue: '$9,800', growth: '+8%' },
        { name: 'Bluetooth Speaker', sales: 280, revenue: '$5,600', growth: '-2%' },
        { name: 'Laptop Stand', sales: 210, revenue: '$4,200', growth: '+12%' },
        { name: 'USB-C Hub', sales: 180, revenue: '$3,600', growth: '+5%' },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded pointer-events-none">
                    <p>{`${label}: $${payload[0].value.toLocaleString()}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"> */}
            <div className="flex items-center justify-end">
                <button className="px-6 py-2.5 bg-white text-black border border-gray-200 rounded text-sm font-medium hover:cursor-pointer transition-colors">
                    Export Report
                </button>
            </div>
            {/* </div> */}

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">Revenue Overview</h2>
                        </div>
                        <div className="relative" ref={revenueFilterRef}>
                            <button
                                onClick={() => setIsRevenueFilterOpen(!isRevenueFilterOpen)}
                                className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-sm text-sm font-medium text-gray-700 focus:outline-none cursor-pointer min-w-[140px] justify-between"
                            >
                                <span>{revenueFilter}</span>
                                <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isRevenueFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isRevenueFilterOpen && (
                                <div className="absolute top-full right-0 mt-1 w-full bg-white border border-gray-100 rounded-sm shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                                    {['This Year', 'Last Year', 'Last 6 Months'].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => {
                                                setRevenueFilter(option);
                                                setIsRevenueFilterOpen(false);
                                            }}
                                            className={`
                                                w-full text-left px-4 py-1.5 text-sm transition-colors
                                                ${revenueFilter === option ? 'bg-gray-50 text-black font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                                            `}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyRevenue} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                    tickFormatter={(value) => `$${value / 1000}k`}
                                />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                                <Bar
                                    dataKey="value"
                                    fill="#368acbff"
                                    radius={[4, 4, 0, 0]}
                                    barSize={30}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sales by Category Chart */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Sales by Category</h2>
                        <div className="relative" ref={categoryFilterRef}>
                            <button
                                onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
                                className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-sm text-sm font-medium text-gray-700 focus:outline-none cursor-pointer min-w-[140px] justify-between"
                            >
                                <span>{categoryFilter}</span>
                                <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isCategoryFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCategoryFilterOpen && (
                                <div className="absolute top-full right-0 mt-1 w-full bg-white border border-gray-100 rounded-sm shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                                    {['All Time', 'This Year', 'Last 30 Days'].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => {
                                                setCategoryFilter(option);
                                                setIsCategoryFilterOpen(false);
                                            }}
                                            className={`
                                                w-full text-left px-4 py-1.5 text-sm transition-colors
                                                ${categoryFilter === option ? 'bg-gray-50 text-black font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                                            `}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex-1 min-h-[250px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                            <p className="text-2xl font-bold text-gray-900">100%</p>
                            <p className="text-xs text-gray-500">Total Sales</p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        {categoryData.map((category, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                                    <span className="text-gray-600">{category.name}</span>
                                </div>
                                <span className="font-medium text-gray-900">{category.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatisticsPage;
