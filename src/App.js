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

      images: [],

      videos: [],

      songs: [],

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
            console.log('yayayay', song, res);
          })
          .catch(err => console.log(err));
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

      addNewImage: image => {
        const { value } = image;
        const newImage = { value };
        this.setState({ images: [...this.state.images, newImage] });
      },

      addNewLink: link => {
        this.setState({ link });
      },

      updateLink: (link, url) => {
        const links = this.state.link;
        links[link] = url;
        this.setState({ link: links });
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
    // need to fetch the BE to get all shows from the database
    fetch(`${config.API_ENDPOINT}/api/shows`, {
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
      .then(shows => {
        // still do this step
        this.setState({ shows });
      })
      .catch(error => {
        this.setState({ error });
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
