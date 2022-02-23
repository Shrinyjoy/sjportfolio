import React, { Component } from "react";

export default class Page5 extends Component {
  render() {
    return (
      <div className="container page2" style={{paddingTop: "80px"}}>
        <div className="row">
        <div class="center-align" style={{fontSize:"20px"}}>
        一═デ︻ 𝘍𝘶𝘭𝘭 𝘚𝘵𝘢𝘤𝘬 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 ︻デ═一
        </div>
        </div>
        <div className="row">
        <div class="center-align">
       
            <a
            class="waves-effect waves-light btn-floating social facebook"
            href="https://www.facebook.com/" 
          >
            <i class="fa fa-facebook"></i> Sign in with facebook
          </a>
           
          <a
            class="waves-effect waves-light btn-floating light-blue social linkedin"
            href="https://www.linkedin.com/feed/"
          >
            <i class="fa fa-linkedin"></i> Sign in with linkedin
          </a>
          
          <a
            class="waves-effect waves-light btn-floating social github"
            href="https://github.com/"
          >
            <i class="fa fa-github"></i> Sign in with github
          </a>
        
          <a
            class="waves-effect waves-light btn-floating light-blue social instagram"
            href="https://www.instagram.com/accounts/login/?hl=en"
          >
            <i class="fa fa-instagram"></i> Sign in with instagram
          </a>
          
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <footer class="page-footer">
              <div class="container">
                <div class="row">
                    <div className="col s2"> </div>
                    <div className="col s8"> 
                    <div className="row">
                    <div className="col s1"></div>
                    <div className="col s2">
                    <a
                          class="grey-text text-lighten-3"
                          href="../../../"
                        >
                          Home
                        </a>
                    </div>
                    <div className="col s2">
                    <a
                          class="grey-text text-lighten-3"
                          href="../../../About"
                        >
                          About
                        </a>
                    </div>
                    <div className="col s2">
                    <a
                          class="grey-text text-lighten-3"
                          href="../../../Skills"
                        >
                          Skills
                        </a>
                    </div>
                    <div className="col s2">
                    <a
                          class="grey-text text-lighten-3"
                          href="../../../Projects"
                        >
                          Projects
                        </a>
                    </div>
                    <div className="col s2">
                    <a
                          class="grey-text text-lighten-3"
                          href="../../../Contact"
                        >
                          Contact
                        </a>
                    </div>
                    <div className="col s1"></div>
                    </div>
                    </div>   
                    <div className="col s2"> </div>
                </div>
              </div> 
              <div class="footer-copyright">
                <div class="container" style={{paddingTop: "50px"}}>
                  <p class="center-align">© 2022 Shriny</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
