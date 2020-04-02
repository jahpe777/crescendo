import React, { Component } from 'react';
import Context from '../Contexts/Context';
import './Footer.css';

class Footer extends Component {
  static contextType = Context;

  render() {
    const iconKeys = [
      'facebook',
      'twitter',
      'instagram',
      'youtube',
      'soundcloud',
      'bandcamp'
    ];
    return (
      <section className="footer">
        {this.context.userProfile !== undefined && (
          <ul className="links">
            {this.context.authToken
              ? Object.keys(this.context.userProfile).map(key =>
                  this.context.userProfile[key] !== '' &&
                  iconKeys.includes(key) ? (
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
            {this.context.authToken &&
            this.context.userProfile.contact_email !== '' ? (
              <li>
                <a href={`mailto:${this.context.userProfile.contact_email}`}>
                  <img
                    className="icons"
                    alt="Contact Email"
                    src="images/email.png"
                  />
                </a>
              </li>
            ) : (
              ''
            )}
          </ul>
        )}
      </section>
    );
  }
}

export default Footer;
