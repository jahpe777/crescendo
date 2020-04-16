import React, { Component } from 'react';
import './BandPage.css';
import Context from '../Contexts/Context';
import config from '../config';
import Footer from '../Footer/Footer';
import WatchPage from '../WatchPage/WatchPage';
import ListenPage from '../ListenPage/ListenPage';
import ShowsPage from '../ShowsPage/ShowsPage';
import SignUpPage from '../SignUpPage/SignUpPage';

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
            <h2 className="band-name">{this.state.band.band_name}</h2>

            <div>
              <img
                className="image-bandPage"
                src={this.state.band.image}
                alt="user-cover"
              />
            </div>
          </section>

          <WatchPage profile={this.state.band} />
          <ListenPage profile={this.state.band} />
          <ShowsPage profile={this.state.band} />
          <SignUpPage profile={this.state.band} />
          <Footer profile={this.state.band} />
        </div>
      </>
    ) : (
      'Loading...'
    );
  }
}

export default BandPage;
