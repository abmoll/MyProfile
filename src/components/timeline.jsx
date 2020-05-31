import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">experience</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Software Engineer at Denovo <span>Jan. 2018 - present</span></h2>
                        <p>At Denovo I used agile processes along with the latest JavaScript frameworks to build a reliable, highly robust web application used by over 200 companies. I integrated Google Analytics with our proprietary ITSM website to track application usage, and gathered metrics to enhance website features, improve performance, and increase user retention. In addition, I reduced the effort required to test software releases by creating automated tests for new application features using Chai, Puppeteer, and Mocha.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Web Developer at CodeCraft <span>Aug. 2017 - Dec. 2017</span></h2>
                        <p>I completed a 16 week immersive training program offering a professional certificate in full-stack web development. Produced work for a large variety of projects that required use of jQuery, Node.js, Vue.js, React, Express.js, Bootstrap, MongoDB, and Git.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Website Documentation Developer at Viavi <span>Apr. 2010 - Jun. 2017</span></h2>
                        <p>At Viavi I streamlined business workflows extensively by creating processes for single-sourcing web documents and templates in XML and HTML format. I built a content management system using HTML, CSS, and JavaScript to enable document reuse. I also made software developer’s jobs easier by using agile processes to create well-structured SDK Guides, API manuals, and installation guides.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
