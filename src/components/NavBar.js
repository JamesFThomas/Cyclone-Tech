// Dependency Imports
import * as React from 'react';

// Component Imports
import NavButtons from './navComps/navButtons'
import NavLogo from './navComps/navLogo'
import NavBurger from './navComps/navBurger'

// Style Imports
import '../styles/NavBar.css';

export default function NavBar() {

    return (
        <div className='NavBar navGrid'>
            < NavLogo />
            < NavBurger />
            < NavButtons />
        </div>
    );
}