import AnimatedWaves from './Waves';
import React from 'react';
import NavButtons from './NavButtons';
import Footer from '../Footer/Footer';
import Particles from 'react-particles-js';

const Landing = ({ children }) => {
  return (
    <>
      <div className='header'>
        <Particles
          style={{ position: 'absolute', left: '0', opacity: '40%' }}
        />
        <div className='inner-header flex'>
          <svg
            version='1.1'
            className='logo'
            baseProfile='tiny'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 500 500'
            xmlSpace='preserve'
          >
            <path
              fill='#FFFFFF'
              stroke='#000000'
              strokeWidth='10'
              strokeMiterlimit='10'
              d='M57,283'
            />
          </svg>
          <h1 className='landing-header'>
            Hi, I'm <strong>Karsen</strong>. 👋🏼
          </h1>
        </div>

        <NavButtons />

        <AnimatedWaves />
      </div>

      <div className='content flex'>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
