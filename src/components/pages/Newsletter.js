import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//Component Imports 
import NavBar from '../NavBar';
import Footer from '../Footer';
import SignUp from '../pageComps/signUp';

// Styling Imports
import '../../styles/Pages.css'

export default function NewsLetter() {

    return (
        <div className='pageGrid'>
            <NavBar />
            < SignUp />
            <Footer />
        </div >
    );
}