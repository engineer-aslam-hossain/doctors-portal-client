import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateDoctor = () => {
    const [file,SetFile] = useState(null)
    const [doctor , SetDoctor ] = useState({
        name:'',
        phone:'',
    })

    const docInputHandler=(e)=>{

        e.preventDefault();
        let isInputValid;
        if (e.target.name === "name") {
            const nameValidation = /^([a-zA-Z]{3,30}\s*)+/;
            isInputValid = nameValidation.test(e.target.value);
      
            !isInputValid && document.querySelector('.name').style.setProperty('display','block')
          }
          if (e.target.name === "phone") {
            isInputValid = e.target.value.length > 10 ? e.target.value : '' 
            !isInputValid &&  document.querySelector('.phone').style.setProperty('display','block')
          }
         
          if (isInputValid) {
            const newUser = { ...doctor };
            newUser[e.target.name] = e.target.value;
            SetDoctor(newUser);
          }
          


    }
    const docFormSubmit=(e)=>{
        e.preventDefault();
                const formData = new FormData()
                formData.append('file', file)
                formData.append('name', doctor.name)
                formData.append('phone', doctor.phone)

                fetch('http://localhost:8080/addADoctor', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error(error)
                })
    }
    const fileHandler=(e)=>{
        e.preventDefault();
        const newFile = e.target.files[0]
        SetFile(newFile)
    }
    return (
        <div>
              <Form
              noValidate
              className='loginForm'
              onSubmit={docFormSubmit}
              >
             
                <Form.Control
                  onBlur={docInputHandler}
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  required
                />
              <Form.Control.Feedback type='invalid' className='name'>
              {!doctor.name ? 'name must be start with atleast 3 character':'' }
              </Form.Control.Feedback>
            
                <Form.Control
                  onBlur={docInputHandler}
                  type='number'
                  name='phone'
                  placeholder='Your Phone'
                  required
                />
              <Form.Control.Feedback type='invalid' className='phone'>
              {!doctor.phone ? 'must have atleast 11 number':'' }
              </Form.Control.Feedback>

              <Form.Control
                onChange={fileHandler}
                type='file'
                name='img'
                placeholder='Select your photo'
                required
              />
              <Form.Control.Feedback type='invalid' className='email'>
              {!doctor.email ? 'please provide an valid email':'' }
              </Form.Control.Feedback>
           
              <Button className='loginBtn' type='submit' >
                Add 
              </Button>
             
            </Form>
        </div>
    );
};

export default CreateDoctor;