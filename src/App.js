import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import AccountPage from './AccountPage/AccountPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import ProfilePage from './ProfilePage/ProfilePage';
import LandingPage from './LandingPage/LandingPage';
import WatchPage from './WatchPage/WatchPage';
import ListenPage from './ListenPage/ListenPage';
import ShowsPage from './ShowsPage/ShowsPage';
import SignUpPage from './SignUpPage/SignUpPage';
import SideDrawer from './SideDrawer/SideDrawer';

import Context from './Contexts/Context';
import config from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authToken: false,

      users: [],

      videos: [],

      songs: [],

      contents: {
        image: '',
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        soundcloud: '',
        bandcamp: '',
        email: ''
      },

      link: {
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        soundcloud: '',
        bandcamp: '',
        email: ''
      },

      shows: [],

      emails: [],

      sideDrawerOpen: false,

      links: {
        home: 'Home',
        profile: 'Profile',
        watch: 'Watch',
        listen: 'Listen',
        shows: 'Shows',
        signup: 'Mailing List'
      },

      addNewUser: user => {
        fetch(`${config.API_ENDPOINT}/api/users`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ user })
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({ users: [...this.state.users, res] });
          })
          .catch(err => console.log(err));
      },

      updateUser: (content, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/users`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PATCH',
          body: JSON.stringify({ content, user_id })
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({ contents: [...this.state.contents, res] });
          })
          .catch(err => console.log(err));
      },

      addNewVideo: (video, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/videos`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ video, user_id })
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({ videos: [...this.state.videos, res] });
          })
          .catch(err => console.log(err));
      },

      handleDeleteVideo: (videoId, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/videos/${videoId}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE',
          body: JSON.stringify(videoId, user_id)
        })
          .then(res => {
            if (!res.ok) return res.json().then(e => Promise.reject(e));
            return true;
          })
          .then(deletedVideo => {
            this.setState({
              videos: this.state.videos.filter(video => video.id !== videoId)
            });
          });
      },

      addNewSong: (song, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/songs`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            song,
            user_id
          })
        })
          .then(res => res.json())
          .then(res => {
            this.setState({ songs: [...this.state.songs, res] });
          })
          .catch(err => console.log(err));
      },

      handleDeleteSong: (songId, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/songs/${songId}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE',
          body: JSON.stringify(songId, user_id)
        })
          .then(res => {
            if (!res.ok) return res.json().then(e => Promise.reject(e));
            return true;
          })
          .then(deletedSong => {
            this.setState({
              songs: this.state.songs.filter(song => song.id !== songId)
            });
          });
      },

      addNewShow: (show, user_id = '1') => {
        show.user_id = user_id;
        fetch(`${config.API_ENDPOINT}/api/shows`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ show, user_id })
        })
          .then(res => res.json())
          .then(res => {
            this.setState({ shows: [...this.state.shows, res] });
          })
          .catch(err => console.log(err));
      },

      handleDeleteShow: (showId, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/shows/${showId}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'DELETE',
          body: JSON.stringify(showId, user_id)
        })
          .then(res => {
            if (!res.ok) return res.json().then(e => Promise.reject(e));
            return true;
          })
          .then(deletedShow => {
            this.setState({
              shows: this.state.shows.filter(show => show.id !== showId)
            });
          });
      },

      addNewEmail: (email, user_id = '1') => {
        fetch(`${config.API_ENDPOINT}/api/emails`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ email, user_id })
        })
          .then(res => {
            this.setState({ emails: [...this.state.emails, res] });
          })
          .catch(err => console.log(err));
      },

      signUp: (e, cb) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        window.localStorage.setItem('authToken', true);
        this.setState({ authToken: true });
        cb();
      },

      login: (e, cb) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        window.localStorage.setItem('authToken', true);
        this.setState({ authToken: true });
        cb();
      },

      logout: (e, cb) => {
        e.preventDefault();
        window.localStorage.removeItem('authToken');
        this.setState({ authToken: false });
        cb();
      },

      // addNewImage: image => {
      //   const { value } = image;
      //   const newImage = { value };
      //   this.setState({ images: [...this.state.images, newImage] });
      // },

      // addNewLink: link => {
      //   this.setState({ link });
      // },

      // updateLink: (link, url) => {
      //   const links = this.state.link;
      //   links[link] = url;
      //   this.setState({ link: links });
      // },

      drawerClickHandler: () => {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
      }
    };
  }

  componentDidMount() {
    this.setState({
      authToken: window.localStorage.getItem('authToken')
    });

    let urls = [
      `${config.API_ENDPOINT}/api/users`,
      `${config.API_ENDPOINT}/api/shows`,
      `${config.API_ENDPOINT}/api/songs`,
      `${config.API_ENDPOINT}/api/videos`
    ];

    Promise.all(
      urls.map(url =>
        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(error => Promise.reject(error));
            }
            return res.json();
          })
          .then(data => {
            return data;
          })
          .catch(error => {
            this.setState({ error });
          })
      )
    ).then(data => {
      this.setState({
        contents: data[0],
        shows: data[1],
        songs: data[2],
        videos: data[3]
      });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App" style={{ height: '100%' }}>
          <header className="App-Header">
            <Route path="/" component={NavBar} />
            {this.state.sideDrawerOpen ? <SideDrawer /> : ''}
          </header>
          <main className="Header">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/watch" component={WatchPage} />
            <Route exact path="/listen" component={ListenPage} />
            <Route exact path="/shows" component={ShowsPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </main>
          <footer>
            <Route path="/" component={Footer} />
          </footer>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
