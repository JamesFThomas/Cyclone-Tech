// Dependency Imports 
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Asset Imports
import wwLogo2 from '../../assets/wwLogo2.png'

// Style Imports
import '../../styles/signUp.css'


export default function SignUp() {

    return (
        <div className='pageBody'>
            <Paper className='signUpPaper' variant="outlined" >
                <div className='signTitle'>
                    <Typography variant="h3" style={{ color: "RGB(1, 42, 74)" }}  >
                        Get Swept Up In The Latest
                    </Typography>
                </div>
                <div className='signLogo'>
                    <img src={wwLogo2} alt='The Whirlwind newsletter logo' style={{ height: "11em", width: "auto" }} />
                </div>
                <div className='signText'  >
                    The Whirlwind! <br />
                    Join over 100,000 others on our email to gain access to the hottest tech news and deals!
                </div>
                <div className='signName' >
                    <TextField id="outlined-basic" label="Full Name" defaultValue="Your Name Here" variant="outlined" />
                </div>
                <div className='signEmail' >
                    <TextField id="outlined-basic" label="Email Address" defaultValue="yourEmail@address.com" variant="outlined" />
                </div>
                <div className='signBtn' >
                    <Button variant="contained" style={{ "background-color": "RGB(1, 42, 74)" }}> Sign Up </Button>
                </div>
                <div className='signFoot' >
                    Zero Spam. <br />
                    Unsubscribe at any time.
                </div>
            </Paper>
        </div>
    );
}