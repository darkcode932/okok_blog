import React from 'react';
import './brand.css'
import {google,github,slack,twitter,discord} from './import'

const Brand = () => {
  return (
    <div className="okok__brand section__padding">
      <div>
        <img src={google} alt="google logo" />
      </div>
      <div>
        <img src={slack} alt="slack logo"/>
      </div>
  </div>
  );
}

export default Brand;