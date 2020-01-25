import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css';

class LandingPage extends Component {
  
  render() {
    return (
      <div className='landingpage'>
        <section className='image-landingpage'>
              <div>
                <h1 className='landing-create'>Create a Website For Your Music Project</h1>
                <p className='landing-explore'>Explore the platform that gives you the ability to 
                  create, design, manage, and develop your own website.</p>
              </div>
              <Link to='/account' type='submit'>
                <button className='landing-button'>Create Account</button>
              </Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;