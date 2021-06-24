import React from 'react';
import Button from '@material-ui/core/Button';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

const NavButtons = () => {
  return (
    <>
      <Button className='custom-btn' variant='outlined' color='primary'>
        <LiveHelpOutlinedIcon />
        <span style={{ marginLeft: '0.5rem' }}>About</span>
      </Button>
      <Button className='custom-btn' variant='outlined' color='primary'>
        <WorkOutlineOutlinedIcon />
        <span style={{ marginLeft: '0.5rem' }}>Portfolio</span>
      </Button>
      <Button className='custom-btn' variant='outlined' color='primary'>
        <PermContactCalendarOutlinedIcon />
        <span style={{ marginLeft: '0.5rem' }}>Contact</span>
      </Button>
    </>
  );
};

export default NavButtons;
