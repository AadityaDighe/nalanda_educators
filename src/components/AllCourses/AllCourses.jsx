import AllcoursesBottom from "./AllcoursesBottom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import allCoursesMan from "../../assets/images/allCoursesMan.png";

const AllCourses = () => {
  return (
    <>
      <div className="allcoursesHead p-3">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-12 col-lg-8 exploreCourse position-relative">
              <div className="w-75 w-md-75">
                <h2 className="text-capitalize">
                  <span className="quizzesSpan">unlock your potential- </span>
                  explore
                </h2>
                <h2 h2 className="text-capitalize">
                  courses now!
                </h2>

                <p className="mt-2">
                  Technical education offers a wide range of courses designed to
                  equip students with specialized skills and knowledge for
                  various industries. These courses typically focus on practical
                  application, hands-on learning, and in-depth understanding of
                  specific fields, preparing students for careers in sectors
                  such as engineering, information technology, manufacturing,
                  healthcare, and more.
                </p>
                <p> So Explore the different courses here…..</p>

                <button className="btn navContactBtn">
                  <FaArrowDown className="" />
                </button>
              </div>

              {/* Image */}
              <img
                src={allCoursesMan}
                alt="image"
                className="allCourseMan img-fluid d-none d-lg-block"
              />
            </div>

            {/* Right Column */}
            <div className="col-12 col-lg-4">
              <div className="box boxForm p-4 bg-light rounded shadow">
                <h2 className="text-center text-dark">We're here to help!</h2>
                <p className="text-center text-dark">
                  Please contact us in case of any query.
                </p>

                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control form_outline"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control form_outline"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control form_outline"
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <select
                        className="form-select form_outline"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Select Course</option>
                        <option value="abc">language lab diploma</option>
                        <option value="def">language lab BE/ B. Tech</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 text-center">
                    <button
                      type="submit"
                      className="btn navContactBtn px-4 py-2"
                    >
                      Get in Touch
                      <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllcoursesBottom />
    </>
  );
};

export default AllCourses;
