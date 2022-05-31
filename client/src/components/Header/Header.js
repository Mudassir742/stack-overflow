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
          <h5 className="ml-4">Queryunderflow<sapn style={{fontSize:"3rem",color:"#F67328"}}>.</sapn></h5>
          <Link to="/" activeClassName='is-active' style={{ textDecoration: "none", color: "#F67328",fontWeight:'bold',marginLeft:'1.2rem'}}>Home</Link>
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
                    to="/account"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Profile
                  </Link>
                </li>
                <div className="divider my-2"></div>
                <li>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Account
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
          <div className="vr mx-4"></div>
          <Link to="/login" className="link" style={{ textDecoration: "none", color: "gray" }}>
            LogIn
          </Link>
          <Link to="/signup" className="link link2" style={{ textDecoration: "none", color: "gray" }}>
            SignUp
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
