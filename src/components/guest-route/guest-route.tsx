import { Navigate, Outlet } from "react-router";
import { useAuth } from "../auth-provider";

export default function GuestRoute() {
  const { user, status } = useAuth();

  if (status === "loading") {
    return null;
  }

  if (user !== null) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
