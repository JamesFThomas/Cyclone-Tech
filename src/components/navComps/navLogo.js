// Dependency Imports
import * as React from 'react';
import CycloneIcon from '@mui/icons-material/Cyclone';
import Typography from '@mui/material/Typography';

export default function NavLogo() {

    return (
        <div className='navLogo' >
            <CycloneIcon style={{ fontSize: 50, color: "white" }} />
            <Typography className='navName' variant="caption" display="block" component="div" gutterBottom style={{ color: "white" }}>
                Cy-Tech Inc.
            </Typography>
        </div>
    );
}