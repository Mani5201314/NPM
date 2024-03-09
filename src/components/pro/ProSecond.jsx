import React from 'react'
import "../../styles/Pro/ProSecond.css"
import teday from "../../assets/ProImg/teady.png"
import { Link } from 'react-router-dom';

const ProSecond = () => {
  return (
    <div className="Pro_second">
      <div>
        <img className="ProS_img" src={teday} alt="" />
      </div>
      <div className='ProS_div'>
        <h2 className="ProS_head">Working on a team?</h2>
        <p className='ProS_p1'>Try npm Teams.</p>
        <p className='ProS_p2'>
          Team-based access controls to manage package permissions across your
          organization.
        </p>
        <Link className='ProS_btn'>Learn About terms</Link>
      </div>
    </div>
  );
}

export default ProSecond
