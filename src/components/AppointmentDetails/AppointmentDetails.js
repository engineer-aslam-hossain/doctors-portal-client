
import React from "react";

const AppointmentDetails = ({appointments,index}) => {
  const {time,name,phone,date} =appointments

  return (
    <>
      <tr
        style={{
          fontSize: ".9rem",
        }}>
        <td> {index+1} </td>
        <td> {date} </td>
        <td>{time} </td>
        <td>{name} </td>
        <td>{phone}</td>
        <td>View</td>
        <td>Pending</td>
      </tr>
    </>
  );
};

export default AppointmentDetails;
