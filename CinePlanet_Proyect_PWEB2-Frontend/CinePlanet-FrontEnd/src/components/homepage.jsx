import React from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import FooterP1 from './FooterP1.jsx';
import FooterP2 from './FooterP2.jsx';

function Homepage() {
    return (
      <div >
            <NavBar />
            <Home/>
            <FooterP1 />
            <FooterP2 />
        </div>
      
    );
  }
  
  export default Homepage;