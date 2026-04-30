import { Navigate, useLocation } from "react-router-dom";
import { useAuth, Role } from "@/lib/auth";

const RequireRole = ({ role, children }: { role: Role; children: JSX.Element }) => {
  const user = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to={role === "admin" ? "/admin/login" : "/login"} state={{ from: location }} replace />;
  }
  if (user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"} replace />;
  }
  return children;
};

export default RequireRole;
