// Dependency Imports
import * as React from 'react';
import { Button, Card, CardContent, CardActions, CardActionArea, CardMedia, Typography } from '@mui/material'
import { fullname, LoremIpsum } from 'react-lorem-ipsum';
// Component Imports
import NavBar from './NavBar';
import Footer from './Footer';
// Styling Imports
import './styles/App.css';
// Asset Imports
import newsLetter from './newsLetter.jpg';
import happyCustomer from './happyCustomer.jpg';
import contactUs from './contactUs.jpg';
import bizServices from './bizServices.jpg';

const customerName = fullname('female') // using lorem-ipsum fullname() for card info

export default function App() {

  return (
    <div className="App" >
      <div className='NavBar'>
        <NavBar />
      </div>
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
              Get Tips
            </Button>
          </CardActions>
        </Card>
      </div>
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
          <CardActions >
            <Button className='cardBtn' size="small" color="primary">
              Happy Clients
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className='Contacts cards'>
        <Card className='card' style={{ backgroundColor: "" }}>
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
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

