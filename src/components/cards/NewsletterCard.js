import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { LoremIpsum } from 'react-lorem-ipsum';

import newsLetterPic from '../../assets/newsLetter.jpg';

import '../../styles/mainCards.css';

export default function NewsLetterCard() {
  return (
    <div className='NewsLetter'>
      <Card className='card' style={{ backgroundColor: 'RGB(169, 214, 229)' }}>
        <CardMedia
          className='cardMedia'
          component='img'
          height='200'
          image={newsLetterPic}
          alt='newsletter sign up'
        />
        <CardContent>
          <Typography variant='h5' component='div'>
            Pick Up Insider Tips To Help
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
            <Link className='link' to='/newsletter'>
              Get Tips
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
