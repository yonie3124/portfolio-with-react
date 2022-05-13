import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import './styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer__content">
      <div className="text">
        <div className="icons">
          <a href='https://www.linkedin.com/feed/' alt='_blank' className='icon'> <FaLinkedin /> </a>
          <a href='https://www.facebook.com/' className='icon'> <FaFacebookF /> </a>
          <a href='https://www.instagram.com/?msclkid=588a66a8d12411ec8d8c1756cdb09162' className='icon'> <FaInstagram /> </a>
          <a href='https://github.com/yonie3124?tab=repositories' className='icon' > <FaGithub /> </a>
          <a href='https://www.google.com/intl/nl/gmail/about/' className='icon' > <GoMail /> </a>
        </div>
      </div>
    </div>
  )
}
