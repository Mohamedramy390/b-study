import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>BStudy</h1>
            <span className="tagline">Empower Your Learning Journey</span>
          </Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/#features" className="nav-link">Features</Link>
          <Link to="/#courses" className="nav-link">Courses</Link>
          <Link to="/about" className="nav-link">About</Link>
          <button className="login-btn">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 