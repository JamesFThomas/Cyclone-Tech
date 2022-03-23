// Dependency Imports
import * as React from 'react';
import { Button, Card, CardContent, CardActions, CardActionArea, CardMedia, Typography } from '@mui/material'
import CycloneIcon from '@mui/icons-material/Cyclone';

// Assest Import
import CyTechLogo from '../../assets/CyTechLogoSmall.png'


export default function NavLogo() {

    return (
        <div className='navLogo' >
            <Card >
                <CardContent >
                    <CardMedia
                        className='cardMediaNav'
                        component="img"
                        image={CyTechLogo}
                        alt="Cyclone Technologies Full Logo"
                    />
                </CardContent>
            </Card>
        </div>
    );
}