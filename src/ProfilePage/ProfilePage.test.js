import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './ProfilePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    }
  };
  ReactDOM.render(<ProfilePage {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
