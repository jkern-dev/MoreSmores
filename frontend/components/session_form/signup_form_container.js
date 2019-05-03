import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import AccountForm from './create_user_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Signup',
        navLink: <Link to="/login">Log In Instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        otherForm: (
            <p className="header-link" onClick={() => dispatch(openModal('login'))}>Login</p>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AccountForm);