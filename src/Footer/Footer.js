import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <section className='footer'>
                <ul className='links'>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/GhostPavilion'>
                            <img className='icons' alt='facebook' src='images/facebook.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.twitter.com/ghost_pavilion'>
                            <img className='icons' alt='twitter' src='images/twitter.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/ghost_pavilion'>
                            <img className='icons' alt='instagram' src='images/instagram.png' />   
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCr56a0HjTtBCzkTu1rgRQWg'>
                            <img className='icons' alt='youtube' src='images/youtube.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://soundcloud.com/ghost-pavilion'>
                            <img className='icons' alt='soundcloud' src='images/soundcloud.png' />   
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='https://ghostpavilion.bandcamp.com/'>
                            <img className='icons' alt='bandcamp' src='images/bandcamp.png' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href='mailto:info@ghostpavilion.com'>
                            <img className='icons' alt='email' src='images/email.png' />
                        </a>
                    </li>
                </ul>
        </section>
    );
}

export default Footer;