import React, { useEffect, useState } from 'react';
import { Button, CardDeck } from 'react-bootstrap';
import dentalImg from '../../images/Mask Group 3.png';
import doc from '../../images/5790-removebg.png';
import './Service.css';
import SingleService from '../SingleService/SingleService';

const Service = () => {
  const [services, SetServices] = useState([]);
  useEffect(() => {
    fetch('https://doctors-portalserver.herokuapp.com/getServices')
      .then(res => res.json())
      .then(service => {
        SetServices(service);
      });
  }, []);

  return (
    <div className='services mx-5 px-4 my-5 pt-5'>
      <div className='heading text-center my-5'>
        <p>OUR SERVICES</p>
        <h2>Service We Provide</h2>
      </div>
      <CardDeck>
        {services.map(service => (
          <SingleService key={service.id} service={service} />
        ))}
      </CardDeck>

      <div className='dentalCare'>
        <div className='row'>
          <div className='col-5'>
            <img className='dental' src={dentalImg} alt='' />
          </div>

          <div className='col-7  dentalDetails'>
            <h2>Exceptional Dental Care On Your Terms </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a
              quis, iure animi perferendis adipisci odit accusamus rem, fugiat
              ipsa dicta, praesentium veritatis. Quae labore aspernatur
              pariatur? Temporibus ipsum dolores, labore nesciunt obcaecati,
              quidem unde eos tenetur accusantium doloremque pariatur velit
              incidunt laborum expedita ab fugit, inventore natus sunt tempore?
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className='appointment'>
        <div className='row'>
          <div className='col-5'>
            <img className='docImg' src={doc} alt='' />
          </div>
          <div className='col-7 appointmentDetails my-3'>
            <p className='title'>Appointment</p>
            <h3>Make an appointment Today</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              atque sed aperiam expedita fugiat.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
