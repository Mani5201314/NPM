import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Pro/ProFour.css";

const ProFour = () => {
  return (
    <div>
      <section className="ProFour_section">
        <div className="ProFour_div1">
          <h2 className="ProFour_h2" id="get-started">
            Get Started
          </h2>

          <div className="ProFour_div2">
            <div className="ProFour_div3"></div>

            <div className="ProFour_div4">
              <div className="ProFour_div5">1</div>

              <h3 className="ProFour_h3">Create an account</h3>

              <div className="ProFour_div6">
                If you don't have one yet
                <br />
                <Link href="/signup" className="ProFour_Link">
                  {" "}
                  create a free npm account{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="ProFour_div2">
            <div className="ProFour_div3"></div>

            <div className="ProFour_div4">
              <div className="ProFour_div5">2</div>

              <h3 className="ProFour_h3">Upgrade your account</h3>

              <div className="ProFour_div6">
                Log into your account and
                <br />
                <Link href="/signup" className="ProFour_Link">
                  {" "}
                  upgrade your plan{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProFour;
