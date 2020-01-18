import React from 'react';
import ReactDOM from 'react-dom';
import WatchPage from './WatchPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<WatchPage {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});