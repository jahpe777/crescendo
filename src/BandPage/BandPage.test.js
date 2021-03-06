import React from 'react';
import ReactDOM from 'react-dom';
import BandPage from './BandPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    }
  };
  ReactDOM.render(<BandPage {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
