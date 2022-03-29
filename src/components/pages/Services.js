import * as React from 'react';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';
import Footer from '../Footer';

import ServicesList from '../pageComps/servicesList'

import '../../styles/Pages.css'

export default function Services() {

    return (
        <div className='pageGrid'>
            <NavBar />
            < ServicesList />
            <Footer />
        </div >
    );
}