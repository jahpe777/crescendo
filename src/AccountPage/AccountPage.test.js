import React from 'react';
import ReactDOM from 'react-dom';
import AccountPage from './AccountPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    }
  };
  ReactDOM.render(<AccountPage {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
