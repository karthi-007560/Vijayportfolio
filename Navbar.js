import React, { useState } from "react";
import Icon from "../Icon";
import "./Navbar.css";

export default function Navbar({ active, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (sectionName, sectionId) => {
    // Parent navigation function irundha use pannum
    if (typeof onNavigate === "function") {
      onNavigate(sectionName);
    }

    // Direct smooth scroll
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Mobile menu close
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Clients",
      id: "clients",
    },
    {
      name: "Projects",
      id: "portfolio",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <header className="mv-nav">

      {/* =========================
          LOGO
      ========================= */}

      <button
        className="mv-logo"
        type="button"
        onClick={() => handleNavigate("Home", "home")}
        aria-label="Go to home"
      >
        <Icon
          name="logo"
          className="mv-logo-mark"
          size={26}
        />

        <div className="mv-logo-text">
          <span className="name">
            Mahesh Vijay
          </span>

          <span className="role">
            VIDEO EDITOR &bull; CONTENT CREATOR
          </span>
        </div>
      </button>


      {/* =========================
          DESKTOP NAV
      ========================= */}

      <nav className="desktop-nav">
        <ul className="mv-links">

          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={
                  active === item.name
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleNavigate(
                    item.name,
                    item.id
                  )
                }
              >
                {item.name}
              </button>
            </li>
          ))}

        </ul>
      </nav>


      {/* =========================
          MOBILE MENU BUTTON
      ========================= */}

      <button
        className={`mobile-menu-btn ${
          menuOpen ? "open" : ""
        }`}
        type="button"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* =========================
          MOBILE NAV
      ========================= */}

      <nav
        className={`mobile-nav ${
          menuOpen ? "show" : ""
        }`}
      >
        <ul>

          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={
                  active === item.name
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleNavigate(
                    item.name,
                    item.id
                  )
                }
              >
                {item.name}
              </button>
            </li>
          ))}

        </ul>
      </nav>

    </header>
  );
}