import React from 'react';
import '../About/About.scss';

import FirstRow from './FirstRow';
import SecondRow from './SecondRow';

const About = () => {
  return (
    <div className='about-section'>
      <h1 className='about-title'>About me</h1>
      <div className='about-main-content'>
        <div className='about-row about-first'>
          <FirstRow />
        </div>
        <div className='about-row about-second'>
          <SecondRow />
        </div>
      </div>
    </div>
  );
};

export default About;
