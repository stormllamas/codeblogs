import React from "react";

const Topbar = () => {
  return (
    <header className="app-header">
      <div className="m-container app-header-wrapper">
        <div className="avatar-title d-flex align-items-center">
          <img
            alt="avatar"
            src={require("../../static/img/reactme.jpg")}
            className="avatar"
          />
          <div className="header-title">
            <h2 className="text-techllama">Tech Llama</h2>
            <p>I share knowledge about frontend and design</p>
          </div>
        </div>
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
