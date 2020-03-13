import React from 'react';

export default React.createContext({
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

  shows: [],

  emails: []
});
