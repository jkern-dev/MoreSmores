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

const App = () => (
    <div>
        <header>
            <h1>Hip Camp!</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;