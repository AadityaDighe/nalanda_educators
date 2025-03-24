import { NavLink } from "react-router-dom";
import nalandaLogo from "./../assets/images/nalandaLogo.png";

const Footer = () => {
  return (
    <>
      <div className="footermsg">
        <div className="container-fluid footer py-4 text-dark">
          <div className="row text-center text-md-start">
            <div className="col-md-3 mb-3">
              <img
                src={nalandaLogo}
                alt="image"
                className="mb-2"
                width={"160px"}
              />
              <p>
                Our Language Lab software is a transformative tool for both
                teachers and students, offering a structured approach to
                language learning.
              </p>
            </div>
            <div className="col-md-2 mb-3">
              <h6>About Us</h6>
              <ul className="list-unstyled footerNavbar">
                <li>Mission</li>
                <li>What we offer</li>
                <li>Our Commitment</li>
              </ul>
            </div>
            <div className="col-md-2 mb-3 footerNavbar">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li className="nav-item">
                  <NavLink className="text-dark text-decoration-none" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-dark text-decoration-none"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allcourses"
                    className="text-dark text-decoration-none"
                  >
                    All Courses
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/my-course"
                    className="text-dark text-decoration-none"
                  >
                    My Course
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-3 footerNavbar">
              <h6>Services</h6>
              <ul className="list-unstyled">
                <li>
                  Web based Language lab software As per board/ University
                  syllabus For all autonomous and nonautonomous colleges
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3 footerNavbar">
              <h6>Contact Us</h6>
              <p>
                Email:{" "}
                <span className="d-block contactFields footerEmail">
                  nalanda.educators@gmail.com
                </span>
              </p>
              <p>
                Phone:{" "}
                <p className="d-block contactFields">9527107291 , 9860963039</p>
              </p>
            </div>
          </div>
        </div>
        <div className="footerCopyright py-2 footerNavbar">
          <p className="text-capitalize text-center mb-0">
            Copyright &copy; 2025 Learning | All rights reserved |
            <span className="mx-1">
              <NavLink className="text-dark" to="/">
                terms and conditions
              </NavLink>
            </span>{" "}
            |
            <span className="mx-1">
              <NavLink className="text-dark" to="/">
                privacy policy
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
