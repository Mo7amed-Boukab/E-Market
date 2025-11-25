import { createContext, useState, useEffect, useContext } from "react";
import { LoaderContext } from "./LoaderContext";
import authService from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
      const data = await authService.login(credentials);
      authService.saveAuthData(data.token, data.user);
      setToken(data.token);
      setUser(data.user);
      setIsAuthenticated(true);
      return data.user; // Return user data for redirection logic
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
      await authService.register(credentials);
      await login({ email: credentials.email, password: credentials.password });
    } catch (error) {
      console.error("Erreur lors de la connexion ", error.response?.data?.message || error.message);
      throw error;
    } finally {
      hideLoader();
    };
  };

  const logout = () => {
    authService.clearAuthData();
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, isAuthenticated, fieldErrors, setFieldErrors }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
