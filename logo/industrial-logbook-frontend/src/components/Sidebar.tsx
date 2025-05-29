// filepath: src/components/Sidebar.tsx

import React from "react";
import "../styles/custom.css";

interface SidebarProps {
  links: { label: string; icon: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => (
  <aside className="bg-dark-grey vh-100 p-3" style={{ width: 220 }}>
    <ul className="nav flex-column">
      {links.map(link => (
        <li className="nav-item mb-2" key={link.label}>
          <a href={link.href} className="nav-link text-light d-flex align-items-center">
            <i className={`me-2 ${link.icon}`}></i>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;