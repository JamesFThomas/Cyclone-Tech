// Dependency Imports 
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Asset Imports
import FacebookIconOutlinedIcon from '@mui/icons-material/Facebook';
import LinkedInIconOutlinedIcon from '@mui/icons-material/LinkedIn';
import TwitterIconOutlinedIcon from '@mui/icons-material/Twitter';
import YouTubeIconOutlinedIcon from '@mui/icons-material/YouTube';
import gLocation from '../../assets/gLocation.png';
import CyTechLogo from '../../assets/CyTechLogoSmall.png'
import happy from '../../assets/happyEmployee.jpg'

// Style Imports
import '../../styles/contactUs.css'

let figText = ['5409 Madison Street', <br />, 'Nowhere City, Alaska', <br />, 'Phone: 1-543-912-5693']
let figText2 = ['Cyclone Technolgy was voted happiest place on earth', <br />, 'Just look how happy our employees are!']

export default function ContactUs() {

    return (
        <div className='pageBody' >
            <div className='contactsBody' >
                <Typography className='contactsTitle' mt={3} variant="h3" style={{ color: "RGB(1, 42, 74)" }}  >
                    Contact Us
                </Typography>
                <figure className='contactsPhoto'>
                    < img src={gLocation} alt='Google Maps Location for Cyc-Tech Inc.' />
                    <figcaption>{figText}</figcaption>
                </figure>
                <TextField
                    required
                    className='contactsName'
                    id="outlined-required"
                    label="Your Name"
                />
                <TextField
                    required
                    className='contactsEmail'
                    id="outlined-required"
                    label="Your Email"
                />
                <TextField
                    id="outlined-multiline-static"
                    className='contactsNote'
                    label="Your Message *"
                    multiline
                    rows={4}
                />
                < div className='contactsBtn'>
                    <Button variant="contained" style={{ backgroundColor: "RGB(1, 42, 74)" }} className='contactsBtn'>
                        <Typography variant="button" >
                            Send
                        </Typography>
                    </Button>
                </div>
                <div className='contactsIcons'>
                    < FacebookIconOutlinedIcon sx={{ fontSize: 35 }} />
                    < LinkedInIconOutlinedIcon sx={{ fontSize: 35 }} />
                    < TwitterIconOutlinedIcon sx={{ fontSize: 35 }} />
                    < YouTubeIconOutlinedIcon sx={{ fontSize: 35 }} />
                </div>
                <figure className='contactsLogo'>
                    < img className='contacts' src={happy} alt='Happy Employees smiling ina group' />
                    <figcaption> {figText2}</figcaption>
                </figure>
            </div>
        </div>
    );
}