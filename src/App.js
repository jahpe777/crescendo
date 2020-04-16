import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import AccountPage from './AccountPage/AccountPage';
import LoginPage from './LoginPage/LoginPage';
import BandPage from './BandPage/BandPage';
import ProfilePage from './ProfilePage/ProfilePage';
import LandingPage from './LandingPage/LandingPage';
import WatchPage from './WatchPage/WatchPage';
import ListenPage from './ListenPage/ListenPage';
import ShowsPage from './ShowsPage/ShowsPage';
import SignUpPage from './SignUpPage/SignUpPage';
import SideDrawer from './SideDrawer/SideDrawer';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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

      authToken: false,

      error: null,

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

      shows: [],

      emails: [],

      sideDrawerOpen: false,

      links: {
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
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
          },
          method: 'PATCH',
          body: JSON.stringify(newContent)
        })
          .then(res => res)
          .then(() => {
            this.setState({
              userProfile: Object.assign(this.state.userProfile, newContent)
            });
          })
          .catch(err => console.log(err));
      },

      addNewVideo: video => {
        fetch(`${config.API_ENDPOINT}/api/videos`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
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
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
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
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
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
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
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
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
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
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
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

      addNewEmail: (email, band_id) => {
        fetch(`${config.API_ENDPOINT}/api/emails`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
          },
          method: 'POST',
          body: JSON.stringify({ email, band_id })
        })
          .then(res => {
            this.setState({ emails: [...this.state.emails, res] });
          })
          .catch(err => console.log(err));
      },

      signUp: (e, cb) => {
        e.preventDefault();

        const email = e.target.email.value;
        const bandName = e.target.bandName.value;
        const password = e.target.password.value;

        this.setState({ error: null });
        AuthApiService.postUser({
          user_email: email,
          band_name: bandName,
          password
        })
          .then(user => {
            alert('User successfully Created - Now Login');
            cb();
          })
          .catch(res => {
            this.setState({ error: res.error });
          });
      },

      login: (e, cb) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        fetch(`${config.API_ENDPOINT}/api/auth/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_email: email, password })
        })
          .then(res => res.json())
          .then(resJson => {
            window.sessionStorage.setItem('authToken', resJson.authToken);
            this.setState({ authToken: resJson.authToken });
            cb();
          });
      },

      logout: () => {
        window.sessionStorage.removeItem('authToken');
        this.setState(
          {
            authToken: false,
            shows: [],
            emails: [],
            songs: [],
            videos: [],
            users: [],
            userProfile: {
              image: '',
              facebook: '',
              twitter: '',
              instagram: '',
              youtube: '',
              soundcloud: '',
              bandcamp: '',
              contact_email: ''
            }
          },
          () => {
            window.location.reload();
          }
        );
      },

      drawerClickHandler: () => {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
      }
    };
  }

  componentDidMount() {
    this.setState(
      {
        authToken: window.sessionStorage.getItem('authToken')
      },
      () => {
        if (this.state.authToken) {
          let urls = [
            `${config.API_ENDPOINT}/api/users/loggedin`,
            `${config.API_ENDPOINT}/api/shows`,
            `${config.API_ENDPOINT}/api/songs`,
            `${config.API_ENDPOINT}/api/videos`
          ];
          Promise.all(
            urls.map(url =>
              fetch(url, {
                method: 'GET',
                headers: {
                  'content-type': 'application/json',
                  Authorization: `Bearer ${window.sessionStorage.getItem(
                    'authToken'
                  )}`
                }
              })
                .then(res => {
                  if (!res.ok) {
                    if (res.status === 401) {
                      this.state.logout();
                    }
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
              userProfile: data[0],
              shows: data[1],
              songs: data[2],
              videos: data[3]
            });
          });
        }
      }
    );
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
            <Route exact path="/profile" component={ProfilePage} />

            <PrivateRoute exact path="/watch" component={WatchPage} />
            <PrivateRoute exact path="/listen" component={ListenPage} />
            <PrivateRoute exact path="/shows" component={ShowsPage} />
            <PrivateRoute exact path="/signup" component={SignUpPage} />

            <Route path="/site/:bandslug" component={BandPage} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
