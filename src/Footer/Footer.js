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
    const profile = this.props.profile
      ? this.props.profile
      : this.context.userProfile;
    console.log(profile, 'profile');
    return (
      <section className="footer">
        <ul className="links">
          {this.context.authToken || this.props.profile
            ? Object.keys(profile).map(key =>
                profile[key] !== '' && iconKeys.includes(key) ? (
                  <li key={key}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={profile[key]}
                    >
                      <img
                        className="icons"
                        alt={key}
                        src={`/images/${key}.png`}
                      />
                    </a>
                  </li>
                ) : (
                  ''
                )
              )
            : ''}
          {profile.contact_email !== '' ? (
            <li>
              <a href={`mailto:${profile.contact_email}`}>
                <img
                  className="icons"
                  alt="Contact Email"
                  src="/images/email.png"
                />
              </a>
            </li>
          ) : (
            ''
          )}
        </ul>
      </section>
    );
  }
}

export default Footer;
