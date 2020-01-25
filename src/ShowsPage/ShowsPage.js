import React, { Component } from 'react';
import './ShowsPage.css';
import Context from '../Contexts/Context';

class ShowsPage extends Component {

    static contextType = Context;

    render() {
        return (
            <Context.Consumer>
                {(value) => (
                    <div className='showspage'>
                        <section className='image-showspage'>
                            { this.context.shows.map(show => (
                                <div key={ show.id }> 
                                    <h3>{ show.venue }</h3>
                                    <h3>{ show.date }</h3>
                                    <h3>{ show.city }</h3>
                                    <br/>
                                </div>
                            ))}
                        </section>
                    </div>
                )}  
            </Context.Consumer>
            ); 
        }
    }

export default ShowsPage;