// This file is intentionally left blank.
import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/industry/dashboard" },
  { label: "Assigned Interns", icon: "bi bi-people", href: "/industry/assigned-interns" },
  { label: "Evaluate Interns", icon: "bi bi-clipboard-check", href: "/industry/evaluate-interns" },
  { label: "Feedback History", icon: "bi bi-clock-history", href: "/industry/feedback-history" },
];

const AssignedInterns: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Assigned Interns</span>
        <button className="btn btn-outline-light btn-sm">Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Assigned Interns</h2>
        {/* Table of assigned interns goes here */}
        <div className="alert alert-info">Assigned interns list coming soon.</div>
      </main>
    </div>
  </div>
);

export default AssignedInterns;