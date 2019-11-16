import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import calendar from "../../image/calendar.png"

const Calender = () => {
    return ( 
        <div className="conteiner">
          <div className="row image-calendar">
            <div className="">
              <img src={calendar} width="80" alt=""/>
            </div>
            <div className="col desc-image-calendar">
              <h6>Calendar</h6>
              <p>02 March</p>
            </div>
          </div>
        <div className="row calendar">
          <div className="col in-calendar">
            <Calendar />
          </div>
        </div>
      </div>
     );
}
 
export default Calender;