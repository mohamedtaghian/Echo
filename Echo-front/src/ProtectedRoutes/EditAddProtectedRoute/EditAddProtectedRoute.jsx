import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

function EditAddProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  return <>{user ? children : <Navigate to={"/auth"} />}</>;
}

export default EditAddProtectedRoute;
