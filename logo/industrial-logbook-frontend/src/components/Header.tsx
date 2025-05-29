import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

const Header: React.FC = () => (
  <header className="bg-maroon py-2 shadow-sm fixed-top">
    <nav className="container d-flex align-items-center justify-content-between">
      <div className="fw-bold fs-4"> {/* Logo placeholder */}
        <span>LOGBOOK</span>
      </div>
      <ul className="nav">
        <li className="nav-item"><a className="nav-link text-white" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#logbooks">View Logbooks</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#help">Help</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;