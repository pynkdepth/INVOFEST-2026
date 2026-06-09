import React from "react";
import { Home, Info, Users, HelpCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {

  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  const menuItems = [
    { label: "Beranda",     href: "/",            icon: <Home size={18} /> },
    { label: "Competition", href: "/Competition", icon: <Info size={18} /> },
    { label: "Seminar",     href: "/Seminar",     icon: <Users size={18} /> },
    { label: "Workshop",    href: "/Workshop",    icon: <HelpCircle size={18} /> },
    { label: "Talkshow",    href: "/Talkshow",    icon: <HelpCircle size={18} /> },
    { label: "Login",       href: "/Login",       icon: <HelpCircle size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
            alt="logo" 
            className="h-16" 
          />
        </div>
        <nav className="flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => 
                `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                  isActive ? activeStyle : defaultStyle
                }`
              }
            >
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;