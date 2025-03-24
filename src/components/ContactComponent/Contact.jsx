import ContactBottom from "./ContactBottom";
import contactImage from "../../assets/images/ContactHead.png";

const Contact = () => {
  return (
    <>
      <div className="container my-5">
        {/* Contact Header */}
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 className="text-dark">
              <span className="quizzesSpan">Get in touch </span>with us.
            </h2>
            <h2 className="text-dark">We're here to assist you!</h2>
            <p>
              We’d love to hear from you! Whether you have a question about our
              courses, need support, or want to explore partnership
              opportunities, we are here to help.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={contactImage}
              alt="college girl"
              className="img-fluid w-75 rounded"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="my-5">
          <form>
            <div className="row g-3">
              {/* Name Input */}
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  className="form-control custom-input border-dark border-0 border-bottom"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="col-12 col-md-4">
                <input
                  type="email"
                  className="form-control custom-input border-dark border-0 border-bottom"
                  placeholder="Email Address"
                />
              </div>

              {/* Phone Input */}
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  className="form-control custom-input border-dark border-0 border-bottom"
                  placeholder="Phone Number (optional)"
                />
              </div>

              {/* Message Input */}
              <div className="col-12">
                <textarea
                  className="form-control custom-input border-dark border-0 border-bottom"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-3 text-center text-md-start">
              <button type="submit" className="btn navContactBtn px-4 py-2">
                Submit Response
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Bottom */}
      <ContactBottom />
    </>
  );
};

export default Contact;
