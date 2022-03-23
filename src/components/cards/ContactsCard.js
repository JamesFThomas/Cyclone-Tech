// Dependcy Imports
import * as React from 'react';
import { Button, Card, CardContent, CardActions, CardActionArea, CardMedia, Typography } from '@mui/material'
import { fullname, LoremIpsum } from 'react-lorem-ipsum';

//  Assets Imports
import contactUs from '../../assets/contactUs.jpg';

export default function ContactsCard() {

    return (
        <div className='Contacts cards'>
            <Card className='card'>
                <CardContent>
                    <CardMedia
                        className='cardMedia'
                        component="img"
                        height="200"
                        image={contactUs}
                        alt="newsletter sign up"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        We Want To Hear From You!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <LoremIpsum p={1} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='cardBtn' size="small" color="primary" >
                        Contact Us
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}