import React, { Component } from 'react';
import './BandPage.css';
import Context from '../Contexts/Context';
import config from '../config';
import Footer from '../Footer/Footer';

class BandPage extends Component {
  static contextType = Context;

  state = {
    band: null
  };

  componentDidMount() {
    fetch(
      `${config.API_ENDPOINT}/api/users/details/${this.props.match.params.bandslug}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ band: res });
      })
      .catch(err => console.error(err));
  }

  render() {
    return this.state.band ? (
      <>
        <div className="bandpage">
          <section>
            <h2>{this.state.band.band_name}</h2>

            <div>
              <img
                className="image-bandpage"
                src={this.state.band.image}
                alt="user-cover"
              />
            </div>
          </section>
        </div>
        <Footer profile={this.state.band} />
      </>
    ) : (
      'Loading...'
    );
  }
}

export default BandPage;
