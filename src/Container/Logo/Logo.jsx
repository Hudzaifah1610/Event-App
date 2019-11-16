import React from "react";
import "./Logo.css";
import { NavLink } from "react-router-dom";
import logo1 from "../../image/logo1.png";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.png";
import logo4 from "../../image/logo4.png";
import logo5 from "../../image/logo5.png";
import logo6 from "../../image/logo6.png";
import logo7 from "../../image/logo7.png";

const Logo = () => {
  return (
    <div className="row logoPage">
      <div className="col">
        <div className="row main">
          <img src={logo1} alt="" />
        </div>
        <div className="row">
          <img src={logo2} alt="" />
        </div>
        <NavLink exact to="/" activeClassName="selected">
          <div className="row">
            <img src={logo3} alt="" />
          </div>
        </NavLink>

        <NavLink to="/form" activeClassName="selected">
          <div className="row">
            <img src={logo4} alt="" />
          </div>
        </NavLink>

        <div className="row">
          <img src={logo5} alt="" />
        </div>
        <div className="row">
          <img src={logo6} alt="" />
        </div>
        <div className="row">
          <img src={logo7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
