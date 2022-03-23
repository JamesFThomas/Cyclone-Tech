import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Typography } from '@mui/material'
import { LoremIpsum } from 'react-lorem-ipsum';

import newsLetter from '../../assets/newsLetter.jpg';

export default function NewsLetterCard() {

    return (
        <div className='NewsLetter cards'>
            <Card className='card' >
                <CardContent>
                    <CardMedia
                        className='cardMedia'
                        component="img"
                        height="200"
                        image={newsLetter}
                        alt="newsletter sign up"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        Pick Up Insider Tips To Help
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <LoremIpsum p={1} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='cardBtn' size="small" color="primary">
                        < Link to='/newsletter'>
                            Get Tips
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}