import React from 'react';
import ReactDOM from 'react-dom';
import AdminShows from './AdminShows';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<AdminShows {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});