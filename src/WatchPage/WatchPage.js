import React, { Component } from 'react';
import './WatchPage.css';

class WatchPage extends Component {
  render() {
    return (
      <div className='watchpage'>
        <section className='know-no-violence'>
            <iframe className='videos'
                title='knownoviolence'
                width='46.3%'
                height='473' 
                src="https://www.youtube.com/embed/0Xv3eTfjMT4" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </section>
        <section className='slow-decay-live'>
            <iframe className='videos'
                title='slowdecaylive'
                width='46.3%' 
                height='473'
                src="https://www.youtube.com/embed/Q8j6LGCUpRY" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </section>
        <section className='live-video'>
            <iframe className='videos'
                title='livevideo'
                width='46.3%' 
                height='473'
                src="https://www.youtube.com/embed/vlLF-9-WrAE" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </section>
      </div>
    );
  }
}

export default WatchPage;