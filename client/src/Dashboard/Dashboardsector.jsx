import React, { useState } from 'react'
import './Dashboard.css';
import icon from "../assets/icons.png";

function Dashboardsector() {
  const [activeindex, setActiveIndex] = useState(0);
  const navitems = [
    {label:"Dashboard"},
    {label:"Skill Analysis"},
    {label:"Job Insights"},
    {label:"Recommendations"},
    {label:"Reports"}
  ]
  return (
    <div className="total-width">
      <div className="grid-template">

       
        <div className="left-section">
          <img src={icon} style={{ height: "70px" }} />
          <hr style={{width:'100%',marginTop:'20px'}}/>
<div className="menu-container">
  {navitems.map((item, index) => (
    <div key={index} className={`menu-item ${activeindex === index ? "active":""}`}
    onClick={()=>setActiveIndex(index)} >
      
      <span>{item.label}</span>
    </div>
  ))}
</div>



        
    

        </div>

        
        <div className="right-section">
          <p>Main Content Area</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboardsector;
