import React from "react";
import "../styles/Navbar/Navbar.css"
import { Link,useNavigate } from "react-router-dom";
import logo from "../../src/assets/img/npmlogo.png"



const Navbar2 = () => {
  const navigate = useNavigate();
 const navigateSignup = () => {
   // 👇️ navigate to /
   navigate("/Signup");
  };
  const navigateSigIn = () => {
    // 👇️ navigate to /
    navigate("/SignIn");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand ps-4" href="#">
            <img src={logo} width={60} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <form className="d-flex" id="search">
                  <input
                    className="form-control rounded-0"
                    type="search"
                    id="paddingsearch"
                    placeholder="Search Packages"
                  />
                  <button
                    className="btn btn-outline bg-dark text-light rounded-0"
                    type="submit"
                    style={{ padding: "16px 30px", margin: "auto" }}
                  >
                    Search
                  </button>
                </form>
              </li>

              <button
                className="btn-dark btn-light rounded-0 ms-4"
                style={{ padding: "15px 38px", fontWeight: "500" }}
                type="submit"
                id="btn"
                onClick={navigateSignup}
              >
                Sign up
              </button>
              <button
                className="btn btn ms-1"
                style={{ padding: "10px 38px", fontWeight: "500" }}
                type="submit"
                id="btnsign"
                onClick={navigateSigIn}
              >
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
