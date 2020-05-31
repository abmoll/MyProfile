import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{padding: '0 10px 0 10px', borderRadius:'8px', background:'rgba(242, 243, 247, 0.7)', fontFamily: 'Optima', fontWeight: '100'}}>Alex Moll</h1>
                          <p><a className="btn btn-primary" href="https://drive.google.com/file/d/1es-1LfHX-0wejZaarr0ZtyxssE3ylmwh/view?usp=sharing" style={{color: 'black'}} target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{padding: '0 10px 0 10px', borderRadius:'8px', background:'rgba(242, 243, 247, 0.7)', fontFamily: 'Optima', fontWeight: '100'}}>Web Developer</h1>
                          <p><a className="btn btn-primary" href="http://167.172.126.107:8080/" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Near <br/>Boulder Colorado </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
