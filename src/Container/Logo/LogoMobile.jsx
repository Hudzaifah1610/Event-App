import React from "react";
import { NavLink } from "react-router-dom";

// import logo1 from "../../image/logo1.png";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.png";
import logo4 from "../../image/logo4.png";
import logo5 from "../../image/logo5.png";
import logo6 from "../../image/logo6.png";
import logo7 from "../../image/logo7.png";

const LogoMobile = () => {
  return (
    <nav class="navbar fixed-bottom navbar-light">
      <a class="navbar-brand" href="##">
        {/* Fixed bottom */}
        <img src={logo2} alt="" />
        <NavLink exact to="/">
          <img src={logo3} alt="" />
        </NavLink>

        <NavLink to="/form">
          <img src={logo4} alt="" />
        </NavLink>

        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </a>
    </nav>
  );
};

export default LogoMobile;
