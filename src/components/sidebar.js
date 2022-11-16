import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/logo-dep.png"
              style={{ height: "100" }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
             
            <li className="menu-item">
              {/* <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}

              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">List User</span>
              </NavLink> */}
            </li>
            
            
          
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}

              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>

            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/class"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">List Class</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addSV"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">ADD SV </span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
