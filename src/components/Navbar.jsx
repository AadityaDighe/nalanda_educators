import { NavLink } from "react-router-dom";
import "../index.css";
import nalandaLogo from "./../assets/images/nalandaLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navBg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={nalandaLogo} alt="logo" width={"160px"} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Courses
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropdown-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/allcourses"
                    >
                      All Courses
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/language-lab-one"
                    >
                      Language Lab Diploma
                    </NavLink>
                  </li>

                  {/* <li className="nav-item dropdown-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/communication-skill"
                    >
                      Language Lab 1 Communication Skill
                    </NavLink>
                  </li> */}

                  {/* <li className="nav-item dropdown-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/practical"
                    >
                      Language Lab 1 Practical
                    </NavLink>
                  </li> */}

                  <li className="nav-item dropdown-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/language-lab-two"
                    >
                      Language Lab BE/BTECH
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/my-course"
                >
                  My Course
                </NavLink>
              </li>
            </ul>
            <div className="btn navLoginBtn">
              <a
                className="nav-link"
                href="https://nalandaeducators.com/nalanda_backend/home/login"
                target="_self"
              >
                Login
              </a>
            </div>
            <div className="btn navContactBtn mx-2">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
