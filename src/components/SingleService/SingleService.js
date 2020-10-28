import React from "react";
import { Card } from "react-bootstrap";

const SingleService = props => {
  const { name, des, img } = props.service;
  return (
    <Card>
      <Card.Img className='serviceImg' variant='top' src={img} />
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{des}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleService;
