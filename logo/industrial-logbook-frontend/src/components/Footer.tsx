// filepath: src/components/Footer.tsx

import React from "react";
import "../styles/custom.css";

const Footer: React.FC = () => (
  <footer className="bg-dark-grey py-4 mt-auto">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div>
        <a href="/" className="text-light me-3">Home</a>
        <a href="#contact" className="text-light me-3">Contact</a>
        <a href="#privacy" className="text-light me-3">Privacy</a>
        <a href="#terms" className="text-light">Terms</a>
      </div>
      <div className="text-light small mt-2 mt-md-0">
        Email: info@institution.edu | Phone: +123456789
        <span className="ms-3">
          {/* Social icons placeholder */}
          <i className="bi bi-facebook me-2"></i>
          <i className="bi bi-twitter me-2"></i>
          <i className="bi bi-linkedin"></i>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;