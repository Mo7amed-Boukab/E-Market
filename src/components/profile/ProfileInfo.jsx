import { useState } from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const ProfileInfo = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phone: user?.phone || "",
    location: user?.location || "",
    bio: user?.bio || "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="bg-white rounded-sm border border-gray-100 p-6 sm:p-8 h-full flex flex-col">
      <ProfileHeader
        title="Profile Information"
        subtitle="Update your personal details here."
        buttonText="Save Changes"
        onButtonClick={handleSubmit}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          icon={User}
          value={formData.fullname}
          onChange={(e) => handleChange("fullname", e.target.value)}
        />

        <InputField
          label="Email Address"
          type="email"
          icon={Mail}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <InputField
          label="Phone Number"
          type="tel"
          icon={Phone}
          placeholder="+212 00 000-0000"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <InputField
          label="Location"
          icon={MapPin}
          placeholder="Nador, Morocco"
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />

        <TextAreaField
          label="Bio"
          placeholder="Tell us a little about yourself..."
          className="md:col-span-2"
          value={formData.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
