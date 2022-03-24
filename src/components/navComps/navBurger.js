// Dependency Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

export default function NavBurger() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='navBurger'>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon style={{ fontSize: 50, color: "white" }} />
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

                <MenuItem onClick={handleClose}>
                    <Link className='link' to='/'>
                        Home
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Link className='link' to='/newsletter'>
                        Newsletter
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Link className='link' to='/services'>
                        Services
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Link className='link' to='/testimonials'>
                        Testimonials
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Link className='link' to='/contacts'>
                        Contacts
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}