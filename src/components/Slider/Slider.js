import React, { useEffect, useState } from "react";
import maskgroup from "../../images/Mask Group 1.png";
import "./Slider.css";
import { Link } from "react-router-dom";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
const Slider = () => {
  
  const [getBusinessData , SetBussinessData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/getBusinessData')
    .then(res => res.json())
    .then(appointment =>{
      SetBussinessData(appointment)
      })
  }, [])
  return (
    <div className='slider'>
      <div className='row'>
        <div className='col-5 sliderDetails'>
          <h1>Your New Smile Starts Here</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            doloremque laboriosam suscipit sint accusamus incidunt.
          </p>
          <Link to='/appointment' className='appointmentButton'>
            GET APPOINTMENT
          </Link>
        </div>
        <div className='col-7 slideImg '>
          <img src={maskgroup} alt='' />
        </div>
      </div>
      <div className='row position-absolute flex-nowrap ml-5 pl-4'>
        {getBusinessData.map(info => (
          <BusinessInfo key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
