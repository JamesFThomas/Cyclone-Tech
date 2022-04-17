// Dependcy Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Typography, Grid } from '@mui/material'
import { LoremIpsum } from 'react-lorem-ipsum';

//  Assets Imports
import contactPic from '../../assets/Contact.jpg';

import "../../styles/mainCards.css"

export default function ContactsCard() {

    return (
        <div className='Contacts'>
            <Card className='card' style={{ backgroundColor: "RGB(169, 214, 229)" }} >
                <CardMedia
                    className='cardMedia'
                    component="img"
                    height="200"
                    image={contactPic}
                    alt="newsletter sign up"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        We Want To Hear From You!
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <LoremIpsum p={1} />
                    </Typography>
                </CardContent>
                <CardActions className='cardContent'>
                    <Button className='cardBtn' size="small" color="primary">
                        < Link className='link' to='/contacts' >
                            Contact Us
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}