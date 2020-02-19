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

import Context from './Contexts/Context';
import config from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authToken: false,

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

      subscribers: [],

      addNewShow: show => {
        fetch(`${config.API_ENDPOINT}/api/shows`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ show })
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.setState({ shows: [...this.state.shows, res] });
          })
          .catch(err => console.log(err));
      },

      addNewEmail: email => {
        fetch(`${config.API_ENDPOINT}/api/emails`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ email })
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

      addNewVideo: video => {
        const { value } = video;
        const newVideo = { value };
        this.setState({ videos: [...this.state.videos, newVideo] });
      },

      addNewSong: song => {
        const { value } = song;
        const newSong = { value };
        this.setState({ songs: [...this.state.songs, newSong] });
      },

      addNewShow: show => {
        const { date, venue, city } = show;
        const newShow = { id: uuidv4(), date, venue, city };
        this.setState({ shows: [...this.state.shows, newShow] });
      },

      addNewLink: link => {
        this.setState({ link });
      },

      updateLink: (link, url) => {
        const links = this.state.link;
        links[link] = url;
        this.setState({ link: links });
      },

      addNewSubscriber: email => {
        const newSubscriber = { id: uuidv4(), email, emailDate: new Date() };
        this.setState({
          subscribers: [...this.state.subscribers, newSubscriber]
        });
      }
    };
  }

  componentDidMount() {
    this.setState({
      authToken: window.localStorage.getItem('authToken')
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <header className="App-Header">
            <Route path="/" component={NavBar} />
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
