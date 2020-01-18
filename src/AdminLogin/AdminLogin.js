import React, { Component } from 'react';
import config from '../config';

class AdminLogin extends Component {
    onSubmit = e => {
        e.preventDefault();
        const pw = config.ADMIN_PW;
        if(e.target.password.value === pw) {
            window.localStorage.setItem('loggedIn','true');
            this.props.history.push('/admin_shows')
        }
    }

    render() {
        return (
            <div className='adminLoginPage'>
                <form onSubmit={e=>this.onSubmit(e)}>
                    <input type="password" placeholder="password" name="password" />
                    <p><button type='submit'>Submit</button></p>
                </form>
            </div>
            ) 
        }
    }

export default AdminLogin;