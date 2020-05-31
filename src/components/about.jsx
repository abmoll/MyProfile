import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section style={{padding:'30px 0 0 0'}} className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a full stack web developer with JavaScript bootcamp certification in the MEVN stack. My wife and I have four boys (which makes for a decent recreational ski team). I love exploring new technologies and I have a passion for travel, having lived in England (south of London), as well as in the German wine country (it has more to offer than sweet Reislings). I am lucky enough to have family to visit in Dublin, Ireland, and Geneva, Switzerland.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section style={{padding:'30px 0 0 0'}} className="colorlib-about" data-section="projects">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Projects</span>
                    <h2 className="colorlib-heading">Itinerator</h2>
                    <p>The <a href="http://167.172.126.107:8080/">Itinerator</a> (click link to view beta release) is an application that leverages RESTful APIs such as Google maps, Eventful, and the Hiking Project to create travel itineraries with optimized directions between selected restaurants, museums, live events, and hiking trails for cities around the world. In addition to using 3 unique external APIs, it features a back-end server in Express to handle request and response routes. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section style={{padding:'30px 0 0 0'}} className="colorlib-about" data-section="expertise">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do</span>
                <h2 className="colorlib-heading">My expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have solid experience building web applications using JavaScript with HTML5 and CSS3, with an emphasis on Vue.js and React.js as front-end frameworks. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Structures</h3>
                    <p>Coming from a NoSQL background, I have a good grasp of data structures and database schema along with a well-founded knowledge of MongoDB.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>DevOps</h3>
                    <p>My current DevOps team provides continuous development support for an enterprise web application that enables IT system management. Because we are integrated with Operations, our team rapidly deploys software.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
