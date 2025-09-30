import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../images/logo.png';
import ThemeSwitcher from '../src/ThemeSwitcher';

export default function Layout({ setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout-wrapper">
      <header className="site-header">
        <div className="header-content">
          <div className="branding">
            <img src={logo} alt="Logo" className="site-logo" />
            <span className="site-title">Cabdirahman Ibrahim</span>
          </div>

          <div className="header-actions">
            <ThemeSwitcher setTheme={setTheme} />
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>
        </div>

        <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/project">Project</Link>
          <Link to="/education">Education</Link>
          <Link to="/services">Services</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}