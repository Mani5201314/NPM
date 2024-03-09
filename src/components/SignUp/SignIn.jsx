import { Link } from "react-router-dom"
import "../../styles/SignUp/Singnin.css"
import eyes from "../../assets/SignIn/eyes.png"
import nose from "../../assets/SignIn/nose.png"
import eyesNose from "../../assets/SignIn/eye_nose.png"
import body from "../../assets/SignIn/body.png"
import React from "react"
 const SignIn = () =>{
  return (
    <div>
      <section>
        <div className="SignIn_div1">
          <button
            className="SignIn_btn"
            aria-label="Make the animated wombat visibly giggl

e"
          >
            <div className="SignIn_div2">
              <div className=" SignIn-div3">
                <div className=" SignIn_div4">
                  <div className="SignIn_div5">
                    <img src={eyes} alt="" className=" SighIn_img1" />

                    <img src={nose} alt="" className="SighIn_img1" />

                    <img src={eyesNose} alt="" className="SighIn_img1" />
                  </div>
                </div>

                <img className="SignIn_img2" src={body} alt="" />
              </div>
            </div>
          </button>
        </div>

        <div className=" SignIn_div6"></div>
      </section>
      <section>
        <div classNameName="Auth-form-container">
          <form classNameName="Auth-form">
            <div classNameName="Auth-form-content">
              <h3 classNameName="Auth-form-title">Sign In</h3>
              <div classNameName="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  classNameName="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div classNameName="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  classNameName="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div classNameName="d-grid gap-2 mt-3">
                <button type="submit" classNameName="btn btn-primary">
                  Submit
                </button>
              </div>
              <p classNameName="forgot-password text-right mt-2">
                Forgot <Link href="#">password?</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
 


export default SignIn
