// This file is intentionally left blank.
import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/superadmin/dashboard" },
  { label: "Manage Users", icon: "bi bi-people", href: "/superadmin/manage-users" },
  { label: "Manage Institutions", icon: "bi bi-building", href: "/superadmin/manage-institutions" },
  { label: "System Reports", icon: "bi bi-bar-chart", href: "/superadmin/system-reports" },
  { label: "Settings", icon: "bi bi-gear", href: "/superadmin/settings" },
];

const Settings: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Super Admin</span>
        <button className="btn btn-outline-light btn-sm">Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Settings</h2>
        {/* Settings UI goes here */}
        <div className="alert alert-info">Settings functionality coming soon.</div>
      </main>
    </div>
  </div>
);

export default Settings;