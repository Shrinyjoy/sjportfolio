import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent" >
      <div className="container-fluid" >
        <Link className="navbar-brand h1" to="/">
         Ｓ𝕁 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div class="center-align">
       
            <a
            class="waves-effect waves-light btn-floating btn-small social facebook"
            href="https://www.facebook.com/" 
          >
            <i class="fa fa-facebook"></i> Sign in with facebook
          </a>
           
          <a
            class="waves-effect waves-light btn-floating btn-small light-blue social linkedin"
            href="https://www.linkedin.com/feed/"
          >
            <i class="fa fa-linkedin"></i> Sign in with linkedin
          </a>
          
          <a
            class="waves-effect waves-light btn-floating btn-small social github"
            href="https://github.com/"
          >
            <i class="fa fa-github"></i> Sign in with github
          </a>
        
          <a
            class="waves-effect waves-light btn-floating btn-small light-blue social instagram"
            href="https://www.instagram.com/accounts/login/?hl=en"
          >
            <i class="fa fa-instagram"></i> Sign in with instagram
          </a>
          
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
