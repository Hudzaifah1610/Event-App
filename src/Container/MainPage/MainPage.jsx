import React from "react";
import "./MainPage.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import LogoMobile from "../Logo/LogoMobile";
import Input from "../Input/Input";
import List from "../List/List";
import Calender from "../Calendar/Calendar";

const MainPage = () => {
  return (
    <div className="row mainpage">
      <div className="col">
        <div className="row wrapp-all">
          <div className="col-lg-1 logo-main">
            <Logo/>
          </div>
          <div className="col logo-mobile">
            <LogoMobile/>
          </div>
          <div className="col-lg">
            <div className="row input-main">
                {/* Input */}
                <Input/>
                </div>
            <div className="row ">
              <div className="col-lg list-main">
                <List/>
              </div>
              <div className="col-lg-2 calendar-main">
                <Calender/>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 calendar-main">Calendar</div> */}
        </div>
        
      </div>
    </div>
      );
};
export default MainPage;