import React from "react";
import "./Description.css";
import hikoot from "../../image/hikoot.png";

const Description = () => {
  return (
    <div className="description">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <label htmlFor="input">TITLE</label>
              <div class="input-group mb-3">
                <input
                  style={{width: "100%"}}
                  type="text"
                  class="shadow-none form-control input-title"
                  placeholder="Hikoot app concept development"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary shadow-none ad"
                    type="button"
                    id="button-addon2"
                  >
                    + Add Description
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="input">Day</label>
              <input type="date" />
            </div>
            <div className="col">
              <label htmlFor="input">Hour</label>
              <input type="time" />
            </div>
            <div className="col">
              <label htmlFor="input">Duration</label>
              <input type="time" />
            </div>
          </div>
          <div className="row">
            <div className="col all-check">
              <i className="fa fa-check-circle float-left mr-1"></i>
              <p className="pe-check">
                This event will take place on the 13th of november 2017 from
                10:15am until 1:00pm
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="input">Location</label>
              <div class="input-group mb-3">
                <input
                  style={{width: "100%"}}

                  type="text"
                  class="shadow-none form-control input-title"
                  placeholder="Hikoot app concept development"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary shadow-none ad2"
                    type="button"
                    id="button-addon2"
                  >
                    + Seet meeting room
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="input">Upload attachements</label>
              <img src={hikoot} alt="" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <div className="box-drop">
              <div className="all-drop">
                <i className="fa fa-cloud-upload float-left"></i>
                <p>You can also drop your file</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
