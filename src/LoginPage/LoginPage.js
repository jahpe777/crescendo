import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Context from '../Contexts/Context';

class LoginPage extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="loginPage">
        <section className="image-loginPage">
          <div>
            <h1 className="account-create">Log In</h1>
            <p className="account-explore">
              Don't have an account?
              <Link to="/account" type="submit">
                {' '}
                Create account
              </Link>
            </p>
          </div>

          <div>
            <h3>Demo Account:</h3>
            <p>
              <strong>Username:</strong> testing2@gmail.com
            </p>
            <p>
              <strong>Password:</strong> Testing1234!
            </p>
          </div>

          <form
            className="account-form"
            ref={form => (this.form = form)}
            onSubmit={e =>
              this.context.login(e, () => {
                this.props.history.push('/profile');
                window.location.reload();
              })
            }
          >
            <p>
              <label htmlFor="account">Email: </label>
              <input
                className="email"
                placeholder="john@gmail.com"
                type="email"
                required
                name="email"
                id="email"
              />
            </p>
            <p>
              <label htmlFor="account">Password: </label>
              <input
                className="password"
                placeholder="password"
                type="password"
                required
                name="password"
                id="password"
              />
            </p>

            <p>
              <button className="account-button" type="submit">
                Submit
              </button>
            </p>
          </form>
        </section>
      </div>
    );
  }
}

export default LoginPage;
