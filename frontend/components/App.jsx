import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Modal from './modal';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
        <Modal />
        <header className="header">
            <span ><Link to="/" ><img src={window.logo} className="logo"/></Link></span>
            
            <nav className="header-nav">
                <ul>
                    <li><Link to='/' className="header-link">Camp</Link></li>
                    <li><Link to='/' className="header-link">Host</Link></li>
                    <li ><Link to='/' className="header-link">Help</Link></li>
                    <GreetingContainer />
                </ul>
            </nav>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </>
);

export default App;