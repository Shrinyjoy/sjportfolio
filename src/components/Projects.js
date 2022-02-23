import React, { Component } from "react";
import reactecom from "../../src/images/reactecom.png"
import chatio from "../../src/images/chatio.png"
import game from "../../src/images/game.png"
import reactsurvey from "../../src/images/reactsurvey.png"
import userproangular from "../../src/images/userproangular.png"
// import forumapp from "../../src/images/forumapp.png"
import sjprofile from "../../src/images/sjprofile.png"

export default class Projects extends Component {
  render() {
    return (
      <div className="container submenu">
        <h1 class="center-align" style={{color:"#26c6da" }}>Projects</h1>
        <div className="container" style={{marginTop: "40px"}}>
         <div className="row">
          <div className="card cardfull">
            <img src={reactecom} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">React Ecommerce</h5>
              <p className="card-text">
                Shopping cart app with react redux and node.
              </p>
              {/* <Link /> */}
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-warning btn-sm"><a href="https://react-shopping-cart-ecom-web.herokuapp.com/">More</a></button>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="card cardfull">
            <img src={sjprofile} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">React Portfolio</h5>
              <p className="card-text">
               React single page app with front end frameworks.
              </p>
              {/* <Link /> */}
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#99cc00"}}><a href="https://shrinyjm.herokuapp.com/">More</a></button>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="card cardfull">
            <img src={reactsurvey} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">React Survey</h5>
              <p className="card-text">
                Full stack MERN app with authorization and third party libraries. 
              </p>
              
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-warning btn-sm"><a href="https://mighty-harbor-37041.herokuapp.com/">More</a></button>
              </div>
            </div>
         
        </div>
        </div>
        <div className="row">
        <div className="card cardfull">
            <img src={game} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Game app</h5>
              <p className="card-text">
                Front end javascript application using html and css.
              </p>
              
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#7e57c2"}}><a href="https://powerful-stream-37223.herokuapp.com/">More</a></button>
              </div>
            </div>
        
        </div>
        <div className="card cardfull">
            <img src={chatio} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Chat IO</h5>
              <p className="card-text">
                Front end node.js application with socket.io library.
              </p>
            
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-secondary btn-sm"><a href="http://immense-sea-79208.herokuapp.com/?">More</a></button>
              </div>
            </div>
         
        </div>
        <div className="card cardfull">
            <img src={userproangular} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">User Profile</h5>
              <p className="card-text">
                Angular4 SPA with API and authentication using local storage.
              </p>
             
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-danger btn-sm"><a href="https://jokeboard.herokuapp.com/">More</a></button>
              </div>
            </div>
         
        </div>
        </div>
        </div>
      </div>
    );
  }
}
