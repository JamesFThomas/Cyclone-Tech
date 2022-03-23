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

// Styling Imports
import '../styles/App.css';


export default function App() {

  return (
    < Router>
      <div className="App" >
        <Routes>
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

