import React from 'react';
import ReactDOM from 'react-dom';
import DrawerToggleButton from './DrawerToggleButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    }
  };
  ReactDOM.render(<DrawerToggleButton {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
