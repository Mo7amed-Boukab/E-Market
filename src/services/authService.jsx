import axios from '../axios';

const authService = {

   login: async (credentials) => {
      const response = await axios.post("/auth/login", credentials);
      return response.data;
   },

   register: async (credentials) => {
     const response = await axios.post("/auth/register", credentials );
     return response.data;
   },

   saveAuthData: (token, user) => {
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
   },

   getStoredAuth: () => {
      const token = localStorage.getItem("authToken");
      const user = localStorage.getItem("user");
      return {
         token,
         user: user ? JSON.parse(user) : null,
      };
   },

   clearAuthData: () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
   },
}

export default authService;