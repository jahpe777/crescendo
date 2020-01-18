import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className='homePage'>
        <section >
            <Link to='/listen'>
                <img className='image-homePage' src='images/spanish_prisoners.jpg' alt='Spanish Prisoners' />
            </Link>
        </section>
      </div>
    );
  }
}

export default HomePage;