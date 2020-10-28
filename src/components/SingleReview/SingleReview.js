import React from "react";
import { Card } from "react-bootstrap";

const SingleReview = props => {
  const { name, review, img, location } = props.review;
  return (
    <Card className='review'>
      <Card.Body>
        <Card.Text>{review}</Card.Text>
        <div className='person d-flex  align-items-center'>
          <Card.Img className='personImg' variant='top' src={img} />
          <div className='personDetails'>
            <p>{name}</p>
            <span>{location}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleReview;
