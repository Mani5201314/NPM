import React from 'react'
import TeamsFirst from './TeamsFirst'
import TeamsSecond from './TeamsSecond'
import ProThree from "../pro/ProThree"
import "../../styles/Teams/TeamSecond.css"
import { Link } from 'react-router-dom'


const Teams = () => {

  return (
    <div>
      <TeamsFirst />
      <TeamsSecond />
      <ProThree />
      <Link className='Team_link'>Get Started</Link>
       
    </div>
  )
}

export default Teams
