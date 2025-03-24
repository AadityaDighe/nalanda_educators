import { NavLink } from "react-router-dom";
import WhatWeOffer from "../../assets/images/WhatWeOffer.png";
import whatWeOfferSecond from "../../assets/images/whatWeOfferSecond.png";
import whatWeAreThird from "../../assets/images/whatWeAreThird.png";
import whatWeAreThirdInner from "../../assets/images/whatWeAreThirdInner.png";
import whatWeAreFourth from "../../assets/images/whatWeAreFourth.png";
import whatWeAreFifth from "../../assets/images/whatWeAreFifth.png";
import whatWeAreSix from "../../assets/images/whatWeAreSix.png";

const AboutCenter = () => {
  return (
    <>
      <div className="aboutCenter">
        <div className="container py-5 ">
          {/* Header Section */}
          <div className="text-dark">
            <h4 className="text-center mb-4">What We Offer!</h4>
            <p className="text-center mb-5">
              Choose from a wide array of courses, guided by experienced
              instructors, with flexible learning paths designed for you.
            </p>
          </div>

          {/* Offerings Section */}
          <div className="row g-4 text-center">
            <div className="col-12 col-md-6 col-lg-4">
              <img src={WhatWeOffer} alt="image" className="img-fluid mb-3" />
              <h5 className="text-dark">Diverse course catalogue</h5>
              <p>
                From technology and business to creative arts, wellness and
                personal development, we offer courses in a wide range of
                subjects.
              </p>
              <div>
                <NavLink to="/">Learn More</NavLink>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <img
                src={whatWeOfferSecond}
                alt="image"
                className="img-fluid mb-3"
              />
              <h5 className="text-dark">Expert Instructors</h5>
              <p>
                Our courses are taught by industry-leading professionals and
                academics who bring real-world experience and insights into the
                classroom.
              </p>
              <div>
                <NavLink to="/">Learn More</NavLink>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="position-relative">
                <img
                  src={whatWeAreThird}
                  alt="image"
                  className="img-fluid mb-3 whatWeOfferOuter"
                />
                <img
                  src={whatWeAreThirdInner}
                  alt="image"
                  className="img-fluid whatWeOfferInner"
                />
              </div>
              <h5 className="text-dark">Flexible Learning</h5>
              <p>
                Learn at your own pace, with courses available 24/7, and access
                to downloadable resources, videos, and assignments to help
                solidify your understanding.
              </p>
              <div>
                <NavLink to="/">Learn More</NavLink>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <img
                src={whatWeAreFourth}
                alt="image"
                className="img-fluid mb-3"
              />
              <h5 className="text-dark">Certification</h5>
              <p>
                Earn certification upon completion of our courses to boost your
                resume or enhance your personal skill set.
              </p>
              <div>
                <NavLink to="/">Learn More</NavLink>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <img
                src={whatWeAreFifth}
                alt="image"
                className="img-fluid mb-3"
              />
              <h5 className="text-dark">Community Support</h5>
              <p>
                Join a vibrant community of learners, engage in discussions,
                share ideas, and collaborate on projects with like-minded peers.
              </p>
              <div>
                <NavLink to="/">Learn More</NavLink>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <img src={whatWeAreSix} alt="image" className="img-fluid mb-3" />
              <h5 className="text-dark">Placement Assistance</h5>
              <p>
                At Nalanda Educators, we are committed to helping you achieve
                your career goals. We offer dedicated placement support to
                connect you with top employers in your industry. Our team
                provides personalized guidance, including resume building,
                interview preparation, and access to exclusive job listings,
                ensuring you are career-ready and can transition smoothly into
                your desired role.
              </p>
              <div>
                <NavLink to="/">Learn More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCenter;
