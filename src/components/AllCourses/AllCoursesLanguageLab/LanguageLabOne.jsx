import { FaArrowRight } from "react-icons/fa";
import aboutLanguageLab from "../../../assets/images/aboutLanguageLab.png";
import labOneCommunication from "../../../assets/images/labOneCommunication.png";
import labOneProfessional from "../../../assets/images/labOneProfessional.png";

const LanguageLabOne = () => {
  return (
    <>
      <div className="my-3">
        <div className="aboutLanguageLab mb-4">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-12 text-center text-md-start">
                <h2 className="text-capitalize text-dark">
                  <span className="quizzesSpan">About </span>
                  language lab
                </h2>
                <p>
                  A language lab is an essential tool for diploma students to
                  improve their English proficiency through interactive
                  learning. It focuses on enhancing listening and speaking
                  skills using advanced audio-visual aids and speech recording
                  tools. Students gain confidence in communication through
                  practical activities like pronunciation practice and
                  conversations. The lab provides a structured approach to
                  mastering English, making it ideal for professional and
                  academic growth. Its importance lies in preparing students for
                  workplace communication and global opportunities.
                </p>
                <button className="btn navContactBtn mt-3">
                  Explore Courses
                  <FaArrowRight className="ms-2" />
                </button>
              </div>
              <div className="col-lg-4 col-md-5 col-12 text-center">
                <img
                  src={aboutLanguageLab}
                  alt="Language Lab Image"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <h5 className="text-center text-capitalize text-dark">
            Maharashtra State Board of Technical Education
          </h5>
          <p className="text-center">
            The Use of English subject in the Diploma curriculum, supported by
            Language Lab software, helps students improve their speaking,
            listening, and writing skills. Through interactive exercises and
            personalized feedback, students gain confidence and proficiency in
            real-world communication.
          </p>
          <div className="row justify-content-center">
            <div className="card my-3 col-lg-5 col-md-6 col-12 mx-2 langaugelab text-center position-relative">
              <img
                src={labOneCommunication}
                className="card-img-top"
                alt="Image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  COMMUNICATION SKILLS(English)
                  <p>(311303)</p>
                </h5>
                <p className="card-text border rounded-5 p-1 mx-auto w-50 w-sm-25 w-md-25 w-lg-25">
                  Semester 01
                </p>
                <button className="btn navContactBtn position-absolute nb">
                  <a
                    href="https://nalandaeducators.com/nalanda_backend/home/login"
                    className="text-light text-decoration-none"
                  >
                    All Branches
                    <FaArrowRight className="ms-2" />
                  </a>
                </button>
              </div>
            </div>

            <div className="card my-3 col-lg-5 col-md-6 col-12 mx-2 langaugelab text-center position-relative">
              <img
                src={labOneProfessional}
                className="card-img-top"
                alt="Image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  PROFESSIONAL COMMUNICATION
                  <p>(312002)</p>
                </h5>
                <p className="card-text border rounded-5 p-1 mx-auto w-50 w-sm-25 w-md-25 w-lg-25">
                  Semester 02
                </p>
                <button className="btn navContactBtn position-absolute nb">
                  <a
                    href="https://nalandaeducators.com/nalanda_backend/home/login"
                    className="text-light text-decoration-none"
                  >
                    All Branches
                    <FaArrowRight className="ms-2" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageLabOne;
