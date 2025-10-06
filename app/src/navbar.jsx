import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import './navbar.css';
import logo from './assets/codeRev.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <NavLink to="/"><img className="logo" alt="logo" src={logo} /></NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={(e) => {
          e.stopPropagation();
          console.log('Toggler clicked', e);
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/shams220" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://x.com/nextleveldev22" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(Navbar);