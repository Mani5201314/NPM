import React from "react";
import "../Footer/Footer.css"
import { Link } from "react-router-dom";

import outline from "../../assets/img/outline.png";
import github from "../../assets/img/github.png"



const Footer = () => {

  return (
    <div className="Home-footer">
      <div>
        <div>
          <Link href="">
            <img src={outline} width={60} alt="" />
          </Link>
        </div>
        <br />
        <div>
          <Link href="">
            <img src={github} width={60} alt="" />
          </Link>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>Support</p>
        <Link href="" id="footerapp">
          <p>Help</p>
        </Link>
        <Link href="" id="footerapp">
          <p>Advisories</p>
        </Link>
        <Link href="" id="footerapp">
          <p>Status</p>
        </Link>

        <Link href="" id="footerapp">
          <p>Contant npm</p>
        </Link>
      </div>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>Company</p>
        <Link href="" id="footerapp">
          <p>Apout</p>
        </Link>

        <Link href="" id="footerapp">
          <p>plog</p>
        </Link>

        <Link href="" id="footerapp">
          <p>Press</p>
        </Link>

        <p></p>
      </div>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>Terms & Policies</p>
        <Link href="" id="footerapp">
          <p>Policies</p>
        </Link>

        <Link href="" id="footerapp">
          <p>Terms of use</p>
        </Link>

        <Link href="" id="footerapp">
          <p>Code of Conduct</p>
        </Link>

        <Link href="" id="footerapp">
          <p>Privacy</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
