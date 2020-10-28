import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import chair from "../../images/Mask Group 1.png";
import Header from "../Header/Header";

import "./Appointment.css";
import SingleAppointment from "../SingleAppointment/SingleAppointment";
import Footer from "../Footer/Footer";
const Appointment = () => {

  const [newDate,SetDate] = useState(new Date())
  const handleDateChange=(date)=>{
   SetDate(date)
   console.log(date);
  }
 
  const [getAppointments , SetAppointments] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/getAppointmentsData')
    .then(res => res.json())
    .then(appointment =>{
      SetAppointments(appointment)
      })
  }, [])

  
  return (
    <div className='appointmentPage'>
      <Header />
      <div className='calender'>
        <div className='row flex-nowrap'>
          <div className='col-6 pl-5 ml-5'>
            <h3>Appointment</h3>
            <Calendar onChange={handleDateChange} value={newDate} />
          </div>
          <div className='col-6'>
            <img className='chariImg' src={chair} alt='' />
          </div>
        </div>
      </div>
      <div className='appointmentTime'>
        <h2 className='appointmentTitle'>
          Available Appointments on {newDate.toDateString()}, 2020
        </h2>
        <div className='row'>
          {getAppointments.map(appointment => (
            <SingleAppointment key={appointment.id} appointment={appointment} date={newDate} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;
