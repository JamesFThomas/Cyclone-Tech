import * as React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ContactUs from '../pageComps/contactUs';

import '../../styles/Pages.css'

export default function Contacts() {

    return (
        <div className='pageGrid'>
            <NavBar />
            < ContactUs />
            <Footer />
        </div >
    );
}