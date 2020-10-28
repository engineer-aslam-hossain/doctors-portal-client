import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import './SingleBlog.css'

const SingleBlog = props => {
  const { name, details, suggestion, img, date } = props.blog;

  return (
    <Card className='blog'>
      <Card.Body>
        <div className='docTreatment'>
          <div className='person d-flex  align-items-center'>
            <Card.Img className='personImg' variant='top' src={img} />
            <div className='docDetails'>
              <p>{name}</p>
              <span>{date}</span>
            </div>
          </div>
          <Card.Text className='treatment'>{suggestion}</Card.Text>
          <Card.Text className='treatmentDetails'>{details}</Card.Text>
        </div>
        <div className='feedback'>
          <p>{name}</p>
          <span>{date}</span>
          <h4>{suggestion}</h4>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleBlog;
