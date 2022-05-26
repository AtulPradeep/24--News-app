import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

//Footer for more informations

function Footer() {
  const thumb = () => {
    alert("Thanks for the support");
  };
  return (
    <div>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    AT Software Solutions © 2022<span></span>
                  </h5>
                  <p>
                    AT news is a sub company of AT Software solutions Developed
                    by ATUL PRADEEP We provide live news to viewers 24/7.{" "}
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Get Started</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Top Leaders</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Success Stories</a>
                      </div>
                    </li>

                    <li>
                      <div className="thumb-content">
                        <a href="#.">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Get Started<span></span>
                  </h5>
                  <p>For more live news please subscribe to out page.</p>
                  <a className="btn" onClick={thumb} target="_blank">
                    Give us a thumbs up!
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p>
                    <a href="mailto:info@domain.com" title="glorythemes">
                      atul.pradep40@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright AT news © 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
