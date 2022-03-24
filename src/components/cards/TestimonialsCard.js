// Dependcy Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Typography } from '@mui/material'
import { fullname, LoremIpsum } from 'react-lorem-ipsum';

//  Assets Imports
import happyCustomer from '../../assets/happyCustomer.jpg';

// Information Varibales 
const customerName = fullname('female') // using lorem-ipsum fullname() for card info


export default function TestimonialsCard() {

    return (
        <div className='Tests cards'>
            <Card className='card' >
                <CardContent>
                    <CardMedia
                        className='cardMedia'
                        component="img"
                        height="200"
                        image={happyCustomer}
                        alt="newsletter sign up"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        {customerName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <LoremIpsum p={1} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='cardBtn' size="small" color="primary">
                        < Link className='link' to='/services'>
                            Happy Clients
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}