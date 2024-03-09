import React from "react";
import "../../styles/Pro/ProFirst.css";
import Color2 from "./Color2";
import Onbackground from "../../assets/ProImg/OnBackground.png";
import side from "../../assets/ProImg/side.png";
import side2 from "../../assets/ProImg/side2.png";
import img1 from "../../assets/ProImg/img1.png";
import img2 from "../../assets/ProImg/img2.png";
import img3 from "../../assets/ProImg/img3.png";
import { Link } from "react-router-dom";

const ProFirst = () => {
  return (
    <div className="Pro_First">
      <div>
        <Color2 />
      </div>
      <div className="Pro_Back">
        <div className="Onbackground">
          <img src={Onbackground} alt="" />
        </div>
        <div className="Pro_div1">
          <h1 className="Pro_head">npm pro</h1>
          <p className="Pro-p">
            Publish your own packages to the world's <br />
            most popular software ecosystem
          </p>
          <Link className="Pro_button">Get Strated</Link>
        </div>
        <img className="Pro_side" src={side} alt="" />
        <img className="Pro_side2" src={side2} alt="" />

        <div className="Pro_divs">
          <img src={img1} alt="" />
          <h2 className="Pro_div_head">Unlimited public packages</h2>
          <p className="Pro_div_p">
            Bring the best of open source JavaScript development to your own
            projects.
          </p>
        </div>
        <div className="Pro_divs">
          <img src={img2} alt="" />
          <h2 className="Pro_div_head">Unlimited private packages</h2>
          <p className="Pro_div_p">
            Seamlessly integrate public and private packages into your
            development cycle.
          </p>
        </div>
        <div className="Pro_divs">
          <img src={img3} alt="" />
          <h2 className="Pro_div_head">Package-based permissions</h2>
          <p className="Pro_div_p">
            Add collaborators to work on your public and private packages
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProFirst;
