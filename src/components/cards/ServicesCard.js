import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Grid, Typography } from '@mui/material'
import { LoremIpsum } from 'react-lorem-ipsum';


import servicesPic from '../../assets/Services.jpg';

import "../../styles/mainCards.css"

export default function ServicesCard() {

    return (
        <div className='Services '>
            <Card className='card' style={{ backgroundColor: "RGB(169, 214, 229)" }} >
                <CardMedia
                    className='cardMedia'
                    component="img"
                    height="200"
                    image={servicesPic}
                    alt="business services"
                />
                <CardContent >
                    <Typography variant="h5" component="div">
                        Let Our Team Help Yours
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <LoremIpsum p={1} />
                    </Typography>
                </CardContent>
                <CardActions className='cardContent'>
                    <Button className='link' size="small" color="primary">
                        < Link className='link' to='/services' style={{ color: "RGB(1, 42, 74)" }}>
                            Our Services
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}