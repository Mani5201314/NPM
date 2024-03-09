import React from "react";
import "../../styles/Home/Home1.css"
import Button from "./Button";
const Home1 = () => {
  return (
    <div id="bg">
      <h1 id="text1">Build amazing things</h1>
      <p id="text2" class="text-center">
        We're GitHub, the company behind the npm Registry and npm CLI. We offer
        those to the community for free, but our day job is building and selling
        useful tools for developers like you.
      </p>
      <h1 id="text3">Take your JavaScript development up a notch</h1>
      <p id="text4">
        Get started today for free, or step up to npm Pro to enjoy a premium
        JavaScript development experience, with features like private packages.
      </p>
      <div id="bot">
        <Button />
      </div>
    </div>
  );
};

export default Home1;
