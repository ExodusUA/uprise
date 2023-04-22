import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '.././App.css';
function Nav() {

    return (
        <section className='navigation'>
            
            <ul className='navLinksList'>
                <li><h1>Links</h1></li>
                <li><Link to={'/login'}>Login Page</Link></li>
                <li><Link to={'/signup'}>Signup Page</Link></li>
                <li><Link to={'/board'}>Board (??) Page</Link></li>
                <li><Link to={'/dashboard'}>Dashboard (Home) Page</Link></li>
                <li><Link to={'/dashboard/portfolio'}>Dashboard (Portfolio) Page</Link></li>
                <li><Link to={'/dashboard/settings'}>Dashboard (Settings) Page</Link></li>
            </ul>
        </section>
    );
}

export default Nav;
