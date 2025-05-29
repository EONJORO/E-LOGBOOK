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

const SuperAdminDashboard: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      {/* Header */}
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <div className="d-flex align-items-center">
          <img
            src="/assets/superadmin-avatar.png"
            alt="Super Admin"
            style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 12 }}
          />
          <span className="fw-bold text-white">Super Admin</span>
        </div>
        <button className="btn btn-outline-light btn-sm">Logout</button>
      </header>
      {/* Main Content */}
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-people fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Total Users</h5>
                <p className="card-text fs-4">--</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-journal-text fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Logbooks Submitted</h5>
                <p className="card-text fs-4">--</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-hourglass-split fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Pending Approvals</h5>
                <p className="card-text fs-4">--</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-heart-pulse fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">System Health</h5>
                <p className="card-text fs-4">OK</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default SuperAdminDashboard;