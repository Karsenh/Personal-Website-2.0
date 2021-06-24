import React from 'react';
import '../About/About.scss';

import FirstRow from './FirstRow';

const About = () => {
  return (
    <div className='about-section'>
      <h1 className='about-title'>About me</h1>
      <div className='about-main-content'>
        <div className='about-row about-first'>
          <FirstRow />
        </div>
      </div>
      <div className='about-row about-second'>Test content</div>
    </div>
  );
};

export default About;
