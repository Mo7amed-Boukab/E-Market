import { createContext, useState, useEffect, useContext } from "react";
import axios from "../axios";
import { LoaderContext } from "./LoaderContext";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const { showLoader, hideLoader, isLoading } = useContext(LoaderContext);

  useEffect(() => {
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = async (credentials) => {
    showLoader();
    try {
         // test loader
         // await new Promise(resolve => setTimeout(resolve, 3000));
      const response = await axios.post("/auth/login", credentials);
      // console.log(response);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setToken(response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
     } catch (error) {
        console.error("Erreur lors de la connexion :", error.response?.data?.message || error.message);
        throw error; 
     } finally {
      hideLoader();
     };
  };
  const register = async (credentials) => {
      showLoader();
      try {
           const response = await axios.post("/auth/register", credentials);
           if(response.status === 201 || response.status === 200){
               await login({ email: credentials.email , password : credentials.password });
           }
           return response;
      } catch(error) {
           console.error("Erreur lors de la connexion ", error.response?.data?.message || error.message);
           throw error;
      } finally {
       hideLoader();
     };
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, isAuthenticated, fieldErrors, setFieldErrors}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
