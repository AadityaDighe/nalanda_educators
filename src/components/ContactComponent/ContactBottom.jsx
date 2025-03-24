import Email from "../../assets/images/email.png";
import Phone from "../../assets/images/phone.png";

const ContactBottom = () => {
    return (
            <div className="contactBottom">
                <div className="container">
                    <div className="row gy-4">
                        {/* Contact Detail */}
                        <div className="col-12 col-md-4 text-center text-md-start">
                            <p className="fw-bold">Contact Detail</p>
                            <h2 className="">We are always happy to assist you!</h2>
                        </div>

                        {/* Email Address */}
                        <div className="col-12 col-md-4 text-center text-md-start">
                            <img src={Email} alt="images" className="img-fluid contactIcon mb-3" />
                            <h5 className="fw-bold">Email Address</h5>
                            <h6 className="">nalanda.educators@gmail.com</h6>
                            <p>For general inquiries, course information, or technical support</p>
                        </div>

                        {/* Mobile Number */}
                        <div className="col-12 col-md-4 text-center text-md-start">
                            <img src={Phone} alt="images" className="img-fluid contactIcon mb-3" />
                            <h5 className="fw-bold">Mobile Number</h5>
                            <h6 className=" ">+919527107291 | +919860963039</h6>
                            <p>For general inquiries, course information, or technical support</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ContactBottom;
