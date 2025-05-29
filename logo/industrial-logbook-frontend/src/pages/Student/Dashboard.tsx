import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-house", href: "/student/dashboard" },
  { label: "My Logbook", icon: "bi bi-journal-text", href: "/student/logbook" },
  { label: "Submit Report", icon: "bi bi-upload", href: "/student/submit-report" },
  { label: "Supervisor Feedback", icon: "bi bi-chat-dots", href: "/student/feedback" },
  { label: "Profile", icon: "bi bi-person", href: "/student/profile" },
];

const StudentDashboard: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Welcome, Student</span>
        <button className="btn btn-outline-light btn-sm">Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-calendar-check fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Days Logged</h5>
                <p className="card-text fs-4">--</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-chat-dots fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Feedback Received</h5>
                <p className="card-text fs-4">--</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-hourglass-split fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Pending Entries</h5>
                <p className="card-text fs-4">--</p>
              </div>
            </div>
          </div>
        </div>
        {/* Activity Timeline and Quick Add Button can be added here */}
        <div className="mt-5 alert alert-info">Activity timeline and quick add log entry coming soon.</div>
      </main>
    </div>
  </div>
);

export default StudentDashboard;