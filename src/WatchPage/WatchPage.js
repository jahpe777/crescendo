import React, { Component } from 'react';
import './WatchPage.css';
import Context from '../Contexts/Context';

class WatchPage extends Component {
  static contextType = Context;

  render() {
    return (
      <Context.Consumer>
        {value => (
          <div className="watchpage">
            <section>
              {this.context.videos.map(video => (
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
              {/* {this.context.videos.map((video, i) =>
                video.value ? (
                  <div key={i}>
                    <iframe
                    className="videos"
                    title="newVideo"
                    width="46.3%"
                    height="473"
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  </div>
                ) : (
                  ''
                )
              )} */}
            </section>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default WatchPage;
