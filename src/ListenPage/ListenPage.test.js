import React from 'react';
import ReactDOM from 'react-dom';
import ListenPage from './ListenPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<ListenPage {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});