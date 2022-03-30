import * as React from 'react';
import Typography from '@mui/material/Typography';

// component imports 
import NavBar from '../NavBar';
import Footer from '../Footer';
import ClientStories from '../pageComps/clientStories'

import '../../styles/Pages.css'

export default function Testimonials({ clients }) {

    return (
        <div className='pageGrid'>
            <NavBar />
            < ClientStories clients={clients} />
            <Footer />
        </div >
    );
}