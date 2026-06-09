// src/layouts/DashboardLayout.tsx

import {
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    alert("Logout berhasil!");
    navigate("/login");
  };

  const menus = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Category Event", path: "/dashboard/category", icon: "🗂️" },
    { name: "Event", path: "/dashboard/event", icon: "📅" },
    { name: "Pembicara", path: "/dashboard/pembicara", icon: "🎤" },
    { name: "User", path: "/dashboard/user", icon: "👤" }, // ← tambah ini
  ];

  return (
    <div className="flex h-screen bg-[#f7f8fc] overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col justify-between shadow-sm">

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div className="h-24 px-7 flex items-center border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#7B1D3F] text-white flex items-center justify-center text-xl font-black shadow-sm">
                I
              </div>
              <div>
                <h1 className="text-2xl font-black text-[#1a0a10] tracking-tight">
                  INVOFEST
                </h1>
                <p className="text-xs text-gray-400 mt-0.5">
                  Event Management System
                </p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="px-4 py-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 px-4 mb-4">
              Main Menu
            </p>

            <nav className="flex flex-col gap-2">
              {menus.map((menu) => {
                const isActive = location.pathname === menu.path;

                return (
                  <Link
                    key={menu.path}
                    to={menu.path}
                    className={`group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300
                      ${isActive
                        ? "bg-[#7B1D3F] text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                      }
                    `}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all
                      ${isActive
                        ? "bg-white/15"
                        : "bg-gray-100 group-hover:bg-white"
                      }
                    `}>
                      {menu.icon}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{menu.name}</span>
                      <span className={`text-[11px] ${isActive ? "text-white/70" : "text-gray-400"}`}>
                        Manage data
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="p-4 border-t border-gray-100">

          {/* PROFILE — klik ke biodata */}
          <Link
            to="/dashboard/biodata"
            className={`flex items-center gap-3 rounded-2xl p-4 mb-4 transition-all cursor-pointer
              ${location.pathname === "/dashboard/biodata"
                ? "bg-[#7B1D3F] text-white"
                : "bg-gray-50 hover:bg-rose-50 hover:border hover:border-rose-100"
              }
            `}
          >
            {/* Avatar */}
            {user?.photo ? (
              <img
                src={user.photo}
                alt={user.nama}
                className="w-12 h-12 rounded-2xl object-cover shadow-sm ring-2 ring-white"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            ) : (
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-sm text-lg
                ${location.pathname === "/dashboard/biodata"
                  ? "bg-white/20 text-white"
                  : "bg-[#7B1D3F] text-white"
                }
              `}>
                {user?.nama?.charAt(0).toUpperCase() ?? "F"}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h3 className={`text-sm font-bold truncate
                ${location.pathname === "/dashboard/biodata" ? "text-white" : "text-[#1a0a10]"}
              `}>
                {user?.nama ?? "Fatih Mubarok"}
              </h3>
              <p className={`text-xs truncate
                ${location.pathname === "/dashboard/biodata" ? "text-white/70" : "text-gray-400"}
              `}>
                Administrator
              </p>
            </div>

            <span className={`text-xs font-bold
              ${location.pathname === "/dashboard/biodata" ? "text-white/70" : "text-gray-300"}
            `}>
              →
            </span>
          </Link>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full bg-[#7B1D3F] hover:bg-[#98234c] text-white py-3 rounded-2xl font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-7">
          <Outlet />
        </div>
      </main>
    </div>
  );
}