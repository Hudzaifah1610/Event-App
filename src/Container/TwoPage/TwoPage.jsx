import React from "react";
import Logo from "../Logo/Logo";
import LogoMobile from "../Logo/LogoMobile";
import Input from "../Input/Input";
import Uploader from "../Uploader/Uploader";
import Form from "../Form/Form";

const TwoPage = () => {
  return (
    <div className="row mainpage">
      <div className="col">
        <div className="row wrapp-all">
          <div className="col-lg-1 logo-main">
            <Logo />
          </div>
          <div className="col logo-mobile">
            <LogoMobile />
          </div>
          <div className="col-lg">
            <div className="row input-main">
              <Input />
            </div>
            <div className="row ">
              <div className="col-lg list-main">
                <Form />
              </div>
              <div className="col-lg-2 calendar-main">
                <Uploader />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TwoPage;
