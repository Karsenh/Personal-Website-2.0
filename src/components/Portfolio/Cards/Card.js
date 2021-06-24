import { Button } from '@material-ui/core';
import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>
        <Button variant='outlined' color='red'>
          View Source
        </Button>
      </a>
    </>
  );
};

export default Card;
