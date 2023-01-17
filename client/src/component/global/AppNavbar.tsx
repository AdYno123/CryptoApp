import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <div className="bg-light py-3 mb-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand fs-1 fw-bold" to={"/"}>
                  Crypto<span className="text-info">App</span>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
