// Dependcy Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Grid, Typography } from '@mui/material'
import { fullname, LoremIpsum } from 'react-lorem-ipsum';

//  Assets Imports
import reviewPic from '../../assets/Review.jpg';

// Information Varibales 
const customerName = fullname('female') // using lorem-ipsum fullname() for card info


export default function TestimonialsCard() {

    return (
        <div className='Tests cards'>
            <Card className='card' style={{ backgroundColor: "RGB(169, 214, 229)" }}>
                <CardMedia
                    className='cardMedia'
                    component="img"
                    height="200"
                    image={reviewPic}
                    alt="newsletter sign up"
                />
                <CardContent >
                    < Grid container direction="column" alignItems="center" justify="center" >
                        <Typography variant="h5" component="div">
                            {customerName}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <LoremIpsum p={1} />
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button className='cardBtn' size="small" color="primary">
                        < Link className='link' to='/testimonials' style={{ color: "RGB(1, 42, 74)" }}>
                            Happy Clients
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}