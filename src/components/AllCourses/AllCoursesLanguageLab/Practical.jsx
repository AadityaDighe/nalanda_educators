import mapping from "../../../assets/images/mapping.png";
import Heart from "../../../assets/images/Heart.png";
import Exercise from "../../../assets/images/Exercise.png";
import assignment from "../../../assets/images/assignment.png";

const Practical = () => {
  return (
    <>
      <div className="container my-5">
        <div className="text-center my-5">
          <h2 className="text-dark">Practical 01</h2>
          <p>
            Lorem ipsum is one powerful online software suite that combines all
            the tools needed to run a successful school or office.
          </p>
        </div>

        <div className="row g-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="box_ text-center p-3">
              <img src={mapping} alt="image" className="img-fluid mb-2 w-25" />
              <p className="text-capitalize text-dark">
                outcome mapping and industry relevance
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="box_ text-center p-3">
              <img src={Heart} alt="image" className="img-fluid mb-2 w-25" />
              <p className="text-capitalize text-dark">learn with me</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="box_ text-center p-3">
              <img src={Exercise} alt="image" className="img-fluid mb-2 w-25" />
              <p className="text-capitalize text-dark">exercise</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="box_ text-center p-3">
              <img
                src={assignment}
                alt="image"
                className="img-fluid mb-2 w-25"
              />
              <p className="text-capitalize text-dark">assignments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practical;
