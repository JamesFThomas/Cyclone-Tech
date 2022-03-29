// Dependency Imports
import * as React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import NavBar from './NavBar';
import Footer from './Footer';
import NewsLetterCard from './cards/NewsletterCard'
import TestimonialsCard from './cards/TestimonialsCard'
import ServicesCard from './cards/ServicesCard'
import ContactsCard from './cards/ContactsCard'
import Newsletter from '../components/pages/Newsletter';
import Services from '../components/pages/Services';
import Testimonials from '../components/pages/Testimonials';
import Contacts from '../components/pages/Contacts';

// Styling Imports
import '../styles/App.css';

// Asset Imports
const { clients } = require('../assets/clients.js');


export default function App() {

  return (
    < Router>
      <div className="App" >
        <Routes>
          <Route path="/newsletter" element={< Newsletter />} />
          <Route path="/services" element={< Services />} />
          <Route path="/testimonials" element={< Testimonials clients={clients} />} />
          <Route path="/contacts" element={< Contacts />} />
          <Route path='/'
            element={
              <Fragment>
                < NavBar />
                < NewsLetterCard />
                < TestimonialsCard />
                < ServicesCard />
                < ContactsCard />
                < Footer />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

