import React from "react";
import "./Header.css";
import logoIcon from "../../assets/logo/Logo.svg"

function Header() {
  return (
    <nav className="navbar renix-nav navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoIcon} />
        </a>
        <form className="d-flex form-header-section" role="search">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Work
            </a>
            <a className="nav-link" href="#">
              Services
            </a>
            <a className="nav-link" href="#">
              About us
            </a>
            <a className="nav-link ">Blog</a>
            <a className="nav-link ">Contact</a>
          </div>
        </form>

        {/* </div> */}
      </div>
    </nav>
  );
}

export default Header;
