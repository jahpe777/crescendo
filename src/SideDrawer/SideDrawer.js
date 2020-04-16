import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './SideDrawer.css';

import Context from '../Contexts/Context';

class SideDrawer extends React.Component {
  static contextType = Context;

  render() {
    let bandslug = this.props.bandslug;
    return (
      <>
        <nav className="side-drawer">
          <ul>
            {Object.keys(this.context.links).map((url, i) => (
              <li key={i} className="nav-li">
                <Link
                  to={`/${url}`}
                  onClick={() => this.context.drawerClickHandler()}
                >
                  {this.context.links[url]}
                </Link>
              </li>
            ))}

            <li className="nav-li">
              <Link
                to={`/site/${bandslug}`}
                onClick={() => this.context.drawerClickHandler()}
              >
                View My Site
              </Link>
            </li>
          </ul>
        </nav>
        <div className="backdrop" onClick={this.context.drawerClickHandler} />
      </>
    );
  }
}

export default withRouter(SideDrawer);
