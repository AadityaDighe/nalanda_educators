import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HomePageImg from "../../assets/images/HomePageImgg.svg";
import { NavLink } from "react-router-dom";

const HomeHead = () => {
  return (
    <>
      <div className="home-head-wrapper text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="text-capitalize">
                  <span className="quizzesSpan">learn skills</span> from our top
                  instructors
                </h1>
                <p>
                  Our Language Lab software is a transformative tool for both
                  teachers and students, offering a structured approach to
                  language learning. Teachers can seamlessly guide students
                  through well-designed sections dedicated to interactive
                  exercises, learning modules, and assignment recording. This
                  enables educators to track progress effectively, assess
                  students' practical skills, and provide personalized feedback.
                  The platform fosters an engaging and immersive learning
                  environment, ensuring students gain fluency and confidence in
                  the language. With its intuitive interface and comprehensive
                  resources, the Language Lab empowers teachers to deliver
                  impactful lessons with ease and efficiency.
                </p>
                <button className="btn navContactBtn">
                  <NavLink
                    to="/allcourses"
                    className="text-light text-decoration-none"
                  >
                    Explore Courses
                  </NavLink>
                  <FaArrowRight className="ms-2" />
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <img src={HomePageImg} alt="homepageimg" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHead;
