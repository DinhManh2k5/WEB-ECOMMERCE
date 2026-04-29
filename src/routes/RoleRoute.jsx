import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function RoleRoute({ allowedRoles }) {
  const user = useAuthStore((s) => s.user);

  if (!user) return <Navigate to="/auth/login" replace />;
  if (!allowedRoles.includes(user.vai_tro)) return <Navigate to="/" replace />;

  return <Outlet />;
}
