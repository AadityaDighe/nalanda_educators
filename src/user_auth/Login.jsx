import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="container loginForm ">
        <div className="row">
          {/* Left side image */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="src/assets/images/loginFormWomen.png"
              alt=""
              className="img-fluid loginFormWomen"
            />
          </div>

          {/* Right side form */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="">
              <img
                src="src/assets/images/nalandaLogo.png"
                alt="image"
                width={"200px"}
              />
              <h3 className="mt-5 text-dark">Let the journey Begin!</h3>
              <p className="">
                Unlock a world of education with a single click!
              </p>
              <p className="loginAccountHeading">
                Please Login to your account.
              </p>

              <form className="w-100 mx-auto">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="@example.com"
                  className="form-control"
                />

                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="........"
                  className="form-control"
                />

                <p className="text-end">
                  <NavLink className="forgotPassword" to="/">
                    Forgot Password?
                  </NavLink>
                </p>

                <div className="d-grid gap-2">
                  <button className="btn loginBtn">Login</button>
                </div>
                <p className="signUpBtnMsg text-center">
                  Dont have an account?{" "}
                  <NavLink className="signUpBtn">Sign Up For Free</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
