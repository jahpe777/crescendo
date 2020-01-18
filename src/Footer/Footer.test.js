import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<Footer {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});