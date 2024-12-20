import React, { useState } from 'react';
import './slidenav.css';
import 'boxicons/css/boxicons.min.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={ `sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon"></i>
        <div className="logo_name">TrackNest</div>
      </div>
      <ul className="nav-list">
      <li>
          <a href="/">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
       
        <li>
          <a href="/">
            <i className="bx bx-money"></i>
            <span className="link_name">Income</span>
          </a>
          <span className="tooltip">Income</span>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-wallet"></i>
            <span className="link_name">Budget</span>
          </a>
          <span className="tooltip">Budget</span>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-line-chart-down"></i>
            <span className="link_name">Expense</span>
          </a>
          <span className="tooltip">Expense</span>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-bookmark-alt"></i>
            <span className="link_name">Tax</span>
          </a>
          <span className="tooltip">Tax</span>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-file-blank"></i>
            <span className="link_name">Invoice</span>
          </a>
          <span className="tooltip">Invoice</span>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-bell"></i>
            <span className="link_name">Notification</span>
          </a>
          <span className="tooltip">Notification</span>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-cog"></i>
            <span className="link_name">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>
        <li className="profile">
          <div className="profile_details">
            <img src="profile-img.png" alt="profile" />
            <div className="profile_content">
              <div className="name">Heisenberg</div>
              <div className="designation">User</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="logo.jpg" alt="logo" className="navbar-logo" />
        <i className="bx bx-menu hamburger-icon" onClick={toggleSidebar}></i> {/* Hamburger Icon */}
        
        <div class="search-container">
        <i class="bx bx-search"></i> 
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
       />
        </div>
      </div>
      <div className="navbar-right">
        <div className="notification">
          <i className="bx bx-bell"></i>
          <span className="notification-count">6</span>
        </div>
        <div className="profile-icon">
          <img src="profile-img.png" alt="profile" />
        </div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="text">Dashboard</div>
    </section>
  );
};

const SlideNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <HomeSection />
    </div>
  );
};

export default SlideNav;