import axios from "../axios";

const profileService = {
  getUserProfile: async () => {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  },

  updateProfile: async (profileData) => {
    const token = localStorage.getItem("authToken");
    const response = await axios.put("/users/profile", profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  updatePassword: async (oldPassword, newPassword) => {
    const token = localStorage.getItem("authToken");
    const response = await axios.put("/users/profile",
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};

export default profileService;
