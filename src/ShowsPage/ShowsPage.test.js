import React from 'react';
import ReactDOM from 'react-dom';
import ShowsPage from './ShowsPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      match: { params: {} },
      history: {
        push: () => {}
      },
    }
    ReactDOM.render(<ShowsPage {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });