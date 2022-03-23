// Dependency Imports
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function NavButtons() {

    return (
        <div className="navButtons" >
            <ButtonGroup variant="text" aria-label="small button group" style={{ backgroundColor: "darkgray" }}>
                <Button >
                    <Link to='/'>
                        <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                            Home
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link to='/newsletter'>
                        <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                            Newsletter
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link to='/services'>
                        <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                            Services
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link to='/testimonials'>
                        <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                            Testimonials
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link to='/contacts'>
                        <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                            Contacts
                        </Typography>
                    </Link>
                </Button>
            </ButtonGroup>
        </div>
    );
}