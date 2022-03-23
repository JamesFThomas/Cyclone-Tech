import * as React from 'react';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';
import Footer from '../Footer';

import '../../styles/Pages.css'

export default function Contacts() {

    return (
        <div className='pageGrid'>
            <div className='pageHead'>
                <NavBar />
            </div>
            <div className='pageBody'>
                <Typography mt={3} variant="subtitle2" component="div" style={{ color: "red" }} gutterBottom >
                    Contacts
                </Typography>
            </div>
            <div className='pageFoot'>
                <Footer />
            </div>
        </div >
    );
}