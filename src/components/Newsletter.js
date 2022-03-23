import * as React from 'react';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';
import Footer from './Footer';

export default function NewsLetter() {

    return (
        <div className='newsLGrid'>
            <div className='newsLHead'>
                <NavBar />
            </div>
            <div className='newsLBody'>
                <Typography mt={3} variant="subtitle2" component="div" style={{ color: "red" }} gutterBottom >
                    NewsLetter
                </Typography>
            </div>
            <div className='newsLFoot'>
                <Footer />
            </div>
        </div >
    );
}