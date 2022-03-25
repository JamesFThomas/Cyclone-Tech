// Dependency Imports 
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

// Asset Imports
import wwLogo from '../../assets/wwLogo.jpg'
import wwLogo2 from '../../assets/wwLogo2.png'

// Style Imports
import '../../styles/signUp.css'


export default function SignUp() {

    return (
        <div className='pageBody'>
            <Paper className='newsPaper' variant="outlined" >
                <div className='signTitle'>
                    <Typography mt={3} variant="h6" style={{ color: "Green" }}  >
                        Get Swept Up In the Latest Tech News
                    </Typography>
                </div>
                <div className='signLogo'>
                    <img src={wwLogo2} alt='The Whirlwind newsletter logo' style={{ height: "9em", width: "auto" }} />
                </div>
                <div className='signText' style={{ padding: "15px" }} >
                    The Whirlwind! <br />
                    Join over 100,000 others on our email to gain access to the hottest tech news and deals!
                </div>
                <div className='signName' >
                    <TextField id="outlined-basic" label="Full Name" defaultValue="Your Name Here" variant="outlined" />
                </div>
                <div className='signEmail'>
                    <TextField id="outlined-basic" label="Email Address" defaultValue="yourEmail@address.com" variant="outlined" />
                </div>
                <div className='signBtn' >
                    <Button variant="contained"> Sign Up </Button>
                </div>
                <div className='signFoot'>
                    Zero Spam. <br />
                    Unsubscribe at any time.
                </div>
            </Paper>
        </div>
    );
}