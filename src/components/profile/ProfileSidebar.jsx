import { User, Camera, LogOut } from "lucide-react";

const ProfileSidebar = ({ user, tabs, activeTab, onTabChange, onLogout }) => {
  return (
    <div className="bg-white rounded-sm border border-gray-100">
      <div className="p-6 text-center border-b border-gray-100">
        <div className="relative inline-block">
          <div className="w-43 h-43 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-gray-400 text-3xl font-bold overflow-hidden border-4 border-white shadow-md">
            {user?.fullname ? user.fullname.charAt(0).toUpperCase() : <User />}
          </div>
          <button className="absolute bottom-0 right-0 p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <Camera size={14} />
          </button>
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-900">
          {user?.fullname || "User Name"}
        </h2>
        <p className="text-sm text-gray-500">
          {user?.email || "email@example.com"}
        </p>
      </div>
      <nav className="p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-sm transition-colors ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-sm hover:bg-red-50 transition-colors mt-2"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
