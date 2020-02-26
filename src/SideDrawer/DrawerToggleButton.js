import React from 'react';

import './DrawerToggleButton.css';

import Context from '../Contexts/Context';

class DrawerToggleButton extends React.Component {
  static contextType = Context;

  render() {
    return (
      <button
        className="toggle-button"
        onClick={this.context.drawerClickHandler}
      >
        {!this.context.sideDrawerOpen ? (
          <>
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
          </>
        ) : (
          <span className="toggle-button-close">x</span>
        )}
      </button>
    );
  }
}

export default DrawerToggleButton;
