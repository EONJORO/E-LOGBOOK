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

const FeedbackHistory: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Feedback History</span>
        <button className="btn btn-outline-light btn-sm">Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Feedback History</h2>
        {/* List of past evaluations goes here */}
        <div className="alert alert-info">Feedback history coming soon.</div>
      </main>
    </div>
  </div>
);

export default FeedbackHistory;