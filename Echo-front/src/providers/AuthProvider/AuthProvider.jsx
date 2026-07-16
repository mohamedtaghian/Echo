import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login, register } from "../../lib/api";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const saveAuthSession = (data) => {
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      saveAuthSession(data);
      toast.success(`Welcome ${data.user.name}`);
    },
    onError: (error) => {
      const message = error.response?.data || "Login failed";
      toast.error(message);
    },
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      saveAuthSession(data);
      toast.success("Registered successfully");
    },
    onError: (error) => {
      const message = error.response?.data || "Registration failed";
      toast.error(message);
    },
  });

  const handleLogin = async (data) => {
    try {
      await loginMutation.mutateAsync(data);
    } catch (error) {
      throw new Error(error.response?.data || "Login failed");
    }
  };

  const handleRegister = async (data) => {
    try {
      await registerMutation.mutateAsync(data);
    } catch (error) {
      throw new Error(error.response?.data || "Registration failed");
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
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
        isLoading: loginMutation.isPending || registerMutation.isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
