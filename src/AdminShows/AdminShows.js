import React, { Component } from 'react';
import BandContext from '../Context/BandContext';
import './AdminShows.css';

class AdminShows extends Component {
    static contextType = BandContext;

    constructor(props){
        super(props);

        if(!window.localStorage.getItem('loggedIn')){
            this.props.history.push('/');
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const newShow = {
            date: e.target.date.value, 
            venue: e.target.venue.value, 
            city: e.target.city.value
        }
        this.context.addNewShow(newShow);
        e.target.reset();
    }

    render() {
        return (
            <div className='showsPage'>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <input className='showsAdmin' type="date" name="date" placeholder="date" aria-label="date"/>
                    <input className='showsAdmin' type="text" name="venue" placeholder="Venue Name (ex. Staples Center)" aria-label="venue name"/>
                    <input className='showsAdmin' type="text" name="city" placeholder="Venue City, State (ex. Los Angeles, CA)" aria-label="venue city"/>
                    <input className='showsAdminSubmit' type="submit"/>
                </form>
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

export default AdminShows;