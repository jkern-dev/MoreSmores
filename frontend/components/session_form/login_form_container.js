import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Login',
        navLink: <Link to="/signup">Sign Up Instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <Link className="header-link" onClick={() => dispatch(openModal('signup'))}>Signup!</Link>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
