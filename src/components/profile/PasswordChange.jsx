import { useState } from "react";
import { Lock } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import InputField from "./InputField";

const PasswordChange = ({ onSave }) => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("");
  };

  const handleSubmit = () => {
    // Validation
    if (
      !passwords.oldPassword ||
      !passwords.newPassword ||
      !passwords.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (passwords.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    onSave(passwords.oldPassword, passwords.newPassword);

    // Reset form
    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="bg-white rounded-sm border border-gray-100 p-6 sm:p-8 h-full flex flex-col">
      <ProfileHeader
        title="Change Password"
        subtitle="Update your password to keep your account secure."
        buttonText="Update Password"
        onButtonClick={handleSubmit}
      />

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 max-w-md">
        <InputField
          label="Current Password"
          type="password"
          icon={Lock}
          placeholder="Enter current password"
          value={passwords.oldPassword}
          onChange={(e) => handleChange("oldPassword", e.target.value)}
        />

        <InputField
          label="New Password"
          type="password"
          icon={Lock}
          placeholder="Enter new password (min 6 characters)"
          value={passwords.newPassword}
          onChange={(e) => handleChange("newPassword", e.target.value)}
        />

        <InputField
          label="Confirm New Password"
          type="password"
          icon={Lock}
          placeholder="Confirm new password"
          value={passwords.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />
      </div>
    </div>
  );
};

export default PasswordChange;
