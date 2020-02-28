import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Context from '../Contexts/Context';

class HomePage extends Component {
  static contextType = Context;

  render() {
    return (
      <Context.Consumer>
        {value => (
          <div className="homePage">
            <section>
              <Link to="/listen">
                {this.context.images.map(image => (
                  <div key={image.id}>
                    <img
                      className="image-homePage"
                      src={image.image}
                      alt="Spanish Prisoners"
                    />
                  </div>
                ))}
              </Link>
            </section>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default HomePage;
