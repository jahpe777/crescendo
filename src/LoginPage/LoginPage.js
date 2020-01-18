import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className='loginPage'>
        <section className='image-loginPage'>
            <div>
                <h1 className='account-create'>Log In</h1>
                <p className='account-explore'>Don't have an account? Create account</p>
            </div>

            <form 
                className='account-form' 
                ref={ form => this.form = form } 
                onSubmit={ this.handleSubmit }
            >
                <p><label htmlFor='account'>Email: </label>
                    <input placeholder='john@gmail.com' type='email' required name='account' id='account' /></p>
                <p><label htmlFor='account'>Password: </label>
                    <input placeholder='john@gmail.com' type='password' required name='account' id='account' /></p>

                <p><button className='account-button' type='submit'>Submit</button></p>
            </form>
        </section>
      </div>
    );
  }
}

export default LoginPage;