import React, { Component } from 'react';
import Context from '../Contexts/Context';
import './Footer.css';

class Footer extends Component {
  static contextType = Context;

  render() {
    return (
      <section className="footer">
        <ul className="links">
          {this.context.authToken
            ? Object.keys(this.context.userProfile).map(key =>
                this.context.userProfile[key] !== '' ? (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.context.userProfile[key]}
                    >
                      <img
                        className="icons"
                        alt={key}
                        src={`images/${key}.png`}
                      />
                    </a>
                  </li>
                ) : (
                  ''
                )
              )
            : ''}
        </ul>
      </section>
    );
  }
}

export default Footer;
