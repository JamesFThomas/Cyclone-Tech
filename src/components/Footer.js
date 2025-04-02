import * as React from 'react';
import Typography from '@mui/material/Typography';

import CyTechEmb from '../assets/CyTechEmblem.png';

export default function Footer() {
  return (
    <div className='Footer'>
      <Typography
        variant='subtitle2'
        component='div'
        style={{ color: 'white' }}
        gutterBottom
      >
        Copyright <span>&#169;</span> {new Date().getFullYear()}
        <br />
        Cycl
        <span>
          <img
            src={CyTechEmb}
            alt='cyclone technologies emblem'
            style={{ height: '.95em', width: 'auto' }}
          />
        </span>
        ne Technologies Inc.
      </Typography>
    </div>
  );
}
