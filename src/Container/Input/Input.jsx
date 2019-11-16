import React from "react";
import human from "../../image/human.jpg";
import search from "../../image/search.svg"
import plane from "../../image/plane.svg"
import "./Input.css";

const Input = () => {
  return (
    <div className="man">
      {/* <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div> */}
      <div className="in-man">
      <img src={search} className="" alt="" />
      <input type="text" placeholder="Find a user team,meeting . . ." />
      {/* <div className="form-inline"> */}
      <button className="btn shadow-none btn-outline-primary">
           {/* <i className="fa fa-paper-plane"></i> */}
           <img src={plane} alt=""/>
            Invite</button>
      <img src={human} className="uwong" width="80" alt=""/>
      {/* </div> */}
      </div>
     
    </div>
  );
};

export default Input;
