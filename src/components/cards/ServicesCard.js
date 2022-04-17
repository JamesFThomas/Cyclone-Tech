import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Grid, Typography } from '@mui/material'
import { LoremIpsum } from 'react-lorem-ipsum';

import servicesPic from '../../assets/Services.jpg';

export default function ServicesCard() {

    return (
        <div className='Services cards'>
            <Card className='card' style={{ backgroundColor: "RGB(169, 214, 229)" }} >
                <CardMedia
                    className='cardMedia'
                    component="img"
                    height="200"
                    image={servicesPic}
                    alt="business services"
                />
                <CardContent>
                    < Grid container direction="column" alignItems="center" justify="center">
                        <Typography variant="h5" component="div">
                            Let Our Team Help Yours
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <LoremIpsum p={1} />
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button className='cardBtn' size="small" color="primary">
                        < Link className='link' to='/services' style={{ color: "RGB(1, 42, 74)" }}>
                            Our Services
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}