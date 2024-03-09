// App.js
import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Pro from "./components/pro/Pro";
import Teams from "./components/teams/Teams";
import Pricing from "./components/pricing/Pricing";
import Documentation from "./components/documentation/Documentation";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";

const App = () => {
  return (
    <div className="app">
      <Navbar/> 
      <Routes>
        <Route path="/" element={ <Home/>} />
          <Route path="/teams" element={<Teams />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<SignIn/>}/>
      
      </Routes>
      <hr />
      <Footer/>
    </div>
  );
};

export default App;
