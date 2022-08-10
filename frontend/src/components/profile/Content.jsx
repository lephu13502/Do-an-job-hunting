import Avatar from "@mui/material/Avatar";
import logo from "../../assets/logo1-modified.png";
import { Button, IconButton, Typography } from "@material-tailwind/react";
function Content() {
  return (
    <div className="container-fluid">
      <div className="container profile-container">
        <div className="row">
          <div id="menu-jk" className="col-md-4">
            <div className="pro-s-cover">
              <img src={logo} alt="" sx={{ width: 32, height: 32 }} />
              <Typography variant="h6" color="black">
                Andrew Smith{" "}
              </Typography>
              <span>Freelancer</span>
              <p>Web Designer</p>
              <div className="num-box w-100 d-flex">
                <div className="hire">
                  <b>55+</b> <br />
                  <span>Projects </span>
                </div>
                <div className="msg">
                  <b>7+</b> <br />
                  <span>Experiance</span>
                </div>
              </div>
              <div className="msg-box d-flex">
                <div className="hire">
                  <button type="button" className="btn btn-outline-dark">
                    Hire
                  </button>
                </div>
                <div className="msg">
                  <button type="button" className="btn btn-outline-dark">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="con-cover">
              <h4>Contact</h4>
              <ul className="row no-margin">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-google-plus-g"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin-in"></i>
                </li>
                <li>
                  <i className="fab fa-github"></i>
                </li>
              </ul>
              <div className="cd-ro row no-margin">
                <span>Mobile No</span>
                <p>
                  <i className="fas fa-phone-square"></i> +1 233 232 4322
                </p>
              </div>
              <div className="cd-ro row no-margin">
                <span>Email Addreess</span>
                <p>
                  <i className="fas fa-envelope-square"></i>{" "}
                  info@smarteyeapps.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="data-box">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                a urna posuere, aliquet elit in, fermentum ligula. Sed est
                augue, molestie sed tortor sed, posuere commodo lectus. Aliquam
                blandit eros a nibh tristique, id accumsan lacus rutrum. Mauris
                ornare neque vitae mollis luctus. Proin malesuada quam ut dui
                sagittis, sit amet accumsan nibh bibendum. Sed maximus sed
                turpis a rhoncus. Vestibulum quis velit leo. Nunc laoreet
                tincidunt congue. Quisque efficitur, erat congue volutpat
                malesuada, erat felis finibus ex
              </p>
              <div className="btn-ro row no-margin">
                <ul className="btn-link">
                  <li>
                    <a href="">
                      <i className="fas fa-paper-plane"></i> Hire Me
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-cloud-download-alt"></i> Download
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="data-box">
              <h2>Experiance</h2>
              <div className="row exp-row">
                <h6>Business Development</h6>
                <span>Microsoft</span>
                <i>Apiral 2011 - Present</i>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean a urna posuere, aliquet elit in, fermentum ligula. Sed
                  est augue, molestie sed tortor sed, posuere commodo lectus.
                </p>
              </div>
              <div className="row exp-row">
                <h6>Business Development</h6>
                <span>Microsoft</span>
                <i>Apiral 2011 - Present</i>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean a urna posuere, aliquet elit in, fermentum ligula. Sed
                  est augue, molestie sed tortor sed, posuere commodo lectus.
                </p>
              </div>
              <div className="row exp-row last">
                <h6>Business Development</h6>
                <span>Microsoft</span>
                <i>Apiral 2011 - Present</i>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean a urna posuere, aliquet elit in, fermentum ligula. Sed
                  est augue, molestie sed tortor sed, posuere commodo lectus.
                </p>
              </div>
            </div>

            <div className="data-box education-detail">
              <h2>Education Details</h2>
              <div className="service no-margin row">
                <div className="col-sm-3 no-padding resume-dat serv-logo">
                  <h6>2013-2015</h6>
                  <p>Master Degree</p>
                </div>
                <div className="col-sm-9 rgbf">
                  <h5>Cambridg University</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="service no-margin row">
                <div className="col-sm-3 no-padding resume-dat serv-logo">
                  <h6>2013-2015</h6>
                  <p>Bacholers Degree</p>
                </div>
                <div className="col-sm-9 rgbf">
                  <h5>Anna University</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="service no-margin row">
                <div className="col-sm-3 no-padding resume-dat serv-logo">
                  <h6>2013-2015</h6>
                  <p>High School</p>
                </div>
                <div className="col-sm-9 rgbf">
                  <h5>A.M.H.S.S</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="service no-margin row">
                <div className="col-sm-3 no-padding resume-dat serv-logo">
                  <h6>2013-2015</h6>
                  <p>School</p>
                </div>
                <div className="col-sm-9 rgbf">
                  <h5>Anna University</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="data-box service-box">
              <h2>Services</h2>
              <div className="service no-margin row">
                <div className="col-sm-2 no-padding serv-logo">
                  <i className="fab fa-delicious"></i>
                </div>
                <div className="col-sm-10 rgbf serv-det">
                  <h5>Graphic Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="service no-margin row">
                <div className="col-sm-2 no-padding serv-logo">
                  <i className="fas fa-code"></i>
                </div>
                <div className="col-sm-10 rgbf serv-det">
                  <h5>Graphic Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="service no-margin row">
                <div className="col-sm-2 no-padding serv-logo">
                  <i className="fab fa-chrome"></i>
                </div>
                <div className="col-sm-10 rgbf serv-det">
                  <h5>Graphic Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="service no-margin row">
                <div className="col-sm-2 no-padding serv-logo">
                  <i className="fab fa-android"></i>
                </div>
                <div className="col-sm-10 rgbf serv-det">
                  <h5>Graphic Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="data-box contact-tab">
              <h2>Contact US</h2>
              <div className="row no-margin">
                <div className="col-md-12 no-padding"></div>
                <div className="col-md-12">
                  <br />
                  <div className="row cont-row no-margin">
                    <div className="col-sm-6">
                      <input
                        placeholder="Enter Full Name"
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        placeholder="Enter Email Address"
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div className="row cont-row no-margin">
                    <div className="col-sm-6">
                      <input
                        placeholder="Enter Mobile Number"
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                  <div className="row cont-row no-margin">
                    <div className="col-sm-12">
                      <textarea
                        placeholder="Enter your Message"
                        className="form-control form-control-sm"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row cont-row no-margin">
                    <div className="col-sm-6">
                      <button className="btn btn-sm btn-success">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
