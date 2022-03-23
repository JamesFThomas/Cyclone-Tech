import * as React from 'react';
import { Button, Card, CardContent, CardActions, CardActionArea, CardMedia, Typography } from '@mui/material'
import { fullname, LoremIpsum } from 'react-lorem-ipsum';

import bizServices from '../../assets/bizServices.jpg';

export default function ServicesCard() {

    return (
        <div className='Services cards'>
            <Card className='card' >
                <CardContent>
                    <CardMedia
                        className='cardMedia'
                        component="img"
                        height="200"
                        image={bizServices}
                        alt="business services"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        Let Our Team Help Your Team
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <LoremIpsum p={1} />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='cardBtn' size="small" color="primary">
                        Our Services
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}