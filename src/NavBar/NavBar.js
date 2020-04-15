import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import Context from '../Contexts/Context';

class NavBar extends React.Component {
  static contextType = Context;

  render() {
    return (
      <section className="navbar">
        <div className="drawer-toggle-div">
          <DrawerToggleButton />
        </div>

        {this.context.authToken ? (
          ''
        ) : (
          <h1 className="crescendo-home">
            <Link className="crescendo-home-a" to="/">
              Crescendo
            </Link>
          </h1>
        )}
        <nav>
          {this.context.authToken ? (
            <ul className="navlinks">
              {Object.keys(this.context.links).map((url, i) => (
                <li key={i} className="nav-li">
                  <Link className="navlinks-a" to={`/${url}`}>
                    {this.context.links[url]}
                  </Link>
                </li>
              ))}
              {this.context.userProfile ? (
                <li className="nav-li">
                  <Link
                    className="navlinks-a"
                    to={`/site/${this.context.userProfile.band_slug}`}
                  >
                    View Site
                  </Link>
                </li>
              ) : (
                ''
              )}
            </ul>
          ) : (
            ''
          )}
          {this.context.authToken ? (
            <a
              className="login-link"
              href="/logout"
              onClick={e => {
                e.preventDefault();
                this.context.logout();
              }}
            >
              <button className="nav-button" type="submit">
                <li className="nav-li">Sign Out</li>
              </button>
            </a>
          ) : (
            <Link className="login-link" to="/login">
              <button className="nav-button" type="submit">
                <li className="nav-li">Sign In</li>
              </button>
            </Link>
          )}
        </nav>
      </section>
    );
  }
}

export default NavBar;
