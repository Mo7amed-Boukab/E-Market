import { useEffect, useState, useContext } from "react";
import { User, Package, Settings } from "lucide-react";
import SubHeader from "../components/home-page/SubHeader";
import Header from "../components/home-page/Header";
import Footer from "../components/home-page/Footer";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ProfileInfo from "../components/profile/ProfileInfo";
import PasswordChange from "../components/profile/PasswordChange";
import EmptyState from "../components/profile/EmptyState";
import { LoaderContext } from "../context/LoaderContext";
import { AuthContext } from "../context/AuthContext";
import profileService from "../services/profileService";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  const { showLoader, hideLoader , isLoading} = useContext(LoaderContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const UserProfile = async () => {
    try {
      showLoader();
      const userData = await profileService.getUserProfile();
      setUser(userData);
    } catch (error) {
      console.error("Error dans récupération du profil : ", error);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    UserProfile();
  }, []);

if(isLoading) {
   showLoader();
}

  const tabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "orders", label: "My Orders", icon: Package },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSaveProfile = async (profileData) => {
    try {
      showLoader();
      const response = await profileService.updateProfile(profileData);
      setUser(response.updatedUser);
      // Mettre à jour le localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...storedUser, ...response.updatedUser })
      );
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      hideLoader();
    }
  };

  const handleStartShopping = () => {
    navigate("/products");
  };

  const handlePasswordChange = async (oldPassword, newPassword) => {
    try {
      showLoader();
      await profileService.updatePassword(oldPassword, newPassword);
    } catch (error) {
      console.error("Error updating password:", error);
    } finally {
      hideLoader();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-serif">
      <SubHeader />
      <Header />

      <main className="grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <ProfileSidebar
                user={user}
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onLogout={handleLogout}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 h-full">
              {activeTab === "profile" && (
                <ProfileInfo user={user} onSave={handleSaveProfile} />
              )}

              {activeTab === "orders" && (
                <EmptyState
                  icon={Package}
                  title="No orders yet"
                  description="When you place an order, it will appear here."
                  buttonText="Start Shopping"
                  onButtonClick={handleStartShopping}
                />
              )}

              {activeTab === "settings" && (
                <PasswordChange onSave={handlePasswordChange} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
