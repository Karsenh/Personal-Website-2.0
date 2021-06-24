import React from 'react';

const SchoolCard = ({ school, years, awards, degree }) => {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ textAlign: 'left' }}>
          <em>{school}</em>
        </p>
        <p style={{ textAlign: 'left' }}>{years}</p>
        <p style={{ textAlign: 'left' }}>{awards}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ marginTop: '0' }}>{degree}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
