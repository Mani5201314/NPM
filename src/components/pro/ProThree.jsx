import React from "react";
import "../../styles/Pro/ProThree.css";
import tic from "../../assets/ProImg/tic.png"

const ProThree = () => {
  return (
    <div classNameName="Prp_three">
      <section className="ProThree_div">
        <div className="ProThree_div2">
          <div className="ProThree_div3">
            <div className="ProTHree_div4"></div>

            <div className="ProThree_div5">
              <h2 className="ProThree_head">Feature Comparison</h2>
            </div>

            <div className="ProThree_div6">
              <h3 className="ProThree_h3">
                Unlimited public packages &"
                <br aria-hidden="true" />
                automatic security warnings "
              </h3>

              <ul className="ProThree_ul">
                <li className="ProThree_li">
                  <div className="mb3 b">Free</div>
                  <div>
                    <img className="ProThree_tic" src={tic} alt="" />
                  </div>
                </li>
                <li className="ProThree_li">
                  <div className="mb3 b">Pro</div>
                  <div>
                    <img className="ProThree_tic" src={tic} alt="" />
                  </div>
                </li>
                <li className="ProThree_li">
                  <div className="mb3 b">Terms</div>
                  <div>
                    <img className="ProThree_tic" src={tic} alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="ProThree_div61">
              <h3 className="ProThree_h3">Unlimited private packages</h3>

              <ul className="ProThree_ul">
                <li className="ProThree_li">
                  <div className="mb3 b">Free</div>
                  <div></div>
                </li>
                <li className="ProThree_li">
                  <div className="mb3 b">Pro</div>
                  <div>
                    <img className="ProThree_tic" src={tic} alt="" />
                  </div>
                </li>
                <li className="ProThree_li">
                  <div className="mb3 b">Terms</div>
                  <div>
                    <img className="ProThree_tic" src={tic} alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="ProThree_div6">
              <h3 className="ProThree_h3">Unlimited team-based management</h3>

              <ul className="ProThree_ul">
                <li className="ProThree_li">
                  <div className="mb3 b">Free</div>
                  <div></div>
                </li>
                <li className="ProThree_li">
                  <div className="mb3 b">Pro</div>
                  <div></div>
                </li>
                <li className="ProThree_li">
                  <div className="mb3 b">Terms</div>
                  <div>
                    <img className="ProThree_tic" src={tic} alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="ProThree_div8"></div>
          </div>
          <small className="small">All versions include basic support</small>
        </div>
      </section>
    </div>
  );
};

export default ProThree;
