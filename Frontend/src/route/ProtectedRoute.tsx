import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function ProtectedRoute() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    // jika belumm login, redirect ke halaman login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}