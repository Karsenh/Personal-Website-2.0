import React from 'react';
import Card from './Cards/Card';
import { Projects } from './Cards/CardData';

const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      {Projects.map((project, index) => {
        return (
          <Card
            key={index}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
