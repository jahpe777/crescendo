import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Context from '../Contexts/Context';
import './ProfilePage.css';

class ProfilePage extends Component {

    static contextType = Context;

    constructor(props){
        super(props);

        if(!window.localStorage.getItem('authToken')) {
            this.props.history.push('/');
        }
    }

    imagesHandleSubmit = e => {
        e.preventDefault();
        const image = {
            value: e.target.bandImage.value
        }
        if(!image.includes('https')) {
            alert('Only valid URL links are allowed');
        } else {
            this.context.addNewImage(image);
            e.target.reset();
        }
    }

    videosHandleSubmit = e => {
        e.preventDefault();
        const video = {
            value: e.target.bandVideo.value,
        }
        if (e.target.bandVideo.value.includes('youtube')) {
            this.context.addNewVideo(video);
            e.target.reset();
        } else {
            alert('Only YouTube URL links are valid');
        }
    }

    songsHandleSubmit = e => {
        e.preventDefault();
        const song = {
            value: e.target.bandAudio.value,
        }
        if(!song.includes('bandcamp')) {
            alert('Only Bandcamp URL links are valid');
        } else {
            this.context.addNewSong(song);
            e.target.reset();
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

    linkshandleSubmit = e => {
        e.preventDefault();
        const link = {
            facebook: e.target.facebook.value, 
            twitter: e.target.twitter.value, 
            instagram: e.target.instagram.value,
            youtube: e.target.youtube.value, 
            soundcloud: e.target.soundcloud.value, 
            bandcamp: e.target.bandcamp.value,
            email: e.target.email.value,
        }
        if(!link.includes('facebook' || 'twitter' || 'instagram' || 'youtube' || 'soundcloud' || 'bandcamp' || '@')) {
            alert('Only URL links from (Facebook, Twitter, Instagram, YouTube, Soundcloud, Bandcamp, Email) are valid');
        } else {
            this.context.addNewLink(link);
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
                onSubmit={ e => this.imagesHandleSubmit(e) }
            >
                <p><label htmlFor='bandImage'>Image: </label>
                    <input placeholder='https://d.newsweek.com/en/full/256665/walkmen.jpg' type='bandImage' required name='bandImage' id='bandImage' /></p>

                <p><button className='bandImage-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit YouTube links to your music project's videos</h3>
            <form 
                className='band-video-form' 
                ref={ form => this.form = form } 
                onSubmit = { e => this.videosHandleSubmit(e) }
            >
                <p><label htmlFor='bandVideo'>Videos: </label>
                    <input placeholder='https://www.youtube.com/watch?v=0Xv3eTfjMT4' type='bandVideo' required name='bandVideo' id='bandVideo' /></p>

                <p><button className='bandVideo-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit Bandcamp links to your music project's audio</h3>
            <form 
                className='band-audio-form' 
                ref={ form => this.form = form } 
                onSubmit={ e => this.songsHandleSubmit(e) }
            >
                <p><label htmlFor='bandAudio'>Audio: </label>
                    <input placeholder='https://spanishprisoners.bandcamp.com/track/slow-decay' type='bandAudio' required name='bandAudio' id='bandAudio' /></p>

                <p><button className='bandAudio-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit your music project's upcoming shows</h3>
            <form 
                className='band-show-form'
                ref={ form => this.form = form } 
                onSubmit = { e => this.showsHandleSubmit(e) }
            >
                <input className='showsAdmin' type="date" name="date" placeholder="date" aria-label="date"/>
                <input className='showsAdmin' type="text" name="venue" placeholder="Venue Name (ex. Staples Center)" aria-label="venue name"/>
                <input className='showsAdmin' type="text" name="city" placeholder="Venue City, State (ex. Los Angeles, CA)" aria-label="venue city"/>
                <p><button className='showsAdmin-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit social media links for your music project</h3>
            <form 
                className='band-social-form' 
                ref={ form => this.form = form } 
                onSubmit={ e => this.linkshandleSubmit(e) }
            >
                <p><label htmlFor='bandSocial-Facebook'>Facebook: </label>
                    <input placeholder='https://www.facebook.com/spanishprisoners/' type='bandSocial-Facebook' name='facebook' id='bandSocial-Facebook' /></p>

                <p><label htmlFor='bandSocial-Twitter'>Twitter: </label>
                    <input placeholder='https://twitter.com/Ghost_Pavilion' type='bandSocial-Twitter' name='twitter' id='bandSocial-Twitter' /></p>

                <p><label htmlFor='bandSocial-Instagram'>Instagram: </label>
                    <input placeholder='https://www.instagram.com/ghost_pavilion/' type='bandSocial-Instagram' name='instagram' id='bandSocial-Instagram' /></p>

                <p><label htmlFor='bandSocial-YouTube'>YouTube: </label>
                    <input placeholder='https://www.youtube.com/channel/UCgUEdKWijDmFnR0rTKA42Vg' type='bandSocial-YouTube' name='youtube' id='bandSocial-YouTube' /></p>

                <p><label htmlFor='bandSocial-SoundCloud'>SoundCloud: </label>
                    <input placeholder='https://soundcloud.com/spanish-prisoners' type='bandSocial-SoundCloud' name='soundcloud' id='bandSocial-SoundCloud' /></p>

                <p><label htmlFor='bandSocial-Bandcamp'>Bandcamp: </label>
                    <input placeholder='https://spanishprisoners.bandcamp.com/' type='bandSocial-Bandcamp' name='bandcamp' id='bandSocial-Bandcamp' /></p>

                <p><label htmlFor='bandSocial-Email'>Email: </label>
                    <input placeholder='spanishprisoners@gmail.com' type='bandSocial-Email' name='email' id='band-Email' /></p>

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