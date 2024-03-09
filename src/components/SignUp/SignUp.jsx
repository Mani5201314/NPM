import React, { useState } from "react";
import "../../styles/SignUp/SignUp.css"
import { Link } from "react-router-dom";


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add your signup logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Sign Up</h2>
        <hr />
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label>Username*</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email Address: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>
            Your email address will be added to the metadata of packages that
            you publish, so it may be seen publicly.
          </p>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          Minimum of 10 characters and must meet our password guidelines
                  <button type="submit">Create an Account </button>
                <input type="checkbox"/>i agree the <Link>End User Licence aggrement</Link> and the <Link>Privicy Policy</Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
