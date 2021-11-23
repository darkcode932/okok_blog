import React from 'react';
import './footer.css'

const Footer = () => {
  return (
      <div className="okok__footer section__padding">
      <div className="okok__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="okok__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="okok__footer-links">
        <div className="okok__footer-links_logo">
          <h1>OKOK</h1>
          <p>PK17 DOUALA CAMEROON, <br /> All Rights Reserved</p>
        </div>
        <div className="okok__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="okok__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="okok__footer-links_div">
          <h4>Get in touch</h4>
          <p>PK17 DOUALA CAMEROON</p>
          <p>(+237) 6-57-23-55-96</p>
          <p>atebederussel@gmail.com</p>
        </div>
      </div>

      <div className="okok__footer-copyright">
        <p>@2021 OKOK. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;