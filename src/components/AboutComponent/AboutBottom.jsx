import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import AboutCommitment from "../../assets/images/AboutCommitment_new.png";

const AboutBottom = () => {
  const [diverse, setDiverse] = useState(false);
  const [supportStep, setSupportStep] = useState(false);
  const [education, setEducation] = useState(false);

  const toggleDiverseDropdown = () => {
    setDiverse(!diverse);
  };

  const toggleSupportStepDropdown = () => {
    setSupportStep(!supportStep);
  };
  const toggleEducationDropdown = () => {
    setEducation(!education);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img
              src={AboutCommitment}
              alt="image"
              className="img-fluid w-100 rounded"
            />
          </div>

          {/* Right side */}
          <div className="col-12 col-md-6">
            <h2 className="text-md-start text-center text-dark">
              Our <span className="quizzesSpan">Commitment!</span>
            </h2>
            <p className="text-md-start text-center">
              At Nalanda Educators, we are dedicated to providing students with
              the best language learning experience. Through innovative
              technology, expert instructors, and personalized support, we
              commit to helping every learner achieve fluency, boost confidence,
              and excel in both academic and professional communication.
            </p>

            <div
              className="alert alert_bg alert-dismissible fade show"
              role="alert"
            >
              <h5 className="text-capitalize TextColor">
                Continuous learning and growth!
              </h5>
              <p>
                At Nalanda Educators, we believe learning is a lifelong journey.
                Our platform encourages continuous skill enhancement through
                regular updates, challenging exercises, and opportunities for
                self-paced and guided learning. This commitment ensures that
                learners and educators alike grow in their proficiency and
                expertise.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>

            <div>
              <h5
                className="text-capitalize TextColor aboutBottomheadings d-flex justify-content-between"
                onClick={toggleDiverseDropdown}
                style={{ cursor: "pointer" }}
              >
                diverse course offerings
                {diverse ? (
                  <FaArrowDown className="arrow" />
                ) : (
                  <FaArrowRight className="arrow" />
                )}
              </h5>
              {diverse && (
                <div className="dropdown-content">
                  <p className="px-3">
                    We cater to the unique needs of every learner by providing a
                    wide range of courses covering different aspects of language
                    learning for technical and non technical background
                    students. From grammar and vocabulary to advanced
                    communication skills, our courses are tailored for academic,
                    professional, and personal development, ensuring inclusivity
                    and relevance for all.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h5
                className="text-capitalize TextColor aboutBottomheadings d-flex justify-content-between"
                onClick={toggleSupportStepDropdown}
                style={{ cursor: "pointer" }}
              >
                support at every step
                {supportStep ? (
                  <FaArrowDown className="arrow" />
                ) : (
                  <FaArrowRight className="arrow" />
                )}
              </h5>
              {supportStep && (
                <div className="dropdown-content">
                  <p className="px-3">
                    Learning a language can be challenging, but with Nalanda
                    Educators, no learner is ever alone. Our dedicated support
                    team, expert instructors, and interactive resources ensure
                    that guidance and assistance are always available, making
                    the journey smooth and rewarding.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h5
                className="text-capitalize TextColor aboutBottomheadings d-flex justify-content-between"
                onClick={toggleEducationDropdown}
                style={{ cursor: "pointer" }}
              >
                accessible education
                {education ? (
                  <FaArrowDown className="arrow" />
                ) : (
                  <FaArrowRight className="arrow" />
                )}
              </h5>
              {education && (
                <div className="dropdown-content">
                  <p className="px-3">
                    Accessibility and innovation are at the core of our
                    approach. With user-friendly design, cutting-edge
                    technology, and flexibility to learn anytime, anywhere, we
                    make language learning convenient and engaging for everyone,
                    bridging the gap between goals and achievements.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBottom;
