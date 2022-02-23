import React, { Component } from "react";
// import { Row, Col, ProgressBar } from "react-materialize";

export default class Page2 extends Component {
  render() {
    return (
      <div className="container page2">
        <div className="row">
          <div className="col s12 m6">
            Front End
            <div class="progress">
              <div class="determinate" style={{ width: "80%"}}></div>
            </div>
            Back End
            <div class="progress">
              <div class="determinate" style={{ width: "70%", backgroundColor:"#29b6f6"}}></div>
            </div>
            React
            <div class="progress">
              <div class="determinate" style={{ width: "80%" }}></div>
            </div>
            Javascript
            <div class="progress">
              <div class="determinate" style={{ width: "90%", backgroundColor:"#29b6f6"}}></div>
            </div>
            Database
            <div class="progress">
              <div class="determinate" style={{ width: "75%"}}></div>
            </div>
            Web Design
            <div class="progress">
              <div class="determinate" style={{ width: "85%", backgroundColor:"#29b6f6"}}></div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="row">
              <div className="col s2"></div>
              <div className="col s8">
                <h1 style={{ color: "#26a69a", fontSize: "60px" }}>
                  <div> ᗯᕼY </div>
                  <div>YOᑌ  </div>
                  <div>ᕼIᖇE ᗰE? ☃️</div>
                </h1>
              </div>
              <div className="col s2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

