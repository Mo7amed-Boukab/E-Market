import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />

            <div className={`
        flex flex-col min-h-screen transition-all duration-300 ease-in-out
        ${isCollapsed ? 'lg:pl-20' : 'lg:pl-64'}
      `}>
                <Header toggleSidebar={toggleSidebar} />

                <main className="flex-1 p-4 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
