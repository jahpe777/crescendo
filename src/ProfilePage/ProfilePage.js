import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Contexts/Context';
import './ProfilePage.css';
import { withRouter } from 'react-router';

class ProfilePage extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);

    if (!window.localStorage.getItem('authToken')) {
      this.props.history.push('/');
    }

    this.state = {
      imageHelp: false,
      audioHelp: false,
      videoHelp: false,
      showHelp: false,
      linkHelp: false
    };
  }

  imagesHandleSubmit = e => {
    e.preventDefault();
    const newImage = { image: e.target.bandImage.value };
    if (newImage.image.includes('jpg' || 'png')) {
      this.context.updateUser(newImage);
      e.target.reset();
    } else {
      alert('Only valid image links (jpg, png) are allowed');
    }
  };

  videosHandleSubmit = e => {
    e.preventDefault();
    const newVideo = { video: e.target.bandVideo.value };
    if (newVideo.video.includes('youtube')) {
      this.context.addNewVideo(newVideo);
      e.target.reset();
    } else {
      alert('Only YouTube URL links are valid');
    }
  };

  videosClickDelete = (e, videoId) => {
    e.preventDefault();
    this.context.handleDeleteVideo(videoId);
  };

  songsHandleSubmit = e => {
    e.preventDefault();
    const newSong = { song: e.target.bandAudio.value };
    if (newSong.song.includes('bandcamp')) {
      this.context.addNewSong(newSong);
      e.target.reset();
    } else {
      alert('Only Bandcamp URL links are valid');
    }
  };

  songsClickDelete = (e, songId) => {
    e.preventDefault();
    this.context.handleDeleteSong(songId);
  };

  showsHandleSubmit = e => {
    e.preventDefault();
    const newShow = {
      date: e.target.date.value,
      venue: e.target.venue.value,
      city: e.target.city.value
    };
    this.context.addNewShow(newShow);
    e.target.reset();
  };

  showsClickDelete = (e, showId) => {
    e.preventDefault();
    this.context.handleDeleteShow(showId);
  };

  linksHandleSubmit = e => {
    e.preventDefault();
    const newLink = {
      facebook: e.target.facebook.value,
      twitter: e.target.twitter.value,
      instagram: e.target.instagram.value,
      youtube: e.target.youtube.value,
      soundcloud: e.target.soundcloud.value,
      bandcamp: e.target.bandcamp.value,
      contact_email:
        e.target.contact_email.value !== ''
          ? 'mailto:' + e.target.contact_email.value
          : ''
    };
    this.context.updateUser(newLink);
    e.target.reset();
  };

  render() {
    return (
      <div className="profilePage">
        <section className="image-profilePage">
          <h1 className="profile">Profile</h1>

          <h3>Submit an image of your music project</h3>
          <form
            className="band-form"
            ref={form => (this.form = form)}
            onSubmit={e => this.imagesHandleSubmit(e)}
          >
            <p>
              <label htmlFor="bandImage">Image: </label>
              <input
                placeholder="https://d.newsweek.com/en/full/256665/walkmen.jpg"
                type="text"
                required
                name="bandImage"
                id="bandImage"
                defaultValue={this.context.userProfile.image}
              />
            </p>

            <p>
              <a
                href="/imagehelp"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ imageHelp: !this.state.imageHelp });
                }}
              >
                {this.state.imageHelp ? 'Hide Help' : 'Show Help'}
              </a>
            </p>

            <div className={`show-help-${this.state.imageHelp}`}>
              <ul className="help">
                <li className="help-li">
                  Enter in an image URL (jpg or png) to submit
                </li>
                <li className="help-li">
                  The image you submit will be the cover image of your website
                </li>
                <li className="help-li">
                  You may replace your initial image with a new image
                </li>
                <li className="help-li">
                  Clicking on this image will link to your "Listen" page
                </li>
              </ul>
            </div>

            <p>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </p>
          </form>

          <div className="homePage">
            <section>
              <Link to="/listen">
                <div>
                  {this.context.userProfile.image !== '' ? (
                    <img
                      className="image-homePage"
                      src={this.context.userProfile.image}
                      alt="The Band"
                    />
                  ) : (
                    ''
                  )}
                </div>
              </Link>
            </section>
          </div>

          <h3>Submit YouTube embedded links for your music project</h3>
          <form
            className="band-form"
            ref={form => (this.form = form)}
            onSubmit={e => this.videosHandleSubmit(e)}
          >
            <p>
              <label htmlFor="bandVideo">Videos: </label>
              <input
                placeholder="https://www.youtube.com/embed/IFEmb8PNuGI"
                type="text"
                required
                name="bandVideo"
                id="bandVideo"
              />
            </p>

            <p>
              <a
                href="/videohelp"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ videoHelp: !this.state.videoHelp });
                }}
              >
                {this.state.videoHelp ? 'Hide Help' : 'Show Help'}
              </a>
            </p>

            <div className={`show-help-${this.state.videoHelp}`}>
              <ul className="help">
                <li className="help-li">
                  Go to your YouTube video you want to link
                </li>
                <li className="help-li">Click on the "Share" link</li>
                <li className="help-li">Click on "Embed"</li>
                <li className="help-li">
                  Copy the "src" portion of the embed link -
                  src="https://bandcamp.com/EmbeddedPlayer/track=77723839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                </li>
                <li className="help-li">
                  Paste this portion of the link (delete "src" and the quotes)
                  within the form above and click "Submit"
                </li>
              </ul>
            </div>

            <p>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </p>
          </form>

          <Context.Consumer>
            {value => (
              <div className="watchpage">
                <section>
                  {this.context.videos.map(video => (
                    <div key={video.id}>
                      <iframe
                        className="videos"
                        title="newVideo"
                        width="46.3%"
                        height="473"
                        src={video.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div>
                        <button
                          className="delete"
                          type="button"
                          onClick={e => this.videosClickDelete(e, video.id)}
                        >
                          <i></i>
                          {''}
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            )}
          </Context.Consumer>

          <h3>Submit Bandcamp embedded links for your music project</h3>
          <form
            className="band-form"
            ref={form => (this.form = form)}
            onSubmit={e => this.songsHandleSubmit(e)}
          >
            <p>
              <label htmlFor="bandAudio">Songs: </label>
              <input
                placeholder="https://bandcamp.com/EmbeddedPlayer/track=77723839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                type="text"
                required
                name="bandAudio"
                id="bandAudio"
              />
            </p>

            <p>
              <a
                href="/audiohelp"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ audioHelp: !this.state.audioHelp });
                }}
              >
                {this.state.audioHelp ? 'Hide Help' : 'Show Help'}
              </a>
            </p>

            <div className={`show-help-${this.state.audioHelp}`}>
              <ul className="help">
                <li className="help-li">Go to your Bandcamp account</li>
                <li className="help-li">
                  Click on track or album that you want to link
                </li>
                <li className="help-li">Click on the "Share/Embed" link</li>
                <li className="help-li">Click on "Embed this track"</li>
                <li className="help-li">
                  Within the "Select a style" prompt, click on the largest style
                  option
                </li>
                <li className="help-li">
                  Copy the "src" portion of the embed link -
                  src="https://bandcamp.com/EmbeddedPlayer/track=77723839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                </li>
                <li className="help-li">
                  Paste this portion of the link (delete "src" and the quotes)
                  within the form above and click "Submit"
                </li>
              </ul>
            </div>

            <p>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </p>
          </form>

          <Context.Consumer>
            {value => (
              <div className="listenpage">
                <section>
                  {this.context.songs.map(song => (
                    <div key={song.id}>
                      <iframe
                        title="bandcamp alum"
                        border="0"
                        width="350px"
                        height="470px"
                        src={song.song}
                      ></iframe>
                      <div>
                        <button
                          className="delete"
                          type="button"
                          onClick={e => this.songsClickDelete(e, song.id)}
                        >
                          <i></i>
                          {''}
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            )}
          </Context.Consumer>

          <h3>Submit your music project's upcoming shows</h3>
          <form
            className="band-form"
            ref={form => (this.form = form)}
            onSubmit={e => this.showsHandleSubmit(e)}
          >
            <input
              className="showsAdmin"
              type="date"
              name="date"
              placeholder="date"
              aria-label="date"
            />
            <input
              className="showsAdmin"
              type="text"
              name="venue"
              placeholder="Venue Name (ex. Staples Center)"
              aria-label="venue name"
            />
            <input
              className="showsAdmin"
              type="text"
              name="city"
              placeholder="Venue City, State (ex. Los Angeles, CA)"
              aria-label="venue city"
            />
            <p>
              <a
                href="/showhelp"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showHelp: !this.state.showHelp });
                }}
              >
                {this.state.showHelp ? 'Hide Help' : 'Show Help'}
              </a>
            </p>

            <div className={`show-help-${this.state.showHelp}`}>
              <ul className="help">
                <li className="help-li">Enter upcoming shows</li>
                <li className="help-li">
                  You may enter in a date (following the format shown) or pick a
                  date from the calender (down arrow on the right side of the
                  entry form)
                </li>
                <li className="help-li">
                  Enter in venue name and venue city,state (following the format
                  shown)
                </li>
              </ul>
            </div>

            <p>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </p>
          </form>

          <Context.Consumer>
            {value => (
              <div className="showspage">
                <section className="image-showspage">
                  {this.context.shows.map(show => (
                    <div>
                      <div key={show.id}>
                        <h3>{show.venue}</h3>
                        <h3>{show.date}</h3>
                        <h3>{show.city}</h3>
                        <br />
                      </div>
                      <div>
                        <button
                          className="delete"
                          type="button"
                          onClick={e => this.showsClickDelete(e, show.id)}
                        >
                          <i></i>
                          {''}
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            )}
          </Context.Consumer>

          <h3>Submit social media links for your music project</h3>
          <form
            className="band-form"
            ref={form => (this.form = form)}
            onSubmit={e => this.linksHandleSubmit(e)}
          >
            <p>
              <label htmlFor="bandSocial-Facebook">Facebook: </label>
              <input
                placeholder="https://www.facebook.com/spanishprisoners/"
                type="text"
                name="facebook"
                id="bandSocial-Facebook"
                defaultValue={this.context.userProfile.facebook}
              />
            </p>

            <p>
              <label htmlFor="bandSocial-Twitter">Twitter: </label>
              <input
                placeholder="https://twitter.com/Ghost_Pavilion"
                type="text"
                name="twitter"
                id="bandSocial-Twitter"
                defaultValue={this.context.userProfile.twitter}
              />
            </p>

            <p>
              <label htmlFor="bandSocial-Instagram">Instagram: </label>
              <input
                placeholder="https://www.instagram.com/ghost_pavilion/"
                type="text"
                name="instagram"
                id="bandSocial-Instagram"
                defaultValue={this.context.userProfile.instagram}
              />
            </p>

            <p>
              <label htmlFor="bandSocial-YouTube">YouTube: </label>
              <input
                placeholder="https://www.youtube.com/channel/UCgUEdKWijDmFnR0rTKA42Vg"
                type="text"
                name="youtube"
                id="bandSocial-YouTube"
                defaultValue={this.context.userProfile.youtube}
              />
            </p>

            <p>
              <label htmlFor="bandSocial-SoundCloud">SoundCloud: </label>
              <input
                placeholder="https://soundcloud.com/spanish-prisoners"
                type="text"
                name="soundcloud"
                id="bandSocial-SoundCloud"
                defaultValue={this.context.userProfile.soundcloud}
              />
            </p>

            <p>
              <label htmlFor="bandSocial-Bandcamp">Bandcamp: </label>
              <input
                placeholder="https://spanishprisoners.bandcamp.com/"
                type="text"
                name="bandcamp"
                id="bandSocial-Bandcamp"
                defaultValue={this.context.userProfile.bandcamp}
              />
            </p>
            <p>
              <label htmlFor="bandSocial-Email">Email: </label>
              <input
                placeholder="spanishprisoners@gmail.com"
                type="text"
                name="contact_email"
                id="band-Email"
                defaultValue={this.context.userProfile.contact_email.replace(
                  'mailto:',
                  ''
                )}
              />
            </p>

            <p>
              <a
                href="/linkhelp"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ linkHelp: !this.state.linkHelp });
                }}
              >
                {this.state.linkHelp ? 'Hide Help' : 'Show Help'}
              </a>
            </p>

            <div className={`show-help-${this.state.linkHelp}`}>
              <ul className="help">
                <li className="help-li">
                  Enter in social media links and a contact email
                </li>
                <li className="help-li">
                  You may leave specific links and contact email empty
                </li>
                <li className="help-li">
                  You may replace your initial links and contact email with new
                  links/email or erase links within the form to delete links
                </li>
                <li className="help-li">
                  Links will be displayed as icons on the bottom of every page
                </li>
              </ul>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>

          <div className="band-home-button">
            <section>
              <h3>Click below to go to your home page</h3>
              <Link to="/home" type="submit">
                <button className="bandHome-button" type="submit">
                  View your website!
                </button>
              </Link>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
