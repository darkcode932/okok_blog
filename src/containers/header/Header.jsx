import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css'

const Header = () => {
  return (
    <div className="okok__header section__padding" id="home">
      <div className="okok__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with OKOK OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="okok__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="okok__header-content__people">
          <img src={people} alt="people image"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="okok__header-image">
        <img src={ai} alt="image"/>
      </div>
    </div>
  );
}

export default Header;