import React from "react";
import "../../styles/Teams/TeamSecond.css";
import img1 from "../../assets/ProImg/img1.png";
import img2 from "../../assets/ProImg/img2.png";
import img3 from "../../assets/ProImg/img3.png";

const TeamsSecond = () => {
  return (
    <section className="TeamSecond_section">
      <div className="TeamSeacond_div1">
        <div className="TeamSeacond_div2">
          <div className="Pro_divs">
            <img className="TeamSecond_img" src={img1} alt="" />
            <h2 className="Pro_div_head">Unlimited public packages</h2>
            <p className="Pro_div_p">
              Bring the best of open source JavaScript development to your own
              projects.
            </p>
          </div>
          <div className="Pro_divs">
            <img className="TeamSecond_img" src={img2} alt="" />
            <h2 className="Pro_div_head">Unlimited private packages</h2>
            <p className="Pro_div_p">
              Seamlessly integrate public and private packages into your
              development cycle.
            </p>
          </div>
          <div className="Pro_divs">
            <img className="TeamSecond_img" src={img3} alt="" />
            <h2 className="Pro_div_head">Package-based permissions</h2>
            <p className="Pro_div_p">
              Add collaborators to work on your public and private packages
              together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSecond;
