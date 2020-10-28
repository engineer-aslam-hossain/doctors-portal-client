import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contact text-center'>
      <div className='contactDetails'>
        <p>Contact Us</p>
        <h3>Always Connect With Us</h3>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Control as='textarea' rows='3' placeholder='Your Message' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
