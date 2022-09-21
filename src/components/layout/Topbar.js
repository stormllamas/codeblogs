import React from "react";

const Topbar = () => {
  return (
    <header className="app-header">
      <div className="m-container app-header-wrapper">
        <div className="header-menu">
          <a href="#null" className="header-menu-item">
            Posts
          </a>
          <a href="#null" className="header-menu-item">
            Search
          </a>
          <a href="#null" className="header-menu-item">
            Projects
          </a>
          <a href="#null" className="header-menu-item">
            About
          </a>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
