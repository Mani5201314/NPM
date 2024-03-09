import React from "react";
import "../../styles/Teams/TeamFirst.css"
import { Link } from "react-router-dom";
import topImg from "../../assets/teamImg/topImg.png"

const TeamsFirst = () => {
  return (
    <div className="Team_first">
      <article className="TeamFirst_artical">
        <div className="TeamFirst_div1"></div>

        <section className="TeamFirst_section">
          <div className="TeamFirst_div2">
            <img className="teamFirst_img" src={topImg} alt="" />
            <h1 className="TeamFirst_h1">npm Teams</h1>

            <div className="TeamFirst_div3">
              {" "}
              Share code and collaborate with the tools that make
              JavaScript the world's best software ecosystem
            </div>

            <Link href="/org/create" className="TeamFirst_Link">
              {" "}
              Get started{" "}
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default TeamsFirst;
