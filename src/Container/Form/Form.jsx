import React from "react";
import "./Form.css";
import Description from "../Description/Description";
import AddTeam from "../AddTeam/AddTeam";

const Form = () => {
  return (
    <div className="list form">
      <div className="row">
        <div className="col all-list">
          <div className="row ">
            <p className="event event-form">Create Event</p>
            <div className="col">
              <button className="btn btn-secondary shadow-none float-right">
                <a>Cancel</a>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 descr">
                <Description/>
            </div>
            <div className="col-lg-4 add">
              <AddTeam/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
