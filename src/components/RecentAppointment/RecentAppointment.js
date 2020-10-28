import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AppointmentDetails from '../AppointmentDetails/AppointmentDetails';
import './RecentAppointment.css';
const RecentAppointment = () => {
  const [RecentAppoint, SetRecentAppoint] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/getRecenetAppointment')
      .then(res => res.json())
      .then(recentAppoint => {
        SetRecentAppoint(recentAppoint);
      });
  }, []);
  return (
    <div className='recentAppointment bg-white py-3 mt-4'>
      <div className='recentHead d-flex justify-content-between mx-5 my-3'>
        <h4>Recent Appointments</h4>
        <input type='date' />
      </div>
      <div className='row tableHead justify-content-around'>
        <Table borderless>
          <thead className='tableHead'>
            <tr>
              <th>Sr. No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Prescription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {RecentAppoint.map((appointments, index) => (
              <AppointmentDetails
                key={appointments._id}
                index={index}
                appointments={appointments}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentAppointment;
