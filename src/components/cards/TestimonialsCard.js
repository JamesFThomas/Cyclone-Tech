// Dependcy Imports
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';
import { fullname, LoremIpsum } from 'react-lorem-ipsum';

//  Assets Imports
import reviewPic from '../../assets/Review.jpg';

import '../../styles/mainCards.css';

// Information Variables
const customerName = fullname('female'); // using lorem-ipsum fullname() for card info

export default function TestimonialsCard() {
  return (
    <div className='Tests'>
      <Card className='card' style={{ backgroundColor: 'RGB(169, 214, 229)' }}>
        <CardMedia
          className='cardMedia'
          component='img'
          height='200'
          image={reviewPic}
          alt='newsletter sign up'
        />
        <CardContent>
          <Typography variant='h5' component='div'>
            {customerName}
          </Typography>
          <Typography
            variant='body1'
            mb={4}
            color='text.secondary'
            gutterBottom
          >
            <LoremIpsum p={1} />
          </Typography>
        </CardContent>
        <CardActions className='cardContent'>
          <Button className='cardBtn' size='small' color='primary'>
            <Link className='link' to='/testimonials'>
              Happy Clients
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
