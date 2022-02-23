import React, { Component } from "react";
import myfile from "../../src/images/ShrinyJoy_Resume.docx";

export default class About extends Component {
  render() {
    return (
      <div className="container submenu">
        <h1 class="center-align" style={{color:"#26c6da" }}>About Me</h1>
        <div
          className="container"
          style={{ marginTop: "40px", fontSize: "15px", padding: "20px 80px" }}
        >
          <div className="row">
            <p>
              I am a web developer work mainly on front end and back end
              application. Basically a freelancer, work for myself and others in
              design, code, deployment and maintenance. I have designed and
              developed more than 20 front end and 10 back end applications
              using React, Node, Angular, .Net and Php.
            </p>
          </div>
          <p>
            <div class="d-grid gap-4 col-3 mx-auto" style={{marginTop: "50px"}}>
              <button type="button" class="btn btn-outline-info btn-sm">
                <a target="_blank" rel="noreferrer" href={myfile} download>
                  Download Resume
                </a>
              </button>
            </div>
          </p>
        
          <div className="row" style={{marginTop: "50px"}}>
            <div className="col s12 m4">
              <h3>Freelancer</h3>
              <p>
                <ol style={{ listStyleType: "disc", color:"#bdbdbd"}} >
                  <li>Ecommerce level projects</li>
                  <li>Responsive web, design and maintenance</li>
                  <li>Developed more single page Portfolio projects in React and .Net</li>
                  <li>Updating latest technologies and bootcamp participation</li>
                </ol>
              </p>
            </div>
            <div className="col s12 m4">
            <h3>Full stack developer</h3>
            <p>
              <ol style={{ listStyleType: "disc", color:"#bdbdbd"}} >
                  <li>Full stack apps like MERN and MEAN</li>
                  <li>Email services and API configurations</li>
                  <li>Forum, Feedback and game apps</li>
                  <li>CMS projects and web maintenance </li>
                </ol>
              </p>
            </div>
            <div className="col s12 m4">
            <h3>Internship</h3>
            <p>
              <ol style={{ listStyleType: "disc", color:"#bdbdbd"}} >
                  <li>Small level applications</li>
                  <li>ASP.Net and SQL based  projects</li>
                  <li>Web layouts using html and css</li>
                  <li>Customer based admin level applications</li>
                </ol>
              </p>
            </div>
          </div>
       
          <div className="row">
            <h2 class="text-center">Certificates</h2>
           
            <p class="text-center">
              <ol style={{ listStyleType: "none", color:"#bdbdbd", marginTop:"20px", fontFamily:"'Lucida Handwriting', cursive"}} >
                  <li>The Ultimate Full Stack Web Development Bootcamp (2022)</li>
                  <li>Build Ecommerce Shopping Cart by React & Redux (2020)</li>
                  <li>Become A Full Stack Web Developer - Beginner to Advanced </li>
                  <li>Advanced Angular SPA (2017)</li>
                  <li>Web Developer Bootcamp (2017)</li>
                  <li>.Net Software Trainee (2011)</li>
                  <li>Oracle (2011)</li>
                </ol>
              </p>
          </div>
        </div>
      </div>
    );
  }
}
