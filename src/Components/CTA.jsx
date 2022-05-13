import React from 'react';
import CV from './styles/MyCvUpdated.odt';

export default function CTA () {
  return (
    <div className='cta'>
    <a href={CV} className='btn'>Download CV</a>
    </div>
  )
}
