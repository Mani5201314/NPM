import React from "react";
import "../styles/Navbar/Navbar.css"
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar Navbarbar-expand-lg Navbarbar-light border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            🖤
          </Link>
          <button className="hover_btn">Nail Polish Makeover </button>
            <div style={{ paddingRight: "25px" }}>
              <Link to="/pro" className="active pe-4" id="anchor">
                Pro
              </Link>
              <Link to="/teams" className="active pe-4" id="anchor">
                Teams
              </Link>
              <Link to="/pricing" className="active pe-4" id="anchor">
                Pricing
              </Link>
              <Link to="/documentation" className="active pe-4" id="anchor">
                Documentation
              </Link>
            </div>
          </div>
        
      </nav>
    </div>
  );
};

export default Navbar1;
