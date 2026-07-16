import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthContext";
import { Navigate } from "react-router-dom";

function LoginProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  return <>{!user ? children : <Navigate to={"/"} />}</>;
}

export default LoginProtectedRoute;
