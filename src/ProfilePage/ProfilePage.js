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

        this.state = {
            audioHelp: false
        }
    }

    imagesHandleSubmit = e => {
        e.preventDefault();
        const image = {
            value: e.target.bandImage.value
        }
        if(image.value.includes('jpg' || 'png')) {
            this.context.addNewImage(image);
            e.target.reset();
        } else {
            alert('Only valid image links (jpg, png) are allowed');
        }
    }
    

    videosHandleSubmit = e => {
        e.preventDefault();
        const video = {
            value: e.target.bandVideo.value,
        }
        if(video.value.includes('youtube')) {
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
        if(song.value.includes('bandcamp')) {
            this.context.addNewSong(song);
            e.target.reset();
        } else {
            alert('Only Bandcamp URL links are valid');
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
            email: e.target.email.value!='' ? 'mailto:'+e.target.email.value : '',
        }
       
            this.context.addNewLink(link);
            e.target.reset();
        
    }

  render() {
      const {link} = this.context;
    return (
      <div className='profilePage'>
        <section className='image-profilePage'>
            <h1 className='profile'>Profile</h1>
            <h2>Spanish Prisoners</h2>
        
            <h3>Submit an image of your music project</h3>
            <form 
                className='band-form' 
                ref={ form => this.form = form } 
                onSubmit={ e => this.imagesHandleSubmit(e) }
            >
                <p><label htmlFor='bandImage'>Image: </label>
                    <input placeholder='https://d.newsweek.com/en/full/256665/walkmen.jpg' type='text' required name='bandImage' id='bandImage' /></p>

                <p><button className='bandImage-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit YouTube links for your music project</h3>
            <form 
                className='band-form' 
                ref={ form => this.form = form } 
                onSubmit = { e => this.videosHandleSubmit(e) }
            >
                <p><label htmlFor='bandVideo'>Videos: </label>
                    <input placeholder='https://www.youtube.com/watch?v=0Xv3eTfjMT4' type='text' required name='bandVideo' id='bandVideo' /></p>

                <p><button className='bandVideo-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit Bandcamp embedded links for your music project</h3>
            <form 
                className='band-form' 
                ref={ form => this.form = form } 
                onSubmit={ e => this.songsHandleSubmit(e) }
            >
                <p><label htmlFor='bandAudio'>Audio: </label>
                    <input placeholder='https://bandcamp.com/EmbeddedPlayer/track=77723839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' type='text' required name='bandAudio' id='bandAudio' /></p>

                <p>
                    <a href="/audiohelp" onClick = { e => { 
                    e.preventDefault();
                    this.setState({ audioHelp: !this.state.audioHelp })
                    }}>
                    {this.state.audioHelp ? 'Hide Help' : 'Show Help'}</a>
                </p>

                <div className = { `show-audio-help-${ this.state.audioHelp }` }>
                    <p>Here is some helpful information</p>
                </div>

                <p><button className='bandAudio-button' type='submit'>Submit</button></p>
            </form>

            <h3>Submit your music project's upcoming shows</h3>
            <form 
                className='band-form'
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
                className='band-form' 
                ref={ form => this.form = form } 
            >
                <p><label htmlFor='bandSocial-Facebook'>Facebook: </label>
                    <input placeholder='https://www.facebook.com/spanishprisoners/' type='text' name='facebook' id='bandSocial-Facebook' onChange={e=>this.context.updateLink('facebook',e.target.value)} value={link.facebook} /></p>

                <p><label htmlFor='bandSocial-Twitter'>Twitter: </label>
                    <input placeholder='https://twitter.com/Ghost_Pavilion' type='text' name='twitter' id='bandSocial-Twitter' onChange={e=>this.context.updateLink('twitter',e.target.value)} value={link.twitter} /></p>

                <p><label htmlFor='bandSocial-Instagram'>Instagram: </label>
                    <input placeholder='https://www.instagram.com/ghost_pavilion/' type='text' name='instagram' id='bandSocial-Instagram' onChange={e=>this.context.updateLink('instagram',e.target.value)} value={link.instagram} /></p>

                <p><label htmlFor='bandSocial-YouTube'>YouTube: </label>
                    <input placeholder='https://www.youtube.com/channel/UCgUEdKWijDmFnR0rTKA42Vg' type='text' name='youtube' id='bandSocial-YouTube' onChange={e=>this.context.updateLink('youtube',e.target.value)} value={link.youtube} /></p>

                <p><label htmlFor='bandSocial-SoundCloud'>SoundCloud: </label>
                    <input placeholder='https://soundcloud.com/spanish-prisoners' type='text' name='soundcloud' id='bandSocial-SoundCloud' onChange={e=>this.context.updateLink('soundcloud',e.target.value)} value={link.soundcloud} /></p>

                <p><label htmlFor='bandSocial-Bandcamp'>Bandcamp: </label>
                    <input placeholder='https://spanishprisoners.bandcamp.com/' type='text' name='bandcamp' id='bandSocial-Bandcamp' onChange={e=>this.context.updateLink('bandcamp',e.target.value)} value={link.bandcamp} /></p>

                <p><label htmlFor='bandSocial-Email'>Email: </label>
                    <input placeholder='spanishprisoners@gmail.com' type='text' name='email' id='band-Email' onChange={e=>this.context.updateLink('email',`mailto:${e.target.value}`)} value={link.email.replace("mailto:","")} /></p>
                <p>Links update on change</p>
            </form>
              
            <div className='band-home-button'>
                <section>
                    <h3>Click below to go to your home page</h3>
                    <Link to='/home' type='submit'>
                        <button className='bandHome-button' type='submit'>View your website!</button>
                    </Link>
                </section>
            </div>
        </section>
      </div>
    );
  }
}

export default ProfilePage;