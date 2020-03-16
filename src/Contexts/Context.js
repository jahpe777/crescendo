import React from 'react';

export default React.createContext({
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
    email: ''
  },

  shows: [],

  emails: []
});
