import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AccountPage.css';
import Context from '../Contexts/Context';

class AccountPage extends Component {

  static contextType = Context;

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
                onSubmit={ e => this.context.signUp(e, () => this.props.history.push('/profile')) }
            >
                <p><label htmlFor='account'>Email: </label>
                    <input placeholder='john@gmail.com' type='email' required name='email' id='email' /></p>
                <p><label htmlFor='account'>Password: </label>
                    <input placeholder='password' type='password' required name='password' id='password' /></p>

                <p><button className='account-button' type='submit'>Submit</button></p>
            </form>

        </section>
      </div>
    );
  }
}

export default AccountPage;