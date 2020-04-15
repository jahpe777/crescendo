import React, { Component } from 'react';
import './WatchPage.css';
import Context from '../Contexts/Context';

class WatchPage extends Component {
  static contextType = Context;

  render() {
    const profile = this.props.profile ? this.props.profile : this.context;
    return (
      <div className="watchpage">
        <section>
          {profile.videos.map(video => (
            <div key={video.id}>
              <iframe
                className="videos"
                title="newVideo"
                width="46.3%"
                height="473"
                src={video.video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default WatchPage;
