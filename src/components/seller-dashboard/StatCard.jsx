import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, trend, trendValue, icon: Icon, color }) => {
    const isPositive = trend === 'up';

    return (
        <div className="bg-white p-6 rounded-md border border-gray-100">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
                </div>
                <div className={`p-3 rounded-md ${color}`}>
                    <Icon size={24} className="text-white" />
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span className={`
          flex items-center text-xs font-medium px-2 py-1 rounded-full
          ${isPositive ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'}
        `}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {trendValue}
                </span>
                <span className="text-xs text-gray-400">vs last month</span>
            </div>
        </div>
    );
};

export default StatCard;
