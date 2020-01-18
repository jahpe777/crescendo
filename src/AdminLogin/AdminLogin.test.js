import React from 'react';
import ReactDOM from 'react-dom';
import AdminLogin from './AdminLogin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<AdminLogin {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});