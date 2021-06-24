import React from 'react';
import SchoolCard from './SchoolCard';

const SecondRow = () => {
  return (
    <div className='about-second'>
      <h2 style={{ textAlign: 'left' }}>Education</h2>

      <SchoolCard
        school='Gonzaga University'
        years='2018-2021'
        awards='Academic Honors'
        degree='B.A. Computer Science | Minor General Business'
      />
      <SchoolCard
        school='North Idaho College'
        years='2016-2018'
        awards='Academic Honors'
        degree='Associates of Science'
      />
    </div>
  );
};

export default SecondRow;
