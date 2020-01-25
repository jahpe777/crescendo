import React, { Component } from 'react';
import './ListenPage.css';

class ListenPage extends Component {
  render() {
      let albumIDs = ['2428500762'];
    return (
      <div className='listenpage'>
      {albumIDs.map(albumID=>
          <section key={albumID}>
            <iframe 
                title='bandcamp alum'
                border='0'
                width='350px' 
                height='470px' 
                src={`https://bandcamp.com/EmbeddedPlayer/album=${albumID}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}>
            </iframe>
        </section>
      )}
      </div>
    );
  }
}

export default ListenPage;