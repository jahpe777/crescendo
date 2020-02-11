import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

import Context from '../Contexts/Context';

class NavBar extends React.Component {

    static contextType = Context;

    render(){
        return (
            <section className='navbar'>
                <h1 className='crescendo-home'><Link to='/'>Crescendo</Link></h1>
                    <nav>
                        { this.context.authToken ?
                        <ul className='navlinks'>
                            <li className='nav-li'><Link to='/home'>Home</Link></li>
                            <li className='nav-li'><Link to='/profile'>Profile</Link></li>
                            <li className='nav-li'><Link to='/watch'>Watch</Link></li>
                            <li className='nav-li'><Link to='/listen'>Listen</Link></li>
                            <li className='nav-li'><Link to='/shows'>Shows</Link></li>
                            <li className='nav-li'><Link to='/signup'>Mailing List</Link></li>
                        </ul>
                            : ''
                        }
                            { this.context.authToken ? 
                                <a 
                                    className='login-link' 
                                    href='/logout' 
                                    onClick={e => this.context.logout(e, () => this.props.history.push('/'))}
                                >
                                    <button className='nav-button' type='submit'>
                                        <li className='nav-li'>Sign Out</li>
                                    </button>
                                </a> 
                               : 
                                    <Link className='login-link' to='/login'>
                                        <button className='nav-button' type='submit'>
                                            <li className='nav-li'>Sign In</li>
                                        </button>
                                    </Link>
                            }
                    </nav>
            </section>
        );
    }
}

export default NavBar;