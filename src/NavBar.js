// Dependency Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CycloneIcon from '@mui/icons-material/Cyclone';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

// Style Imports
import './styles/NavBar.css';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='navGrid'>
            <div className='navLogo'>
                <CycloneIcon style={{ fontSize: 60, color: "white" }} />
                <Typography className='navName' variant="caption" display="inline" component="div" gutterBottom style={{ color: "white" }}>
                    CY-TECH INC.
                </Typography>
            </div>
            <div className='navBurger'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon mt={3} style={{ fontSize: 60 }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem onClick={handleClose}>NewsLetter</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Services</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Testimonials</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                </Menu>
            </div>
            <div className='navButtons'>
                <ButtonGroup variant="outlined" aria-label="text button group" style={{ backgroundColor: "white" }}>
                    <Button >
                        <Typography variant="button" display="block" gutterBottom>
                            NewsLetter
                        </Typography>
                    </Button>
                    <Button>
                        <Typography variant="button" display="block" gutterBottom>
                            Services
                        </Typography>
                    </Button>
                    <Button>
                        <Typography variant="button" display="block" gutterBottom>
                            Testimonials
                        </Typography>
                    </Button>
                    <Button>
                        <Typography variant="button" display="block" gutterBottom>
                            Contact Us
                        </Typography>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}