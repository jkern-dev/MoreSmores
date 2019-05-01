import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
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
        otherForm: (
            <Link className="header-link" onClick={() => dispatch(openModal('login'))}>Login</Link>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AccountForm);