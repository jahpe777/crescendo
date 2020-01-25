import React, { Component } from 'react';
import './WatchPage.css';
import Context from '../Contexts/Context';

class WatchPage extends Component {

    static contextType = Context;

    render() {
        return (
            <Context.Consumer>
                {(value) => 
                    <div className='watchpage'>
                        <section>
                            { this.context.videos.map((video, i) => (
                                <div key={ i }> 
                                    <iframe className='videos'
                                            title='newVideo'
                                            width='46.3%'
                                            height='473' 
                                            src= { video.value.indexOf('/embed/') > 0 ? video.value : 'https://www.youtube.com/embed/'+ video.value.split("?v=")[1].split("&")[0]
                                            }
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen>
                                    </iframe>
                                </div>
                            ))}                  
                        </section>
                    </div>
                }
            </Context.Consumer>
        );
    }
}

export default WatchPage;