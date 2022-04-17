// Dependency Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';


export default function NavButtons() {

    return (
        <div className="navButtons" >
            <ButtonGroup variant="text" aria-label="small button group" style={{ backgroundColor: "RGB(1, 42, 74)" }}>
                <Button >
                    <Link className='link' to='/'>
                        <Typography className='navBtnText' style={{ color: "white" }} variant="button" display="block" gutterBottom>
                            Home
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link className='link' to='/newsletter'>
                        <Typography className='navBtnText' style={{ color: "white" }} variant="button" display="block" gutterBottom>
                            Newsletter
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link className='link' to='/services'>
                        <Typography className='navBtnText' style={{ color: "white" }} variant="button" display="block" gutterBottom>
                            Services
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link className='link' to='/testimonials'>
                        <Typography className='navBtnText' style={{ color: "white" }} variant="button" display="block" gutterBottom>
                            Testimonials
                        </Typography>
                    </Link>
                </Button>
                <Button >
                    <Link className='link' to='/contacts'>
                        <Typography className='navBtnText' style={{ color: "white" }} variant="button" display="block" gutterBottom>
                            Contacts
                        </Typography>
                    </Link>
                </Button>
            </ButtonGroup>
        </div>
    );
}