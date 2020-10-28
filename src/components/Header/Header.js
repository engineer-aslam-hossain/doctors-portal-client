import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const location = useLocation();
  return (
    <Navbar expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto mr-5'>
          <Link to='/' className='text-decoration-none text-dark'>
            Home
          </Link>
          <Link to='/dentalServices' className='text-decoration-none text-dark'>
            Dental Services
          </Link>
          <Link to='/dashboard' className='text-decoration-none text-dark'>
            Doctors Dashboard
          </Link>
          <Link
            to='/reviews'
            className={
              location.pathname === "/"
                ? "text-decoration-none text-white"
                : "text-decoration-none text-dark"
            }>
            Reviews
          </Link>
          <Link
            to='/blog'
            className={
              location.pathname === "/"
                ? "text-decoration-none text-white"
                : "text-decoration-none text-dark"
            }>
            Blog
          </Link>
          <Link
            to='/dashboard'
            className={
              location.pathname === "/"
                ? "text-decoration-none text-white"
                : "text-decoration-none text-dark"
            }>
            Contact Us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
