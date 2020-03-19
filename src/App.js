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

import AuthApiService from './Services/auth-api-service';

import Context from './Contexts/Context';
import config from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: {
        push: () => {}
      },

      error: null,

      authToken: false,

      users: [],

      videos: [],

      songs: [],

      userProfile: {
        image: '',
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        soundcloud: '',
        bandcamp: '',
        contact_email: ''
      },

      // link: {
      //   facebook: '',
      //   twitter: '',
      //   instagram: '',
      //   youtube: '',
      //   soundcloud: '',
      //   bandcamp: '',
      //   contact_email: ''
      // },

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

      addNewUser: newUser => {
        fetch(`${config.API_ENDPOINT}/api/users`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(res => {
            this.setState({ users: [...this.state.users, res] });
          })
          .catch(err => console.log(err));
      },

      updateUser: newContent => {
        fetch(`${config.API_ENDPOINT}/api/users`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'PATCH',
          body: JSON.stringify(newContent)
        })
          .then(() => {
            this.setState({
              userProfile: Object.assign(newContent, this.state.userProfile)
            });
          })
          .catch(err => console.log(err));
      },

      addNewVideo: video => {
        fetch(`${config.API_ENDPOINT}/api/videos`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'POST',
          body: JSON.stringify(video)
        })
          .then(res => res.json())
          .then(res => {
            this.setState({ videos: [...this.state.videos, res] });
          })
          .catch(err => console.log(err));
      },

      handleDeleteVideo: videoId => {
        fetch(`${config.API_ENDPOINT}/api/videos/${videoId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'DELETE',
          body: JSON.stringify(videoId)
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

      addNewSong: song => {
        fetch(`${config.API_ENDPOINT}/api/songs`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'POST',
          body: JSON.stringify(song)
        })
          .then(res => res.json())
          .then(res => {
            this.setState({ songs: [...this.state.songs, res] });
          })
          .catch(err => console.log(err));
      },

      handleDeleteSong: songId => {
        fetch(`${config.API_ENDPOINT}/api/songs/${songId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'DELETE',
          body: JSON.stringify(songId)
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

      addNewShow: show => {
        fetch(`${config.API_ENDPOINT}/api/shows`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'POST',
          body: JSON.stringify(show)
        })
          .then(res => res.json())
          .then(res => {
            this.setState({ shows: [...this.state.shows, res] });
          })
          .catch(err => console.log(err));
      },

      handleDeleteShow: showId => {
        fetch(`${config.API_ENDPOINT}/api/shows/${showId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'DELETE',
          body: JSON.stringify(showId)
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

      addNewEmail: email => {
        fetch(`${config.API_ENDPOINT}/api/emails`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.authToken}`
          },
          method: 'POST',
          body: JSON.stringify(email)
        })
          .then(res => {
            this.setState({ emails: [...this.state.emails, res] });
          })
          .catch(err => console.log(err));
      },

      signUp: e => {
        e.preventDefault();

        const { user_email, password } = e.target;

        this.setState({ error: null });
        AuthApiService.postUser({
          user_name: user_email.value,
          password: password.value
        })
          .then(user => {
            user_email.value = '';
            password.value = '';
          })
          .catch(res => {
            this.setState({ error: res.error });
          });

        // const newUser = {
        //   email: e.target.email.value,
        //   password: e.target.password.value
        // };

        // this.addNewUser(newUser);
        // e.target.reset();

        // window.localStorage.setItem('authToken', true);
        // this.setState({ authToken: true });
        // cb();
      },

      login: (e, cb) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        fetch('http://localhost:7000/api/auth/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_email: email, password })
        })
          .then(res => res.json())
          .then(resJson => {
            window.localStorage.setItem('authToken', resJson.authToken);
            this.setState({ authToken: resJson.authToken });
            cb();
          });
      },

      logout: (e, cb) => {
        e.preventDefault();
        window.localStorage.removeItem('authToken');
        this.setState({ authToken: false });
        cb();
      },

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
        // userProfile: data[0][0],
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
