import * as React from 'react';
import Typography from '@mui/material/Typography';

//Component Imports 
import NavBar from '../NavBar';
import Footer from '../Footer';

// Styling Imports
import '../../styles/Pages.css'

export default function NewsLetter() {

    return (
        <div className='pageGrid'>
            <div className='pageHead'>
                <NavBar />
            </div>
            <div className='pageBody'>
                <Typography mt={3} variant="subtitle2" component="div" style={{ color: "red" }} gutterBottom >
                    NewsLetter
                </Typography>
            </div>
            <div className='pageFoot'>
                <Footer />
            </div>
        </div >
    );
}