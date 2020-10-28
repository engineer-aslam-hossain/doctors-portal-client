import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Image } from "react-bootstrap";

const DocInfo = props => {
  const { name, img, phone } = props.doctor;
  return (
    <div className='col-4 docs'>
      <div className='imgDiv'> 
      <Image className='docsImg img-fluid' src={img}  />
      </div>
      <h4>{name}</h4>
      <span>
        <FontAwesomeIcon icon={faPhone} className='fa-flip-horizontal' />
        {phone}
      </span>
    </div>
  );
};

export default DocInfo;
