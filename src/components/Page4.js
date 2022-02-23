import React, { Component } from "react";

export default class Page4 extends Component {
  render() {
    return (
      <div className="container page2">
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div class="center-align">
                <h2 style={{ paddingBottom: "25px", fontSize: "30px" }}>𝒮𝓀𝒾𝓁𝓁𝓈</h2>
                <a class="btn-floating btn-large cyan pulse" href={() => false}>
                  <i class="material-icons">build</i>
                </a>
                <div style={{ paddingTop: "25px" }}>
                    <p>Designing</p>
                    <p>Full Stack<button type="button" class="btn btn-link btn-sm linkbtn" 
                    style={{textTransform:"Capitalize", textDecoration: "none"}}>
                    <a href="../../../Skills">Developer</a>
                  </button></p>
                </div>
                <h2 style={{ paddingTop: "25px", fontSize: "30px", color:"greenyellow" }}>ⲯⲯ🌸ⲯⲯ</h2>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="row">
              <div class="center-align">
                <h2 style={{ paddingBottom: "25px", fontSize: "30px"}}> 𝒬𝓊𝒶𝓁𝒾𝒻𝒾𝒸𝒶𝓉𝒾𝑜𝓃</h2>
                <a class="btn-floating btn-large cyan pulse" href={() => false}>
                  <i class="material-icons">school</i>
                </a>
                <div style={{ paddingTop: "25px" }}>
                    <p>M.Tech</p>
                    <p>B.E</p>
                </div>
                <h2 style={{ paddingTop: "25px", fontSize: "30px", color:"greenyellow" }}>ⲯⲯ🌸ⲯⲯ</h2>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="row">
              <div class="center-align">
                <h2 style={{ paddingBottom: "25px", fontSize: "30px" }}>𝐸𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒</h2>
                <a class="btn-floating btn-large cyan pulse" href={() => false}>
                  <i class="material-icons">business_center</i>
                </a>
                <div style={{ paddingTop: "25px" }}>
                    <p>Web developer(Full stack)</p>
                    <p>.Net developer</p>
                </div>
                <h2 style={{ paddingTop: "25px", fontSize: "30px", color:"greenyellow" }}>ⲯⲯ🌸ⲯⲯ</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
