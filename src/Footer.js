import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {

    return (
        <div >
            <Typography mt={3} variant="subtitle2" component="div" style={{ color: "white" }} gutterBottom >
                Copyright <span>&#169;</span> {(new Date().getFullYear())}
                <br />
                Cyclone Technologies Inc.
            </Typography>
        </div>
    );
}