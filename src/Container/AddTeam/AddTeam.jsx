import React from "react";
import "./AddTeam.css";
import tri from "../../image/tri.png";
import notify from "../../image/notify.png";

const AddTeam = () => {
  return (
    <div className="addteam">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
            <label htmlFor="input"
            style={{width: "100%"}}
            >Add team members</label>
              <img src={tri} alt="" />
              <button className="btn shadow-none btn-outline-primary">
                + <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="input">Add guest</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="shadow-none form-control input-title"
                  placeholder="Email invitation"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn send btn-outline-primary shadow-none"
                    type="button"
                    id="button-addon2"
                  >
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="input">Upload attachements</label>
              <img src={notify} alt="" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="input">Set reminder</label>
              <select id="select" class="form-control form-control-sm"><option>2 hours before event</option><option>3 hours before event</option><option>4 hours before event</option></select>
            </div>
          </div>
          <div className="row">
              <div className="col">
                  <button className="btn btn-primary">Create Event</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
