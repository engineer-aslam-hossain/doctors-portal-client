import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessInfo = ({ info }) => {
  return (
    <div
      key={info.id}
      className='col-4 ml-4 d-flex justify-content-center align-items-center chamberDetails'
      style={{ backgroundColor: info.background }}>
      <FontAwesomeIcon icon={info.icon} />
      <div className='iconDetails'>
        <h5>{info.title}</h5>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default BusinessInfo;
