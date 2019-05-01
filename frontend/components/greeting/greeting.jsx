import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        // <nav>
        //     <Link to="/login">Login</Link>
        //     <br />
        //     <Link to="/signup">Sign Up!</Link>
        // </nav>

        <>
            <li><Link onClick = {() => openModal('login')} className="header-link">Login</Link></li>
            <li><Link onClick = {() => openModal('signup')} className="header-link">Sign Up!</Link></li>
        </>
    );

    const personalGreeting = () => (
        <>
            <li className="header-link">{currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)}</li>
            {/* <li><button onClick={logout}>Log Out</button></li> */}
            <li><Link className="header-link" onClick={logout}>Sign Out</Link></li>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;