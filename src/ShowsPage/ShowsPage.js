import React, { Component } from 'react';
import './ShowsPage.css';
import BandContext from '../Context/BandContext';

class ShowsPage extends Component {
    static contextType = BandContext;

    render() {
        return (
            <div className='showspage'>
                <section className='image-showspage'>
                    {this.context.shows.map(show => {
                        const d = new Date(show.date);
                        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        return (
                        <div key={ show.id }> 
                            <h3>{ `${ months[d.getMonth()] } ${ d.getDate() }, ${ d.getFullYear() }` }</h3>
                            <h6>{ show.city }</h6>
                            <h6>{ show.venue }</h6>
                            <br/>
                        </div>
                    )})}
                </section>
            </div>
            ) 
        }
    }

export default ShowsPage;