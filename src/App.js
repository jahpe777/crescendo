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

import BandContext from './Context/Context';
// import config from './config'

class App extends Component {

  constructor() {
    super();
    this.state = {
      // shows: [],
      // subscribers: [],
      // videos: [
      //   {
      //     id: 1,
      //     date: "Decemeber 12 2019",
      //     venue: 'Los Globos',
      //     city: 'Los Angeles, CA'
      //   },
      //   {
      //     id: 2,
      //     date: "January 10 2020",
      //     venue: 'The Echo',
      //     city: 'Los Angeles, CA' 
      //   },
      //   {
      //     id: 3,
      //     date: "February 12 2020",
      //     venue: 'The Smell',
      //     city: 'Los Angeles, CA'
      //   }
      // ],
      shows: [
        {
          id: 1,
          date: "Decemeber 12 2019",
          venue: 'Los Globos',
          city: 'Los Angeles, CA'
        }
      ],
      subscribers: [
        {
          id: 1,
          email: 'james@gmail.com',
          emailDate: "2019-12-18T00:00:00.000Z",
        }
      ],

      // addNewShow: show => { 
      //   const newShow = { id:uuidv4(), date, venue, city }
      //   this.setState({ shows:[...this.state.shows, newShow ]})
      // },

      // addNewVideo: video => {
      //   const newVideo = { id:uuidv4(), date, venue, city }
      //   this.setState({ shows:[...this.state.shows, newVideo ]})
      // },

      // addNewShow: show => {
      //   fetch(`${config.API_ENDPOINT}/api/shows`, {
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     method: 'POST',
      //     body: JSON.stringify({ show })
      //     // { show } {show:show}
      //     // JSON.stringify(show)
      //   })
      //   .then(res=>res.json())
      //   .then(res => {
      //     console.log(res);
      //     this.setState({ shows:[...this.state.shows, res ]})
      //   })
      //   .catch(err => console.log(err));
      // },

      addNewSubscriber: email => {
        const newSubscriber = { id:uuidv4(), email, emailDate: new Date() }
        this.setState({ subscribers:[...this.state.subscribers, newSubscriber ]})
      }
    }
  }
  //     addNewSubscriber: email => {
  //       fetch(`${config.API_ENDPOINT}/api/emails`, {
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         method: 'POST',
  //         body: JSON.stringify({ email })
  //     })
  //       .then(res => {
  //       this.setState({ subscribers:[...this.state.subscribers, res ]})
  //     })
  //       .catch(err => console.log(err));
  //     }
  //   }
  // }

  componentDidMount() {
  //   // need to fetch the BE to get all shows from the database
  //   fetch(`${config.API_ENDPOINT}/api/shows`, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //     }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         return res.json().then(error => Promise.reject(error))
  //       }
  //       return res.json()
  //     })
  //     .then(shows => {
  //       // still do this step
  //       this.setState({ shows: shows })
  //     })
  //     .catch(error => {
  //       this.setState({ error })
  //     })
  }

  render() {
    return (
      <BandContext.Provider value={ this.state }>
        <div className = 'App'>
          <header className = 'App-Header'>
            <Route path='/' component={ NavBar }/> 
          </header>
          <main className='Header'>
            <Route exact path='/' component={ LandingPage }/>
            <Route exact path='/account' component={ AccountPage }/>
            <Route exact path='/login' component={ LoginPage }/>
            <Route exact path='/home' component={ HomePage }/>
            <Route exact path='/profile' component={ ProfilePage }/>
            <Route exact path='/watch' component={ WatchPage }/>
            <Route exact path='/listen' component={ ListenPage }/>
            <Route exact path='/shows' component={ ShowsPage }/>
            <Route exact path='/signup' component={ SignUpPage }/>
          </main>
          <footer>
            <Route path='/' component={ Footer }/> 
          </footer>
        </div>
      </BandContext.Provider>
    );
  }
}

export default App;