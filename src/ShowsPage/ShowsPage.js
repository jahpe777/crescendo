import React, { Component } from 'react';
import './ShowsPage.css';
import Context from '../Contexts/Context';

class ShowsPage extends Component {
  static contextType = Context;

  render() {
    const profile = this.props.profile ? this.props.profile : this.context;
    return (
      <div className="showspage">
        <section className="image-showspage">
          {profile.shows.map(show => (
            <div key={show.id}>
              <h3>{show.venue}</h3>
              <h3>{show.date}</h3>
              <h3>{show.city}</h3>
              <br />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default ShowsPage;
