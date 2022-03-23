// Dependency Imports
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

export default function NavButtons() {

    return (
        <div className="navButtons" >
            <ButtonGroup variant="text" aria-label="small button group" style={{ backgroundColor: "darkgray" }}>
                <Button >
                    <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                        NewsLetter
                    </Typography>
                </Button>
                <Button>
                    <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                        Services
                    </Typography>
                </Button>
                <Button>
                    <Typography className='navBtnText' variant="button" display="block" gutterBottom>
                        Testimonials
                    </Typography>
                </Button>
                <Button>
                    <Typography variant="button" display="block" gutterBottom>
                        Contacts
                    </Typography>
                </Button>
            </ButtonGroup>
        </div>
    );
}