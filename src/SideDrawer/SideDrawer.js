import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

import Context from '../Contexts/Context';

class SideDrawer extends React.Component {
  static contextType = Context;

  render() {
    return (
      <>
        <nav className="side-drawer">
          <ul>
            {Object.keys(this.context.links).map(url => (
              <li className="nav-li">
                <Link
                  to={`/${url}`}
                  onClick={() => this.context.drawerClickHandler()}
                >
                  {this.context.links[url]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="backdrop" onClick={this.context.drawerClickHandler} />
      </>
    );
  }
}

export default SideDrawer;
