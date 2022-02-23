import React, { Component } from 'react'
import { Parallax } from 'react-materialize'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
// import About from './About'

export default class Home extends Component {
  render() {
    return (
      <div>
          <Parallax
          image={
            <img alt="" src="https://photos.sjrdesign.net/images/stars_constellation_orion2_big.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}>
            <Page1/>
          </Parallax>
         
      
        
        <div className="section white">
          <Page2/>
          {/* <div className="row container">
            <h2 className="header">Parallax</h2>
            <p>about</p>
          </div> */}
        </div>
        <Parallax
          image={
            <img alt="" src="https://photos.sjrdesign.net/images/stars_constellation_orion2_big.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}
          >
            <Page3/>
          </Parallax>
         
        <div className="section white">
          <Page4 />
        </div>
        <Parallax
          image={
            <img alt="" src="https://photos.sjrdesign.net/images/stars_constellation_orion2_big.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}
        ><Page5 />
          </Parallax> 
      
      </div>
    )
  }
}
//  {/* <p className="grey-text text-darken-3 lighten-3">
//               Parallax is an effect where the background content or image in
//               this case, is moved at a different speed than the foreground
//               content while scrolling.
//             </p> */}