import React, { Component } from 'react';
import './ListenPage.css';

class ListenPage extends Component {
  render() {
    return (
      <div className='listenpage'>
        <section>
            <iframe 
                title='goldfools'
                border='0'
                width='350px' 
                height='470px' 
                src="https://bandcamp.com/EmbeddedPlayer/album=2428500762/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
                seamless>
                <a href="http://spanishprisoners.bandcamp.com/album/gold-fools">Gold Fools by Spanish Prisoners</a>
            </iframe>
        </section>
        <section>
            <iframe 
                title='downtownchicagoland'
                border='0'
                width='350px' 
                height='470px' 
                src="https://bandcamp.com/EmbeddedPlayer/album=1285841668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
                seamless>
                <a href="http://spanishprisoners.bandcamp.com/album/downtown-chicagoland-single">Downtown Chicagoland single by Spanish Prisoners</a>
            </iframe>
        </section>
        <section>
            <iframe 
                title='knownoviolence'
                border='0'
                width='350px' 
                height='470px' 
                src="https://bandcamp.com/EmbeddedPlayer/album=2007334564/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
                seamless>
                <a href="http://spanishprisoners.bandcamp.com/album/know-no-violence-single">Know No Violence single by Spanish Prisoners</a>
            </iframe>
        </section>
      </div>
    );
  }
}

export default ListenPage;