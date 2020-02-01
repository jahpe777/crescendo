import React, { Component } from 'react';
import './ListenPage.css';
import Context from '../Contexts/Context';

class ListenPage extends Component {
    
    static contextType = Context;

        render() {
            return (
                <Context.Consumer>
                    {(value) => 
                        <div className='listenpage'>
                            <section>
                                { this.context.songs.map((song, i) => song.value ? (
                                        <div key = { i }> 
                                            <iframe 
                                                title='bandcamp alum'
                                                border='0'
                                                width='350px' 
                                                height='470px' 
                                                src={ song.value }>
                                            </iframe>
                                        </div>
                                    ) : '')}
                            </section>
                        </div> 
                    }      
                </Context.Consumer>
            );
        }
    }

export default ListenPage;