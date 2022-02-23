import React, { Component } from "react";
import user from "../../src/images/laptopgirl.jpg";

export default class Page1 extends Component {
  render() {
    return (
      <div className="container page1">
        <div className="row">
          <div className="col s12 m6">
            <h1 style={{ color: "#26c6da", fontSize: "60px" }}>
              <div> 𝓗𝓲!</div>
              <div>𝓘 𝓪𝓶 𝓢𝓱𝓻𝓲𝓷𝔂 </div>
              <div>𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻!!! </div>
              <div style={{ fontSize: "20px" }}>꧁༺ 🌸🌸🌸 ༻꧂</div>
            </h1>
          </div>
          <div className="col s12 m6">
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4" style={{ paddingTop: "40PX" }}>
                <img
                  src={user}
                  alt="userlaptop"
                  style={{ height: "200px", width: "150px" }}
                />
              </div>
              <div className="col s4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
