import React from "react";
import "./Uploader.css";
import table from "../../image/table.png";
import car from "../../image/car.png";
import upload from "../../image/upluoad.png";

const Uploader = () => {
  return (
    <div className="contener">
      <div className="row image-form">
        <div className="">
          <img src={upload} className="" width="80" alt="" />
        </div>
        <div className="col desc-image-form">
          <h6>Uploader</h6>
          <p>14 March</p>
        </div>
      </div>
      <div className="row calendar">
        <div className="progress-bar"></div>
        <i className="fa fa-check"></i>
        <p className="pe-size">
          10,9 <span>MB</span>
        </p>
        <p className="pe-image">User_interviews.pdf</p>
        <p className="view-file">View file</p>
      </div>
      <div className="row calendar">
        <div className="progress-bar2"></div>
        <i className="fa fa-times"></i>
        <p className="pe-size">
          7,48 <span>MB</span>
        </p>
        <img src={table} alt="" className="image-form" />
        <p className="pe-image">Sketches_01.jpeg</p>
        <p className="view-file">View file</p>
      </div>
      <div className="row calendar">
        <div className="progress-bar3"></div>
        <i className="fa fa-times"></i>
        <p className="pe-size">
          6,00 <span>MB</span>
        </p>
        <img src={car} alt="" className="image-form" />
        <p className="pe-image">Sketches_02.jpeg</p>
        <p className="view-file">View file</p>
      </div>
    </div>
  );
};

export default Uploader;
