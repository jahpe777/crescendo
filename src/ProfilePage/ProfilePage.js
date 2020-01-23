import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Context from '../Contexts/Context';
import './ProfilePage.css';

class ProfilePage extends Component {

    static contextType = Context;

    constructor(props){
        super(props);

        if(!window.localStorage.getItem('authToken')){
            this.props.history.push('/');
        }
    }

    showsHandleSubmit = e => {
        e.preventDefault();
        const show = {
            date: e.target.date.value, 
            venue: e.target.venue.value, 
            city: e.target.city.value
        }
        this.context.addNewShow(show);
        e.target.reset();
    }

    youtubehandleSubmit = e => {
        e.preventDefault();
        const newVideo = e.target.bandVideo.value;
        if(!newVideo.includes('youtube')){
            alert('Only YouTube URL links are valid');
        } else {
            this.context.addNewVideo(newVideo);
            e.target.reset();
        }
    }

  render() {
    return (
      <div className='profilePage'>
        <section className='image-profilePage'>
            <h1 className='profile'>Profile</h1>
            <h2>Spanish Prisoners</h2>

            <h3>Submit an image of your music project to get started</h3>
            <form 
                className='band-image-form' 
                ref={ form => this.form = form } 
                onSubmit={ this.handleSubmit }
            >
                <p><label htmlFor='bandImage'>Image: </label>
                    <input placeholder='Spanish Prisoners' type='bandImage' required name='bandImage' id='bandImage' /></p>

                <p><button className='bandImage-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit YouTube links to your music project's videos</h3>
            <form onSubmit={e=>this.youtubeHandleSubmit(e)}>
                className='band-video-form' 
                ref={ form => this.form = form } 
                onSubmit={ this.handleSubmit }
            >
                <p><label htmlFor='bandVideo'>Videos: </label>
                    <input placeholder='https://www.youtube.com/watch?v=0Xv3eTfjMT4' type='bandVideo' required name='bandVideo' id='bandVideo' /></p>

                <p><button className='bandVideo-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit Bandcamp links to your music project's audio</h3>
            <form 
                className='band-audio-form' 
                ref={ form => this.form = form } 
                onSubmit={ this.handleSubmit }
            >
                <p><label htmlFor='bandAudio'>Audio: </label>
                    <input placeholder='https://spanishprisoners.bandcamp.com/track/slow-decay' type='bandAudio' required name='bandAudio' id='bandAudio' /></p>

                <p><button className='bandAudio-button' type='submit'>Submit</button></p>
            </form>

            <div className='showsPage'>
                <h3>Submit your music project's upcoming shows</h3>
                    <form onSubmit={e=>this.showsHandleSubmit(e)}>
                        <input className='showsAdmin' type="date" name="date" placeholder="date" aria-label="date"/>
                        <input className='showsAdmin' type="text" name="venue" placeholder="Venue Name (ex. Staples Center)" aria-label="venue name"/>
                        <input className='showsAdmin' type="text" name="city" placeholder="Venue City, State (ex. Los Angeles, CA)" aria-label="venue city"/>
                        <p><button className='showsAdmin-button' type='submit'>Submit</button></p>
                    </form>
                    {/* <section className='image-showspage'>
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
                        )})} */}
                    {/* </section> */}
            </div>

            <h3>Submit social media links for your music project</h3>
            <form 
                className='band-social-form' 
                ref={ form => this.form = form } 
                onSubmit={ this.handleSubmit }
            >
                <p><label htmlFor='bandSocial'>Social: </label>
                    <input placeholder='https://www.facebook.com/spanishprisoners/' type='bandSocial' required name='bandSocial' id='bandSocial' /></p>

                <p><button className='bandSocial-button' type='submit'>Submit</button></p>
            </form>
              
            <div class='band-home-button'>
                <section>
                    <h3>Click below to go to your home page</h3>
                    <Link to='/home' type='submit'>
                        <p><button className='bandHome-button' type='submit'>View your website!</button></p>
                    </Link>
                </section>
            </div>
        </section>
      </div>
    );
  }
}

export default ProfilePage;