import { IconUserCircle } from "@tabler/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header w-100 py-5 border d-flex align-items-center justify-content-center">
      <div className="header-content w-100 d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          <img src={Logo} alt="stackunderflow" />
          <h5 className="ml-4">
            Queryunderflow
            <span style={{ fontSize: "3rem", color: "#F67328" }}>.</span>
          </h5>
          <Link
            to="/main/home"
            style={{
              textDecoration: "none",
              color: "#F67328",
              fontWeight: "bold",
              marginLeft: "1.2rem",
            }}
          >
            Home
          </Link>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </div>
        <div className="btns">
          <div className="profile" onClick={() => setShowMenu(!showMenu)}>
            <div className="avatar">
              <IconUserCircle size={55} color="#F67328" />
            </div>
            <div className={showMenu ? "d-block" : "d-none"}>
              <ul className="profile-menu">
                <li>
                  <Link
                    to="/main/profile"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Profile
                  </Link>
                </li>
                <div className="divider my-2"></div>
                <li>
                  <Link
                    to="/main/profile/user-answers"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    My Answers
                  </Link>
                </li>
                <div className="divider my-2"></div>
                <li>
                  <Link
                    to="/main/profile/user-questions"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    My Questions
                  </Link>
                </li>
                <div className="divider my-2"></div>
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
