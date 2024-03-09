import React from "react";
import "../../styles/Home/Home2.css"
import middle from "../../assets/img/middle-logo.png"


const Home2 = () => {
  return (
    <div className="border-bottom">
      <div id="middlelogo">
        <img src={middle} alt="" width={120} />
      </div>
      <div className="home-middle-text">
        Bring the best of open source to you, your team, and your company
      </div>
      <div className="home-middle-text-last">
        Relied upon by more than 17 million developers worldwide, npm is
        committed to making JavaScript development elegant, productive, and
        safe. The free npm Registry has become the center of JavaScript code
        sharing, and with more than two million packages, the largest software
        registry in the world. Our other tools and services take the Registry,
        and the work you do around it, to the next level.
      </div>
    </div>
  );
};

export default Home2;
