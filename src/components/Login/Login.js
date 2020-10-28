import React, { useContext, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";


firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [CreateUser, SetCreateUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    success:'',
    error:'',
  });
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
  const [validated, setValidated] = useState(false);

  const inputHandler = e => {
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
    if (e.target.name === "email") {
      const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isInputValid = validation.test(e.target.value);
      !isInputValid &&  document.querySelector('.email').style.setProperty('display','block')
    
    }
    if (e.target.name === "password") {
      const passValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      isInputValid = passValidation.test(e.target.value);
      !isInputValid &&  document.querySelector('.password').style.setProperty('display','block')
   
    }
    if (isInputValid) {
      const newUser = { ...CreateUser };
      newUser[e.target.name] = e.target.value;
      SetCreateUser(newUser);
    }
    
  };
  const [newUser, SetNewUser] = useState(false);

  ////////// firebase create and login ///////////
  const formRef = useRef(null);

  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };


  const createAccountHandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (CreateUser.email && CreateUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(CreateUser.email, CreateUser.password)
        .then(result => {
          console.log("Account Create Successfully");
          const newUserInfo = { ...CreateUser };
          newUserInfo.error = "";
          newUserInfo.success = "User Created Successfully";
          SetCreateUser(newUserInfo);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message;
          const newUserInfo = { ...CreateUser };
          newUserInfo.error = errorMessage;
          newUserInfo.success = "";
          SetCreateUser(newUserInfo);
          // ...
        });
    } 

      formRef.current.reset();
  };

  // login
  const loginHandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (CreateUser.email === "") {
      document.querySelector('.email').style.setProperty('display','block')
    }
    if (CreateUser.password === "") {
      document.querySelector('.password').style.setProperty('display','block')
    }
    if(CreateUser.email && CreateUser.password){
      firebase.auth().signInWithEmailAndPassword(CreateUser.email, CreateUser.password)
      .then(result =>{
        console.log("Account Login Successfully");
        const loginUser = { ...CreateUser };
        loginUser.error = "";
        loginUser.success = "User Logged In Successfully";
        SetCreateUser(loginUser)
        SetLoggedInUser(result.user)
        history.replace(from);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        const loginUser = { ...CreateUser };
        loginUser.error = errorMessage;
        loginUser.success = "";
        SetCreateUser(loginUser)
        // ...
      });
    }
    
  };

  return (
    <div className='row'>
      <div className='col-md-6 login'>
        <h3 className='text-center text-success'>{CreateUser.success}</h3>
        <h3 className='text-center text-danger'>{CreateUser.error}</h3>
        <Card className='loginCard'>
          <h4> {!newUser ? "Login" : "Create An Account"} </h4>
          <Card.Body>
            <Form
              noValidate
              ref={formRef}
              onSubmit={newUser ? createAccountHandler : loginHandler}
              className='loginForm'>
              {newUser && (
                <Form.Control
                  onBlur={inputHandler}
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  required
                />
              )}
              <Form.Control.Feedback type='invalid' className='name'>
              {!CreateUser.name ? 'name must be start with atleast 3 character':'' }
              </Form.Control.Feedback>
              {newUser && (
                <Form.Control
                  onBlur={inputHandler}
                  type='number'
                  name='phone'
                  placeholder='Your Phone'
                  required
                />
              )}
              <Form.Control.Feedback type='invalid' className='phone'>
              {!CreateUser.phone ? 'must have atleast 11 number':'' }
              </Form.Control.Feedback>
              <Form.Control
                onBlur={inputHandler}
                type='email'
                name='email'
                placeholder='Email'
                required
              />
              <Form.Control.Feedback type='invalid' className='email'>
              {!CreateUser.email ? 'please provide an valid email':'' }
              </Form.Control.Feedback>
              <Form.Control
                onBlur={inputHandler}
                type='password'
                name='password'
                placeholder='Password'
                required
              />
              <Form.Control.Feedback type='invalid' className='mb-3 password' >
              {!CreateUser.password ? 'must have minimum 6 character with number':'' }
              </Form.Control.Feedback>
              {/* button start */}
              <p className='text-danger'>{!CreateUser.password && 'Button will be enable after full form fill up'} </p>
              {CreateUser.password && document.querySelector('.loginBtn').removeAttribute('disabled')}
              <Button className='loginBtn' type='submit' disabled>
                {!newUser ? "Login" : "Create an Account"}
              </Button>
              {/* Button end */}
              <p className='mb-0 mt-2'>
                {newUser ? "have an account ? " : "Don't have any account ? "}
                <Link
                  to='/login'
                  className='createAccount'
                  onClick={() => SetNewUser(!newUser)}>
                  {newUser ? "login" : "create an account"}
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-6'>
        <img className='loginImg' src='https://imgur.com/dTcV7Po.png' alt='' />
      </div>
    </div>
  );
};

export default Login;
