import React from 'react';
import './Footer.css'
import Shape from '../../../assets/Home/shape-bg.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={Shape} alt='no internet' className="shape-img"/>
      </div>
    </div>
  )
}

export default Footer