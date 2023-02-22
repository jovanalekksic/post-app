import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Blog app
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              All posts
            </a>
            {window.sessionStorage.getItem("auth_token") == null ? (
              <a className="nav-link" href="#">
                Login
              </a>
            ) : (
              <a className="nav-link" href="#">
                Logout
              </a>
            )}
            <a className="nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
