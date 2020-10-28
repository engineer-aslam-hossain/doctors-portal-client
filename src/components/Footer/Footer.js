import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col-3'>
          <p className='firstP'>
            Emergency Dental Care <br />
            Check Up <br /> Treatment of Personal Diseases <br />
            Tooth Extraction <br />
            Check Up
          </p>
        </div>
        <div className='col-3'>
          <span>Services</span>
          <p>
            Emergency Dental Care <br />
            Check Up <br /> Treatment of Personal Diseases <br />
            Tooth Extraction <br />
            Check Up <br />
            Check Up <br /> Check Up
          </p>
        </div>
        <div className='col-3'>
          <span>Oral Health</span>
          <p>
            Emergency Dental Care <br />
            Check Up <br /> Treatment of Personal Diseases <br />
            Tooth Extraction <br />
            Check Up <br />
            Check Up <br /> Check Up
          </p>
        </div>
        <div className='col-3'>
          <span>Our Address</span>
          <p>New York-100022, Hudson Yards</p>
          <p>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faGooglePlus} />
            <FontAwesomeIcon icon={faTwitter} />
          </p>
          <p>call now</p>
          <span className='number'>+0123456789</span>
        </div>
      </div>
      <p className='text-center'>
        &copy; Copyright {new Date().getFullYear()} All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
