
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/custom.css";

const Home: React.FC = () => (
  <>
    <Header />
    <main style={{ paddingTop: "70px" }}>
      {/* Hero Section */}
      <section className="bg-maroon text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Empowering Students Through Practical Experience</h1>
          <p className="lead mb-4">
            Easily record, track, and evaluate your industrial attachment activities.
          </p>
          {/* Illustration/Image Placeholder */}
          <div className="mb-4">
            <img src="/assets/hero-illustration.svg" alt="Industry Training" style={{ maxWidth: 320 }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-maroon mb-3">About the System</h2>
          <p>
            The Industrial Attachment Logbook System streamlines the process of recording, supervising, and evaluating student industrial attachments. It benefits students, supervisors, and administrators by providing an easy-to-use, centralized platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-maroon mb-4">Features</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="bi bi-journal-text fs-1 text-maroon mb-2"></i>
                  <h5 className="card-title">Student Logging</h5>
                  <p className="card-text small">Easily add and manage daily logbook entries.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="bi bi-chat-dots fs-1 text-maroon mb-2"></i>
                  <h5 className="card-title">Supervisor Feedback</h5>
                  <p className="card-text small">Receive and review feedback from supervisors.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="bi bi-file-earmark-pdf fs-1 text-maroon mb-2"></i>
                  <h5 className="card-title">PDF Export</h5>
                  <p className="card-text small">Export your logbook as a PDF for submission.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm text-center h-100">
                <div className="card-body">
                  <i className="bi bi-person-badge fs-1 text-maroon mb-2"></i>
                  <h5 className="card-title">Role-based Dashboards</h5>
                  <p className="card-text small">Custom dashboards for students, supervisors, and admins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;