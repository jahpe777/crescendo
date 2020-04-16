import React, { Component } from 'react';
import './ListenPage.css';
import Context from '../Contexts/Context';

class ListenPage extends Component {
  static contextType = Context;

  render() {
    const profile = this.props.profile ? this.props.profile : this.context;
    return (
      <div className="listenpage">
        <section className="listen-section">
          {profile.songs.map(song => (
            <div key={song.id}>
              <iframe
                className="songs"
                title="bandcamp alum"
                border="0"
                width="350px"
                height="470px"
                src={song.song}
              ></iframe>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default ListenPage;
