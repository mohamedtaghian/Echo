import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/login", data);

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      toast.success(`Welcome ${res.data.user.name}`);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
      throw new Error(error.response.data);
    } finally {
      setIsLoading(false);
      console.log("login", data);
    }
  };

  const handleRegister = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/register", data);

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      toast.success("Registered successfully");
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
      throw new Error(error.response.data);
    } finally {
      setIsLoading(false);
      console.log("reg", data);
    }
  };

  const handleLogout = () => {
    const logout = toast.loading("Logging out");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.dismiss(logout);
    toast.success("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleRegister, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
