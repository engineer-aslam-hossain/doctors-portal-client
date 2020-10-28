import React, { useContext, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './SingleAppointment.css';

const SingleAppointment = props => {
  const { disease, time, space } = props.appointment;
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ////// Form Validation ///////////

  const [newAppointment, SetNewAppointment] = useState({
    time: '',
    name: '',
    phone: '',
    date: '',
    email: `${LoggedInUser.email}`,
  });

  const inputHandler = e => {
    e.preventDefault();
    let isInputValid;
    if (e.target.name === 'time') {
      isInputValid = e.target.value !== '' ? e.target.value : '';
      !isInputValid &&
        document.querySelector('.time').style.setProperty('display', 'block');
    }
    if (e.target.name === 'phone') {
      isInputValid = e.target.value.length > 10 ? e.target.value : '';
      !isInputValid &&
        document.querySelector('.phone').style.setProperty('display', 'block');
    }
    if (e.target.name === 'name') {
      const nameValidation = /^([a-zA-Z]{3,30}\s*)+/;
      isInputValid = nameValidation.test(e.target.value);
      !isInputValid &&
        document.querySelector('.name').style.setProperty('display', 'block');
    }
    if (e.target.name === 'date') {
      isInputValid = e.target.value !== '' ? e.target.value : '';
      !isInputValid &&
        document.querySelector('.date').style.setProperty('display', 'block');
    }

    if (isInputValid) {
      const appointment = { ...newAppointment };
      appointment[e.target.name] = e.target.value;
      SetNewAppointment(appointment);
    }
  };

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:8080/bookAppointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAppointment),
    })
      .then(result => result.json())
      .then(data => {
        history.push('/dashboard');
        console.log(data);
      });
  };

  return (
    <div className=' appointmentSec'>
      <Card>
        <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
          <h5>{disease}</h5>
          <h6>{time}</h6>
          <p>{space}</p>
          <Button onClick={handleShow}>BOOK APPOINTMENT</Button>
        </Card.Body>
      </Card>
      {/* modal code */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='d-block'>
          <Modal.Title className='modalHeader'>{disease}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={handleSubmit} className='ModalForm'>
            <Form.Control
              as='select'
              name='time'
              placeholder='Select Time'
              required
              onBlur={inputHandler}>
              <option>Select Time</option>
              <option>08.00 AM</option>
              <option>10.00 AM</option>
              <option>12.00 PM</option>
              <option>02.00 PM</option>
              <option>04.00 PM</option>
              <option>06.00 PM</option>
              <option>08.00 PM</option>
              <option>10.00 PM</option>
            </Form.Control>
            <Form.Control.Feedback type='invalid' className='time pl-3'>
              {!newAppointment.time
                ? 'name must be start with atleast 3 character'
                : ''}
            </Form.Control.Feedback>
            <Form.Control
              type='text'
              name='name'
              placeholder='Your Name'
              required
              onBlur={inputHandler}
            />
            <Form.Control.Feedback type='invalid' className='name pl-3'>
              {!newAppointment.name
                ? 'name must be start with atleast 3 character'
                : ''}
            </Form.Control.Feedback>
            <Form.Control
              type='number'
              name='phone'
              placeholder='Your Phone'
              required
              onBlur={inputHandler}
            />
            <Form.Control.Feedback type='invalid' className='phone pl-3'>
              {!newAppointment.phone
                ? 'name must be start with atleast 3 character'
                : ''}
            </Form.Control.Feedback>
            <Form.Control
              type='email'
              name='email'
              defaultValue={LoggedInUser.email}
              readOnly
            />
            <Form.Control
              type='date'
              name='date'
              placeholder='dd/mm/yyyy'
              required
              onBlur={inputHandler}
            />
            <Form.Control.Feedback type='invalid' className='date pl-3'>
              {!newAppointment.date
                ? 'name must be start with atleast 3 character'
                : ''}
            </Form.Control.Feedback>
            {newAppointment.date &&
              document
                .querySelector('.modalSubmit')
                .removeAttribute('disabled')}
            <Button className='modalSubmit' type='submit' disabled>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SingleAppointment;
