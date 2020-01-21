import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AccountPage.css';

class AccountPage extends Component {
  render() {
    return (
      <div className='accountPage'>
        <section className='image-accountPage'>
              <div>
                <h1 className='account-create'>Create Account</h1>
                <p className='account-explore'>Already have an account? 
                    <Link to='/login' type='submit'> Sign In</Link>
                </p>
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

export default AccountPage;