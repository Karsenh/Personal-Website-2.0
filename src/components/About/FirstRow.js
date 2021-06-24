import React from 'react';
import profilePic from '../../images/profilePic.jpg';
import SocialIcons from './SocialIcons/SocialIcons';
import { FaHtml5, FaJava, FaJs, FaPython } from 'react-icons/fa';

const FirstRow = () => {
  return (
    <>
      <div className='about-name'>
        <img className='profile-pic' src={profilePic} alt='' />
        <p style={{ marginTop: '3rem' }}>
          My name is <strong>Karsen Hansen</strong>.
        </p>
        <p>
          <strong>Computer Science</strong> Graduate of{' '}
          <strong>Gonzaga University</strong> in Spokane Washington.
        </p>
        <SocialIcons />
      </div>
      <div className='about-intro-statement'>
        <p>
          I'm a passionate <strong>web-developer</strong>, specializing in
          React.js with three + years of OOP experience across several
          programming languages
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
            opacity: '15%',
          }}
        >
          <FaJs size={20} />
          <FaJava size={20} />
          <FaPython size={20} />
          <FaHtml5 size={20} />
        </div>
      </div>
    </>
  );
};

export default FirstRow;
