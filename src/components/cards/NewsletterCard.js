import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardActions, CardMedia, Grid, Typography } from '@mui/material'
import { LoremIpsum } from 'react-lorem-ipsum';

import newsLetterPic from '../../assets/Newsletter.jpg';

export default function NewsLetterCard() {

    return (
        <div className='NewsLetter cards'>
            <Card className='card' style={{ backgroundColor: "RGB(169, 214, 229)" }} >
                <CardMedia
                    className='cardMedia'
                    component="img"
                    height="200"
                    image={newsLetterPic}
                    alt="newsletter sign up"
                />
                <CardContent >
                    < Grid container direction="column" alignItems="center" justify="center">
                        <Typography variant="h5" component="div">
                            Pick Up Insider Tips To Help
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <LoremIpsum p={1} />
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions >
                    <Button className='cardBtn' size="small" color="primary">
                        < Link className='link' to='/newsletter' style={{ color: "RGB(1, 42, 74)" }}>
                            Get Tips
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}