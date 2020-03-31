import React from 'react';

export default React.createContext({
  history: {
    push: () => {}
  },

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
    home: 'Home',
    profile: 'Profile',
    watch: 'Watch',
    listen: 'Listen',
    shows: 'Shows',
    signup: 'Mailing List'
  },

  imageHelp: false,
  audioHelp: false,
  videoHelp: false,
  showHelp: false,
  linkHelp: false
});
