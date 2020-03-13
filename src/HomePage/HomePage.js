import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Context from '../Contexts/Context';

class HomePage extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="homePage">
        <section>
          <Link to="/listen">
            <div>
              <img
                className="image-homePage"
                src={this.context.contents.image}
                alt="image-band"
              />
            </div>
          </Link>
        </section>
      </div>
    );
  }
}

export default HomePage;
