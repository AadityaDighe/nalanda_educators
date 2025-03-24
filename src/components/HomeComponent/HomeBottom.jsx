import HomeClassRoomBg from "../../assets/images/homeClassroomImgg.svg";
import Assessments from "../../assets/images/Assessments.png";

const HomeBottom = () => {
  return (
    <>
      <div className="">
        <div className="homBottomImg">
          <div className="container">
            <div className="row">
              {/* Image Column */}
              <div className="col-12 col-md-6">
                <img src={HomeClassRoomBg} alt="" className="w-50" />
              </div>

              {/* Text Column */}
              <div className="col-12 col-md-6 my-auto">
                <h5 className="text-dark">
                  Language lab software enhances student assignments by
                  providing personalized learning, real-time feedback, and
                  access to multimedia resources.
                </h5>
                <div>
                  <p className="">
                    It helps improve listening, speaking, and pronunciation
                    skills, boosting overall assignment quality.
                  </p>
                </div>
                <p className="">
                  Additionally, it offers a flexible and engaging platform for
                  practicing language in real-world contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="text-dark">Assessments,</h2>
            <h2 className="text-dark">
              <span className="quizzesSpan">Quizzes</span>, Tests
            </h2>
            <p>
              Our platform is designed with sections features: Course Outcome,
              Learning, Exercise, and the standout Assignment section. While all
              sections play a vital role in the learning journey, the Assignment
              section is truly unique. It allows students to actively engage
              with their assignments by reading aloud, recording their
              responses, or practicing speaking skills directly within the
              platform.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <img
              src={Assessments}
              alt="college girl"
              className="img-fluid w-100 rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBottom;
