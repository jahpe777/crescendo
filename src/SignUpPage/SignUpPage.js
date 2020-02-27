import React, { Component } from 'react';
import './SignUpPage.css';
import Context from '../Contexts/Context';

class SignUpPage extends Component {
  static contextType = Context;

  emailsHandleSubmit = e => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    this.context.addNewEmail(newEmail);
    this.form.reset();
    alert('Thanks for signing up!');
  };

  render() {
    return (
      <div className="signuppage">
        <section className="image-signuppage">
          <header>
            <h3 className="signup">Mailing List</h3>
          </header>
          <div className="signup-detail">
            <p>Hear about upcoming shows</p>
            <p>Free downloads</p>
            <p>and more!</p>
          </div>
          <form
            className="signup-form"
            ref={form => (this.form = form)}
            onSubmit={this.emailsHandleSubmit}
          >
            <p>
              <label htmlFor="email">Email: </label>
              <input
                placeholder="johnsmith@gmail.com"
                type="email"
                required
                name="email"
                id="email"
              />
            </p>

            <p>
              <button className="signup-button" type="submit">
                Sign Up
              </button>
            </p>
          </form>
        </section>
      </div>
    );
  }
}

export default SignUpPage;
