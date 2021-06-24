import React from 'react';
import Card from './Cards/Card';
import './Portfolio.scss';
import { Projects } from './Cards/CardData';

const Portfolio = () => {
  return (
    <div className='portfolio-content'>
      <h1 style={{ textAlign: 'center', marginLeft: '2rem' }}>My Portfolio</h1>
      <div className='portfolio-cards'>
        {Projects.map((project, index) => {
          return (
            <div className='portfolio-card'>
              <Card
                key={index}
                title={project.title}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
