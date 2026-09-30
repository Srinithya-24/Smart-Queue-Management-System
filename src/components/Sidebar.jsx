import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaSearch,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Join Queue", path: "/join", icon: <FaUsers /> },
    { name: "Analytics", path: "/analytics", icon: <FaChartBar /> },
    { name: "Search", path: "/search", icon: <FaSearch /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <aside
      style={{
        width: "250px",
        background: "#1E293B",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>QueueIQ</h2>

      {menuItems.map((item) => (
        <NavLink
  key={item.name}
  to={item.path}
  className="sidebar-link"
  style={({ isActive }) => ({
    color: isActive ? "#38BDF8" : "white",
    backgroundColor: isActive ? "#334155" : "transparent",
  })}
>
          {item.icon}
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;