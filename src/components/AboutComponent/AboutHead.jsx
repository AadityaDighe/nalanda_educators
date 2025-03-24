import AboutPageSecondImg from "../../assets/images/AboutPageSecondImg.png";
import VisionAbout from "../../assets/images/VisionAbout.png";

const AboutHead = () => {
  return (
    <>
      <div>
        <div className="aboutUsSection">
          <div className="my-5 container aboutUsHeadSection">
            <h1 className="text-center mb-4 text-dark">
              <span className="aboutTextSpan">About </span>Us!
            </h1>
            <p>
              Welcome to Nalanda Educators, your trusted platform for Educate,
              Innovate and Elevate Lives! We believe that education has the
              power to transform lives, and we are passionate about making
              high-quality learning accessible to everyone, anywhere.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn navContactBtn">Read More</button>
            </div>
          </div>
        </div>

        {/* Second div */}

        <div className="container my-5 aboutHeadSecondDiv">
          <div className="row my-5 align-items-center">
            <div className="col-12 col-md-6">
              <h2 className=" mx-5 text-dark">
                Who <span className="quizzesSpan">We</span> Are?
              </h2>
              <p className="mt-3 mx-5">
                At Nalanda Educators, we are a team of dedicated educators,
                industry experts and tech enthusiasts commited to creating and
                enriching online learning experience. Our mission is to empower
                learners by providing them with a wide range of courses,
                tailored to meet the needs of beginners, professionals and
                lifelong learners alike.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <img
                src={AboutPageSecondImg}
                alt="AboutPageSecondImg"
                className="img-fluid w-100 rounded"
              />
            </div>
          </div>

          <div className="row align-items-center">
            {/* Left side image */}
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <img
                src={VisionAbout}
                alt="VisionAbout"
                className="img-fluid w-100 rounded"
              />
            </div>

            {/* Right side */}
            <div className="col-12 col-md-6">
              <h2 className="mx-5 text-dark">
                Our <span className="quizzesSpan">Vision! 😀</span>
              </h2>
              <p className="mx-5">
                We envision a world where learning is not restricted by
                boundaries-whether it's location, time or financial constraints.
                Our goal is to bridge the gap between aspiration and achievement
                by offering accessible, affordable and comprehensive courses
                across various fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHead;
