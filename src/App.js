import React from "react";
import Navbar from "./components/Navbar";
// import { Tab, Tabs } from "react-materialize";
// import Nav from "./components/Navbar";
// import Parallax from "react-materialize/lib/Parallax";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
// import { useLocation } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Home: <Home />,
      About: <About />,
      Skills: <Skills />,
      Projects: <Projects />,
      Contact: <Contact />,
      
    };
  }
  render() {
  //  const { Home } = this.state;
  //  const { About } = this.state;
  //   let { Skills } = this.state;
  //   let { Contact } = this.state;
    // const x = window.onload();
    // x.onpagehide(<Navbar />);
    // const x = document.onclick;
    // if (x === "About") ? <Home />: <Navbar />
    // document.ready(function(x){
    //   if (x === "About") ? ("Home").hide(): ("Home").show();
    // });
    return (
      <div>
      
      
      <Navbar />
        {!Home ? About&&Skills&&Projects&&Contact: Home}
      
    
        <Routes>
        
     {/* <Route path="/navbar" element={<Navbar/>} /> */}
     <Route path="/" exact element={<Home />}/>
     <Route path="/about" element={<About />} />
     <Route path="/skills" element={<Skills />} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/page1" element={<Page1 />} />
     <Route path="/page2" element={<Page2 />} />
     <Route path="/page3" element={<Page3 />} />
     <Route path="/page4" element={<Page4 />} />
     <Route path="/page5" element={<Page5 />} />
     </Routes>
     {/* <Route path="/home" exact element={<Home />} render={()=>{return(<Home />);}} sensitive/> */}
      </div>
    );
    
  }
}
export default App;