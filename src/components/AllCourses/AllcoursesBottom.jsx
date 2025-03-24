import languageLabFirst from "../../assets/images/languageLabFirst.png";
import languageLabSecondHat from "../../assets/images/languageLabSecondHat.png";
import languageLabSecond from "../../assets/images/languageLabSecond.png";
import allCoursesArrows from "../../assets/images/allCoursesArrows.png";
import allcourses_image from "../../assets/images/allcourses_image.jpeg";

import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AllcoursesBottom = () => {
  return (
    <>
      <div className="container my-5">
        <h3 className=" text-center text-dark">Language Lab</h3>

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
        <div className="row langugeLabDiv justify-content-center">
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

            <div className=" mt-4">
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

          <div className="col-12 col-md-5 col-lg-4 mx-2 text-center border rounded position-relative mb-3">
            <div className="position-absolute top-0 start-50 translate-middle">
              <div className="position-relative">
                <img
                  src={languageLabSecondHat}
                  alt=""
                  className="rounded-circle border border-light position-absolute"
                  style={{
                    width: "40px",
                    height: "40px",
                    top: "15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                />

                <img
                  src={languageLabSecond}
                  alt=""
                  className="rounded-circle border border-light position-relative"
                  style={{
                    width: "70px",
                    height: "70px",
                    zIndex: 1,
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>
            </div>

            <div className="pt-5 ">
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

        <div className="row g-4">
          <div className="col-12 col-lg-6  d-flex flex-column justify-content-center">
            <h2 className="text-capitalize mb-3 text-dark">
              Discover Why
              <span className="quizzesSpan"> Students </span>
              Love Our Courses! 😇
            </h2>
            <p>
              "Explore the courses that have transformed students' lives. Hear
              firsthand how our programs help learners achieve their goals and
              unlock new opportunities."
            </p>
          </div>

          <div className="col-12 col-lg-6 box p-4 rounded">
            <img src={allCoursesArrows} alt="" />
            <p className="mt-4">
              This course exceeded my expectations! The material was engaging,
              and the instructors were incredibly knowledgeable. I gained
              practical skills that I can immediately apply to my career. Highly
              recommend to anyone looking to expand their expertise!
            </p>
            <div className="d-flex align-items-center mt-3">
              <img
                src={allcourses_image}
                alt="Profile"
                className="img-fluid rounded-circle me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <p className="mb-0 fw-bold">Gayatri Deshmukh</p>
                <div>
                  <i className="fas fa-star text-warning me-1"></i>
                  <i className="fas fa-star text-warning me-1"></i>
                  <i className="fas fa-star text-warning me-1"></i>
                  <i className="fas fa-star-half-alt text-warning me-1"></i>
                  <i className="far fa-star text-warning me-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllcoursesBottom;
