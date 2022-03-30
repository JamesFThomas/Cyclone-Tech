import * as React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

import ServicesList from '../pageComps/servicesList'

import '../../styles/Pages.css'

export default function Services({ services }) {

    return (
        <div className='pageGrid'>
            <NavBar />
            < ServicesList services={services} />
            <Footer />
        </div >
    );
}