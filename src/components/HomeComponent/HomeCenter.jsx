import HomeLatestSkill from "../../assets/images/HomeLatestSkill.png";
import HomeCareer from "../../assets/images/HomeCareer.png";
import EarnCertfication from "../../assets/images/EarnCertfication.png";
import languageLabFirst from "../../assets/images/languageLabFirst.png";
import languageLabSecondHat from "../../assets/images/languageLabSecondHat.png";
import languageLabSecond from "../../assets/images/languageLabSecond.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HomeCenter = () => {
  return (
    <>
      <div className="container">
        {/*first view  */}

        <div className="row text-light home_center p-4 rounded-4">
          {/* First Column */}
          <div className="col-12 col-md-4 d-flex align-items-center">
            <img
              className="w-25 me-3"
              src={HomeLatestSkill}
              alt="Learn The Latest Skills"
            />
            <div>
              <h5>Learn The Latest Skills</h5>
              <p>
                Gain cutting-edge language skills through our innovative and
                interactive platform.
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-12 col-md-4 d-flex align-items-center">
            <img
              className="w-25 me-3"
              src={HomeCareer}
              alt="Get Ready for a Career"
            />
            <div>
              <h5 className="text-capitalize">Get Ready for a Career</h5>
              <p>
                Build confidence and proficiency to excel in academic and
                professional communication.
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div className="col-12 col-md-4 d-flex align-items-center">
            <div className="">
              <img
                className="w-75 me-3"
                src={EarnCertfication}
                alt="Get Ready for a Career"
              />
            </div>
            <div className="ms-3">
              <h5 className="text-capitalize">Earn a certficate</h5>
              <p>
                Achieve a recognized certification to showcase your language
                expertise with Nalanda Educators.
              </p>
            </div>
          </div>
        </div>

        {/* Second view */}

        <h3 className="mt-5 text-center text-dark">Language Lab</h3>

        <p className="text-center text-dark">
          Language lab software is incredibly important for technical students,
          as it plays a significant role in enhancing their communication
          skills, which are essential for both academic and professional
          success.
        </p>
        <p className="text-center text-dark">
          So "Please click on the following 'Practical' tab to begin performing
          the practical exercises."
        </p>
        <div className="row langugeLabDiv justify-content-center ">
          {/* First Column */}
          <div className="col-12 col-md-5 col-lg-4 py-4 mx-2 text-center border rounded position-relative mb-3">
            <div className="position-absolute top-0 start-50 translate-middle">
              <img
                src={languageLabFirst}
                alt=""
                className="rounded-circle border border-light"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "white",
                }}
              />
            </div>
            {/* Content */}
            <div className="pt-5 mt-4">
              <h4 className="text-dark">Language Lab</h4>
              <ul className="list-unstyled">
                <li>Diploma (Polytechnic)</li>
                <li>All Board</li>
                <li>All Branches</li>
              </ul>
              <hr />
              <button className="btn rounded-5 navContactBtn">
                <NavLink
                  to="/language-lab-one"
                  className="text-light text-decoration-none"
                >
                  Explore Courses
                </NavLink>
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-12 col-md-5 col-lg-4 py-4 mx-2 text-center border rounded position-relative mb-3">
            {/* Center Top Images */}
            <div className="position-absolute top-0 start-50 translate-middle">
              <div className="position-relative">
                {/* Bottom Image */}
                <img
                  src={languageLabSecondHat}
                  alt=""
                  className="rounded-circle border border-light position-absolute"
                  style={{
                    width: "40px",
                    height: "40px",
                    top: "15px",
                    left: "50%",
                    transform: "translateX(-50%)", // Center horizontally
                    zIndex: 2, // Ensures this image is behind
                  }}
                />
                {/* Top Image */}
                <img
                  src={languageLabSecond}
                  alt=""
                  className="rounded-circle border border-light position-relative"
                  style={{
                    width: "70px",
                    height: "70px",
                    zIndex: 1, // Ensures this image is on top
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)", // Center horizontally
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="pt-5 mt-4">
              <h4 className="text-dark">Language Lab</h4>
              <ul className="list-unstyled">
                <li>BE</li>
                <li>B.TECH</li>
                <li>Autonomous</li>
              </ul>
              <hr />
              <button className="btn rounded-5 navContactBtn">
                <NavLink
                  to="/language-lab-two"
                  className="text-light text-decoration-none"
                >
                  Explore Courses
                </NavLink>
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCenter;
